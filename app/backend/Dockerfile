FROM node:16.14-alpine
WORKDIR /app/backend
COPY . .
EXPOSE 3001
RUN npm install
COPY . .
ENTRYPOINT ["npm", "run", "dev"]
