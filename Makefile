install: install-deps

install-deps:
	npm install

build:
	npm run build-app

lint:
	npx eslint ./src --ext js,jsx

publish:
	npm publish

development:
	npm run dev


.PHONY: test