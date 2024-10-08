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

git  clone  https://github.com/seuusuario/seurepositorio.git

cd  seurepositorio

```

  

### 2. Criar a Rede Docker

  

Crie uma rede Docker para que os contêineres possam se comunicar entre si:

  

```bash

docker  network  create  net-teste-tecnico

```

  

### 3. Executar o MongoDB

  

Execute o contêiner do MongoDB na rede criada:

  

```bash

docker  run  -d  --name  mongo  --network  net-teste-tecnico  mongo

```

  

### 4. Construir a Imagem do Back-end

  

Navegue até o diretório apis e construa a imagem:

  

```bash

docker  build  -t  api-teste-tecnico  .

```

  

### 5. Executar a Aplicação

  

Execute o contêiner da sua aplicação, conectando-o à rede e mapeando a porta desejada:

  

```bash

docker  run  -d  --name  api-teste-tecnico  --network  net-teste-tecnico  -p  5000:5000  api-teste-tecnico

```


### 6. Construir a Imagem do Front-end

Navegue até o diretório front-end\login-page e construa a imagem:

```bash

docker build -t spa-teste-tecnico .

```

### 7. Executar a Aplicação

  

Execute o contêiner da sua aplicação, conectando-o à rede e mapeando a porta desejada e configurando o volume:

  

```bash

docker run -d --name spa-teste-tecnico -v spa-volume:/var/www/html --network net-teste-tecnico spa-teste-tecnico

```

### 8. Construir a Imagem do servidor Nginx

Navegue até o diretório nginx e construa a imagem:

```bash

docker build -t nginx-teste .

```

### 9. Executar a Aplicação

  

Execute o contêiner da sua aplicação, conectando-o à rede e mapeando a porta desejada e configurando o volume:

  

```bash

docker run -d --name nginx-container -v spa-volume:/var/www/html -p 80:80 --network net-teste-tecnico nginx-teste

```

### 10. Verificar se tudo está Funcionando

  

Para verificar se os contêineres estão rodando corretamente, use o seguinte comando:

  

```bash

docker  ps

```

  

Você deve ver todos os contêiners criados anteriormente na lista.

  

### 11. Acessar a Aplicação

  

Agora, você pode acessar a sua aplicação no navegador usando:

  

```

http://localhost

```

  

### 12. Parar os Contêineres

  

Para parar os contêineres quando não precisar mais, use:

  

```bash

docker  stop  api-teste-tecnico

docker  stop  mongo

docker  stop spa-teste-tecnico

docker  stop nginx-teste

```

  

### 13. Remover os Contêineres

  

Se você quiser remover os contêineres, use:

  

```bash

docker  rm  api-teste-tecnico

docker  rm  mongo

docker  rm spa-teste-tecnico

docker  rm nginx-teste

```

  

## Conclusão

  

Agora você tem sua aplicação e o MongoDB rodando em contêineres Docker. Se precisar de mais informações ou tiver problemas, consulte a [documentação do Docker](https://docs.docker.com/).