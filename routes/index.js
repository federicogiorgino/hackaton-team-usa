const express = require("express");
const router = express.Router();
const axios = require("axios");
//require and npm i axios

/* GET /timeline */
router.get("/year", function(req, res, next) {
  axios
    .get("https://hack-usa-jasondata.herokuapp.com/year")
    .then(resp => {
      data = resp.data;
      res.render("index", { data });
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET /timeline/year */

router.get("/year/:year", function(req, res, next) {
  const { year } = req.params;
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year?year=${year}`)
    .then(resp => {
      data = resp.data;
      res.render("", {});
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET /timeline/year/event */

router.get("/year/:year/:event", (req, res) => {
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year?year=${year}&event=${event}`)
    .then(resp => {
      data = resp.data;
      data.forEach(element => {});
      element => {
        console.log(data);
      };
    })

    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
