const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../../config/config');
const server = require('../../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Index', () => {
  it('should display the appropriate view on / GET', done => {
    chai
      .request(server)
      .get(`/${config.API_NAME}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      })
  });
});
