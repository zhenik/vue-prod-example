const admin = require('firebase-admin'),
    express = require('express'),
    serviceAccount = require('./project-credentials.json'),
    cors = require('cors'),
    port = 8080,
    token_key = 'Token';

//Firebase Admin SDK
const appConfig = {
  credential: admin.credential.cert(serviceAccount),
  projectId: process.env.PROJECT_ID
}
admin.initializeApp(appConfig);
console.log("Project id " + admin.app().name)

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

var app = express();
app.use(cors())

app.post('/auth', cors(corsOptions), function(req, res, next) {
  authenticate(req, res);
});

app.listen(port, '0.0.0.0', () => console.log('App listening on port '+port));

//authenticates the token using Firebase Admin SDK
function authenticate (req, res) {
  var idToken = req.header(token_key); //grab the token from the http header
  console.log("Headers "+ req.headers)

  if (idToken) {
    //uses the Firebase Admin SDK to decode the token and get the UID
    console.log("idToken "+ JSON.stringify(idToken))
    admin.auth().verifyIdToken(idToken).then(function(decodedToken) {
      var uid = decodedToken.uid;

      console.log(uid, decodedToken.aud);
      res.status(200).send('User authenticated')
    }).catch(function(error) {
      console.log('Invalid token or token expired');
      res.status(403).send('You have provided an invalid token or your token has expired\n')
    });
  }
  else {
    console.log('no token provided');
    res.status(404).send('Please provide a token\n');
  }
}
