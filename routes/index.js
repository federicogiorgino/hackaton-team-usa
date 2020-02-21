const express = require("express");
const router = express.Router();
const axios = require("axios");

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

router.get("/:yearId", (req, res, next) => {
  const { yearId } = req.params;
  console.log("-->", yearId);
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year/${yearId}`)
    .then(resp => {
      data = resp.data;
      console.log(data);
      res.render("yearDetails", { data });
    })
    .catch(error => {
      console.log(error);
    });
});

/* GET /timeline/year/event */

router.get("/:yearId/person", (req, res) => {
  const { yearId } = req.params;
  console.log(yearId);
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year/${yearId}/person`)
    .then(resp => {
      data = resp.data;
      res.render("personList", { data });
    })

    .catch(error => {
      console.log(error);
    });
});

router.get("/:yearId/:personId/profile", (req, res) => {
  const { yearId, personId } = req.params;
  console.log(yearId);
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/person/${personId}`)
    .then(resp => {
      data = resp.data;
      res.render("people", { data });
    })

    .catch(error => {
      console.log(error);
    });
});

router.get("/:yearId/events", (req, res) => {
  const { yearId } = req.params;
  console.log(yearId);
  axios
    .get(`https://hack-usa-jasondata.herokuapp.com/year/${yearId}/event`)
    .then(resp => {
      data = resp.data;
      res.render("eventList", { data });
    })

    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
