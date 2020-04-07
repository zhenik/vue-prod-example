ROOT_PROJECT 	:= ${PWD}

.PHONY: build build-backend build-frontend b

build:
	${MVN} compile quarkus:dev

# build image first `make build`
build-backend:
	cd backend && \
		make build

build-frontend:
	cd frontend && \
		make build

b:
	docker build -t frontend .
r:
	docker run -d -p 80:8080 frontend
