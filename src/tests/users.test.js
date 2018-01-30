const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../../config/config');
const server = require('../../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  it('should list ALL users on /users GET', done => {
    chai
      .request(server)
      .get(`/${config.API_NAME}/users`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});
