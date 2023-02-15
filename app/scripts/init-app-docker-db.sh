#! /bin/bash

export NODE_ENV=development

printf "\n> Criando o banco de dados e populando \n\n"

cd ./backend
npx sequelize-cli db:drop
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
