.PHONY: install
install:
	mkcert -cert-file certs/local-cert.pem -key-file certs/local-key.pem "app.localhost" "*.app.localhost" "domain.local" "*.domain.local"
	update

.PHONY: update
update:
	docker compose run --rm node yarn install

.PHONY: start
start:
	docker compose --profile stack up -d

.PHONY: start-proxy
start-proxy:
	docker compose --profile tools up -d

.PHONY: stop
stop: docker compose --profile stack down
