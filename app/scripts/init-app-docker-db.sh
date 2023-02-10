#! /bin/bash

export NODE_ENV=development

printf "\n> Criando o banco de dados e populando \n\n"

cd ./backend
npm run prestart
