install: install-deps

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

lint:
	npx eslint ./src --ext js,jsx

publish:
	npm publish

.PHONY: test