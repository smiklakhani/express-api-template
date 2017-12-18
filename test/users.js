var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../app");
var should = chai.should();

chai.use(chaiHttp);

describe("Users", () => {
  it("should list ALL users on /users GET", function(done) {
    chai
      .request(server)
      .get("/users")
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});
