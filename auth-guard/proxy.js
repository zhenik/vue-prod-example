const admin = require('firebase-admin'),
    express = require('express'),
    serviceAccount = require('./project-credentials.json'),
    port = 8080,
    token_key = '';

//Firebase Admin SDK
admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

var app = express();

// https://www.npmjs.com/package/cors
// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors());
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })

app.post('/auth', function(req, res) {
  authenticate(req, res);
});

app.listen(port, '0.0.0.0');

//authenticates the token using Firebase Admin SDK
function authenticate (req, res) {
  var idToken = req.headers[token_key]; //grab the token from the http header

  if (idToken) {
    //uses the Firebase Admin SDK to decode the token and get the UID
    admin.auth().verifyIdToken(idToken).then(function(decodedToken) {
      var uid = decodedToken.uid;

      console.log(uid, decodedToken.name);
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
