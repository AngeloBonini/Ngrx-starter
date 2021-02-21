#!/bin/sh

echo '==============================================='
echo 'Testando versão do node e npm'
echo '==============================================='
echo ''

node -v
npm -v

echo ''
echo '==============================================='
echo 'Instalação dos pacotes do projeto'
echo '==============================================='
echo ''

npm i

echo ''
echo '==============================================='
echo "Executando no ambiente ${ENVIRONMENT}"
echo '==============================================='
echo ''

if [ "${ENVIRONMENT}" = 'dev' ]; then
  npm start
else
  npm run build:prod:aot
  npm run server:prod ${NGINX_WEB_PORT}
fi
