# Projeto To-do-list

## Descrição:

### Esse é um projeto Full-stack para o portfóleo de Gustavo Vieira e funciona utilizando um sistema C.R.U.D(Create, Read, Update e Delete) que armazena tarefas de um usuário

<br>

## Stacks envolvidas:

> Docker<br>
> CSS3<br>
> HTML5<br>
> React.js<br>
> Javascript<br>
> Typescript<br>
> JWT<br>
> EsLint<br>
> Express.js<br>
> Joi<br>
> Sistema MSC(Model, Services e controllers)<br>
> Mysql<br>
> Sequelize<br>
> Jest(Teste unitários)<br>

<br>

## Como iniciar o projeto to-do-list pelo docker

### Obs:. É necessário ter o node.js instalado no sistema e de preferência a IDE VScode

<br>

1. faça a clonagem do repositório <https://github.com/Gusvioli/to-do-list> do Github em um diretório a sua excolha,
utilize o comando: <code>git clone git@github.com:Gusvioli/to-do-list.git</code> em um terminal acossiado ao diretório escolhido
2. digite: <code>npm run up:build:d </code> para subir o container docker em segundo plano
ou digite: <code>npm run up:build </code> para subir o container docker em primeiro plano
3. aguarde o container docker subir
4. abra seu navegador e digite: <http://localhost:3000/> para o Front-end e <http://localhost:3001/> p/ Back-end

<br>

## Como iniciar o projeto to-do-list diretamente pelo terminal(Front e back)

### Obs:. É necessário ter o node.js instalado no sistema e de preferência a IDE VScode

<br>

1. abra o terminal integrado no diretório app/backend e digite o comando: <code> npm run dev </code>
2. depois abra o terminal integrado no diretório app/frontend e digite o comando: <code> npm start </code>
3. logo após o carregamento estiver completo abra o terminal integrado do diretório app/ e digite o comando: <code> npm run start:db </code> p/ criar e pupular o banco de dados.
1. agora abra seu navegador e digite: <http://localhost:3000/> para o Front-end e <http://localhost:3001/> p/ Back-end

<br>

#### Comandos extras para docker(PACKAGE.JSON)

> "up:build": "docker-compose down && docker-compose up --build && ./scripts/init-app-docker-db.sh",<br>
> "up:build:d": "docker-compose down && docker-compose up -d --build && ./scripts/init-app-docker-db.sh",<br>
> "down": "docker-compose down",<br>
> "stop": "docker-compose stop",<br>
> "up": "docker-compose down && docker-compose up && ./scripts/init-app-docker-db.sh",<br>
> "prune": "docker system prune -a",<br>
> "start:db": "./scripts/init-app-docker-db.sh",<br>
> "dist": "./scripts/dist-end-build.sh"</br>
