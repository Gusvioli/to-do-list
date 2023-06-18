import sinon from 'sinon'
import chai from 'chai'
// @ts-ignore
import chaiHttp = require('chai-http')

import App from '../app'
import UserModel from '../database/models/UserModel'
import { userMock, userMockToken } from './mocks/loginMocks'
import { Response } from 'superagent'

chai.use(chaiHttp)
const { app } = new App()
const { expect } = chai

describe('Teste de rota /login', () => {
  afterEach(function () {
    sinon.restore()
  })
  let chaiHttpResponse: Response

  describe('Teste de userName com sucesso!', () => {
    it('Deve retornar o status 200', async () => {
      // eslint-disable-next-line no-undef
      before(async () => {
        sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel)
      })
      chaiHttpResponse = await chai
        .request(app)
        .post('/userName')
        .send(userMockToken)
      expect(chaiHttpResponse.status).to.be.equal(200)
    })
    it("Deve retornar o nome 'Gustavo Vieira'", async () => {
      // eslint-disable-next-line no-undef
      before(async () => {
        sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel)
      })
      chaiHttpResponse = await chai
        .request(app)
        .post('/userName')
        .send(userMockToken)
      expect(chaiHttpResponse.body.name).to.be.equal('Gustavo Vieira')
    })
  })
})
