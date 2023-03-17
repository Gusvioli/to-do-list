#! /bin/bash

export NODE_ENV=development

printf "\n> Dist end build \n\n"

cd ./backend
npm run build

cd ..
cd ./frontend
npm run build
