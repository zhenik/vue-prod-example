# package manager [PM], change to 'npm'
PM := yarn

.PHONY: dev build install build-prod
dev:
	${PM} run serve

build: install build-prod

install:
	${PM} install

build-prod:
	${PM} run build
