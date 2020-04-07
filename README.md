# Example application vue + quarkus

## Deployment pattern
`docker-compose.yml` file with two services, backend api and 
nginx-proxy which serves static vuejs build.

For debugging purpose nginx proxy has build with `curl`.

## Specific 
Vue does not resolve `docker-compose.service` name.
Frontend communicate with backend via loopback
