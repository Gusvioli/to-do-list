import sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import UserModel from '../database/models/UserModel';
import { loginMock, loginMockInvalid, userMock } from './mocks/loginMocks';
import { Response } from 'superagent';
import verifyToken from '../utils/VerifyToken';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Teste de rota /login', () => {
    afterEach(function() {
        sinon.restore();
    });
    let chaiHttpResponse: Response;

    describe('Teste de login com sucesso!', () => {
        it(("Deve retornar um status 200"), async () => {
            before(async () => {
              sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel);
            })
            chaiHttpResponse = await chai.request(app).post('/login').send(loginMock);
            expect(chaiHttpResponse.status).to.be.equal(200);
        });
    
        it(("Deve retornar uma menssagem: 'Login realizado com sucesso'"), async () => {
            before(async () => {
              sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel);
            })
            chaiHttpResponse = await chai.request(app).post('/login').send(loginMock);
            expect(chaiHttpResponse.body.message).to.be.deep.equal('Login realizado com sucesso');
        });
    
        it(("Deve retornar um token inválido"), async () => {
            before(async () => {
              sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel);
            })
            chaiHttpResponse = await chai.request(app).post('/login').send(loginMock);
            expect(() => verifyToken(chaiHttpResponse.body.token)).to.not.throw();
        });
    });

    describe('Teste de login com fracasso!', () => {
        it(("Deve retornar um status 401"), async () => {
            before(async () => {
              sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel);
            })
            chaiHttpResponse = await chai.request(app).post('/login').send(loginMockInvalid);
            expect(chaiHttpResponse.status).to.be.equal(401);
        });
    
        it(("Deve retornar uma menssagem: 'Incorrect email or password'"), async () => {
            before(async () => {
              sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel);
            })
            chaiHttpResponse = await chai.request(app).post('/login').send(loginMockInvalid);
            expect(chaiHttpResponse.body.message).to.be.deep.equal('Incorrect email or password');
        });
    
        it(("Deve retornar um token válido"), async () => {
            before(async () => {
              sinon.stub(UserModel, 'findOne').resolves(userMock as UserModel);
            })
            chaiHttpResponse = await chai.request(app).post('/login').send(loginMockInvalid);
            expect(() => verifyToken(chaiHttpResponse.body.token)).to.throw();
        });
    });
    
});