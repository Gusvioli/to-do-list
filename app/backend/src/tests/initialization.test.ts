import sinon from 'sinon'
import chai from 'chai'
// @ts-ignore
import chaiHttp = require('chai-http')

import App from '../app'
import { Response } from 'superagent'
chai.use(chaiHttp)
const { app } = new App()
const { expect } = chai

describe("Teste de rota '/' vericando se o Back-end foi inicializado", () => {
  afterEach(function () {
    sinon.restore()
  })
  let chaiHttpResponse: Response
  it("Deve retornar {'ok': true} como menssagem no acesso à rota '/'", async () => {
    chaiHttpResponse = await chai.request(app).get('/').send()
    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body.ok).to.be.equal(true)
  })
})
