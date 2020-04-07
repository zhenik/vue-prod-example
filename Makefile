ROOT_PROJECT 	:= ${PWD}

.PHONY: build build-backend build-frontend

build:
	${MVN} compile quarkus:dev

# build image first `make build`
build-backend:
	cd backend && \
		make build

build-frontend:
	cd frontend && \
		make build

