# Projeto de Autenticação de Usuário

  

Este projeto é uma aplicação de autenticação de usuário que permite a funcionalidade de cadastro, login e edição de informações do usuário. A aplicação é dividida em duas partes: um backend construído com Node.js e um frontend construído com React.

  

## Tecnologias Usadas

  

### Backend (Node.js)

  

-  **express**: Framework minimalista para construir aplicações web e APIs.

-  **cookie-parser**: Middleware para analisar cookies na requisição.

-  **bcryptjs**: Biblioteca para hashing de senhas.

-  **jsonwebtoken**: Biblioteca para criação e verificação de JSON Web Tokens.

-  **mongodb**: Driver para conectar e manipular um banco de dados MongoDB.

-  **mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.


  

### Frontend (React)

  

-  **react**: Biblioteca para construção de interfaces de usuário.

-  **typescript**: superset do JavaScript.

-  **react-router-dom**: Biblioteca para gerenciamento de rotas em aplicações React.

-  **axios**: Cliente HTTP para fazer requisições ao servidor.


  

## Funcionalidades

  

-  **Cadastro de Usuário**: Permite que novos usuários se registrem fornecendo informações como nome, e-mail e senha.

-  **Login de Usuário**: Usuários podem fazer login com suas credenciais.

-  **Edição de Informações**: Usuários podem atualizar suas informações de perfil após o login.

-  **Segurança**: Autenticação utilizando JSON Web Tokens e hashing de senhas.


# Tutorial para Rodar o Projeto com Docker

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado na sua máquina.
- Um terminal ou prompt de comando.

## Passos para Executar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório do GitHub para a sua máquina:

```bash
git clone https://github.com/seuusuario/seurepositorio.git
cd seurepositorio
```

### 2. Criar a Rede Docker

Crie uma rede Docker para que os contêineres possam se comunicar entre si:

```bash
docker network create net-teste-tecnico
```

### 3. Executar o MongoDB

Execute o contêiner do MongoDB na rede criada:

```bash
docker run -d --name mongo --network net-teste-tecnico -p 27017:27017 mongo
```

### 4. Construir e Executar o Back-end

Navegue até o diretório `apis`, construa a imagem e execute o contêiner:

```bash
cd apis
docker build -t api-teste-tecnico .
docker run -d --name api-teste-tecnico --network net-teste-tecnico -p 5000:5000 api-teste-tecnico
```

### 5. Construir o Front-end

Navegue até o diretório `front-end/login-page` e construa a imagem:

```bash
cd ../front-end/login-page
docker build -t spa-teste-tecnico .
```

### 6. Executar o Front-end

Execute o contêiner do frontend com o volume para os arquivos estáticos:

```bash
docker run -d --name spa-teste-tecnico -v spa-volume:/var/www/html --network net-teste-tecnico spa-teste-tecnico
```

### 7. Construir e Executar o Nginx

Navegue até o diretório `nginx`, construa a imagem e execute o contêiner:

```bash
cd ../../nginx
docker build -t nginx-teste .
docker run -d --name nginx-teste -v spa-volume:/var/www/html -p 80:80 --network net-teste-tecnico nginx-teste
```

### 8. Verificar se tudo está Funcionando

Para verificar se os contêineres estão rodando corretamente:

```bash
docker ps
```

Você deve ver todos os contêineres: `mongo`, `api-teste-tecnico`, `spa-teste-tecnico` e `nginx-teste`.

### 9. Acessar a Aplicação

Acesse a aplicação no navegador:

```
http://localhost
```

### 10. Verificar os Logs

Para verificar se o backend conectou ao MongoDB:

```bash
docker logs api-teste-tecnico
```

Você deve ver as mensagens `conectado` e `Server running on http://127.0.0.1:5000`.

### 11. Parar os Contêineres

```bash
docker stop api-teste-tecnico mongo spa-teste-tecnico nginx-teste
```

### 12. Remover os Contêineres

```bash
docker rm api-teste-tecnico mongo spa-teste-tecnico nginx-teste
```

## Conclusão

Agora você tem sua aplicação e o MongoDB rodando em contêineres Docker. Se precisar de mais informações ou tiver problemas, consulte a [documentação do Docker](https://docs.docker.com/).