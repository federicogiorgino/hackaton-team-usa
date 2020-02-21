const express = require("express");
const router = express.Router();
const axios = require("axios");
//require and npm i axios

/* GET /timeline */
router.get("/", (req, res, next) => {
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

router.get("/:year", (req, res, next) => {
  const { year } = req.params;
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year?year=${year}`)
    .then(resp => {
      data = resp.data;
      res.render("yearDetails", { data });
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET /timeline/year/event */

router.get("/:yearId/event", (req, res) => {
  const { yearId, event } = req.params;
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year?yearId=${yearId}/event`)
    // .get(`https://hack-usa-jasondata.herokuapp.com/year?year=${year}&event=${event}`)
    .then(resp => {
      data = resp.data;
      res.render("eventDetails", { data });
    })

    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
