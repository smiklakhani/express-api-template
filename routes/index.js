const logger = require("winston");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  logger.log("info", "index route was requested");
  res.render("index", { title: "Express" });

  // Start here



myObj = {
  "username":  "john doe", email: "john@test.com", password: 'nevershowapassword'
}

function showEmail() {
  if (myOjb.username == 'john doe') {console.log(myObj.email);;


  } else
  {
    console.log('not found');
  }
}

//    showEmail()
});

module.exports = router;
