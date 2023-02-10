const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "API To-do-list",
        description: "Esta documentação é destinada ao projeto To-do-list"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ['http','https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    definitions: {
        BodyNotFound: {
            message: "Body not found"
        },
        IdInvalidError: {
            message: "Invalid mongo id"
        },
        IdNotFoundError: {
            message: "Car not found"
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = [
    './dist/src/app/api/controllers/CarController.js',
    './dist/src/app/api/controllers/MotorcycleController.js',
]

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import ('./dist/src/app/App.js');         // Your project's root file
})
