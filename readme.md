# Secrets Manager Service

o ***Secrets Manager Service*** é um projeto para ser utilizado como gerenciador de senhas pessoal.
No atual estágio do projeto não é recomendado que ele seja utilizado em ambiente de produção.

## Tecnologias

As técnologia utilizadas para desenvolver este serviço foram:

 - NodeJS
 - Typescript
 - Postgres

Junto ao NodeJS e Typescript foram utilizados algumas libs para auxliar no desenvolvimento. Estas libs foram:

  - TypeORM
  - Overnightjs (Para rotas)
  - Express
  - Morgan
  - pg (Driver de conexão com postgres)

## Configuração

Para configurar o projeto, após o clone, é necessário:

### Instalar pacotes

```
npm install
```

### Configurar arquivo .env

Para configurar este arquivo pode ser uma cópia do `sample.env` com os dados preenchidos.
Para que funcione corretamente, renomeie para `.env`

### Build do projeto

```
npm run build
```

### Start

```
npm start
```

### Start em ambiente de desenvolvimento

Caso deseje iniciar em ambiente de desenvolvimento, não é necessário executar o passo de **Build**

```
npm run dev
```

## Próximas features

Este projeto está em constante evolução, portanto em breve serão adicionados as seguintes features:

 - Autenticação
 - Docker e Docker compose
 - Swagger de endpoints

Será desenvolvido também em outro projeto, uma versão mobile e Web para consumo deste serviço.
