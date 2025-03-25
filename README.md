# SNOOPY PetSHop
Projeto de estudos do ORM Prisma com MySQL no Node.JS
## Tecnologias
- Node.JS
- VsCode
- XAMPP
- Insomnia
## Como testar
- 1 Clone este repositório
- 2 Abra com VsCode, abra um terminal CTRL + ' navegue até a pasta ./api e escute os seguintes comandos
```bash
cd api
npm install
```
- 3 Crie o arquivo .env na pasta api contendo a variável de ambiente de concexão
```js
DATABASE_URL="mysql://root@localhost:3306/petshop?schema=public&timezone=UTC"
PORT=5000
```
- 4 Abra o XAMPP Control Panel e de start no MySQL
- 5 No terminal instale o prisma globalmente e execute o comando da migração
```bash
npm i prisma -g
npx prisma migrate dev --name init
```
- 6 Execute a API e faça os testes com o **Insomnia**
```bash
npm start
# ou
npx nodemon
```