MVN := ./mvnw

.PHONY: run compile-native build-image-native req build

run:
	${MVN} compile quarkus:dev

# build image first `make build`
run-docker:
	docker-compose up -d

build: compile-native build-image-native

# compile native binary inside container for Linux OS
compile-native:
	${MVN} package -Pnative -Dquarkus.native.container-build=true \
      -Dquarkus.native.container-runtime=docker

# build docker image from compiled binary native
build-image-native:
	docker build -f src/docker/Dockerfile.native -t zhenik/example-backend:1.0 .

req:
	curl http://localhost:8080/api/v1/users
