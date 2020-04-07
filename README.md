# Example application vue + quarkus

## How to run
```bash
docker-compose up -d
```
All images are  publicly available on docker hub.
## Build
Check `Makefile` for instructions.

## Deployment pattern
`docker-compose.yml` file with two services, backend api and 
nginx-proxy which serves static vuejs build.

Frontend communicate with backend via loopback.

For debugging purpose nginx proxy has build with `curl`.

## Specific 
Vue does not resolve `docker-compose.service` name.
Frontend communicate with backend via loopback
