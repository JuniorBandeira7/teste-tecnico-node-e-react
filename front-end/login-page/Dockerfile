FROM node:latest

WORKDIR /tmp/react

COPY . .

RUN rm -rf node_modules

RUN npm install

RUN npm run build

# Verifique se a pasta build/ foi gerada
RUN test -d build || { echo "Build failed: 'build' directory not found"; exit 1; }

RUN mkdir -p /var/www/html

# Mova a pasta build para /var/www/html apenas se ela existir
RUN mv build/* /var/www/html

WORKDIR /

VOLUME /var/www/html

RUN rm -rf /tmp/react
