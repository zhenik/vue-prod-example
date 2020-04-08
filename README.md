# Example application vue + quarkus

## How to run
Build frontend
```bash
make build-frontend
```
Run 
```bash
docker-compose up -d
```
All images are  publicly available on docker hub.
## Other commands
Check `Makefile` for instructions.

## Deployment pattern
`docker-compose.yml` file with two services, backend api and 
nginx-proxy which serves static vuejs build.

Frontend communicate with backend via loopback.

For debugging purpose nginx proxy has build with `curl`.

## Docker container without compose
Create custom bridge network
```bash
docker network create -d bridge my-custom-network
```

```bash
docker run -d --name backend \
  --hostname backend \
  --network=my-custom-network \
  -p 8888:8080 \
  zhenik/example-backend:1.0

docker run -d \
  --network=my-custom-network \
  -p 3000:3000 \
  -v "${PWD}/frontend/dist:/app" \
  -v "${PWD}/.nginx.conf/default2.conf:/etc/nginx/conf.d/default.conf" \
  zhenik/nginx-with-curl:1.17.9 
```
