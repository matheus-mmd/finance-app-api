# finance-app-api

# criar os bancos de dados

docker-compose up --detach

# dar permissão a pasta .postgres-data caso esteja sem permissão

sudo chown -R $(whoami) .postgres-data

# migrar o prisma

npx prisma migrate dev
