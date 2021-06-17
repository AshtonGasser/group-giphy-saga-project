const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();



router.post('/', (req, res) => {
    console.log('req.body', req.body, 'req.params', req.params);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=taco`)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(err => {
      console.log('error in giphy get', err);
      res.sendStatus(500);
    })
  })

  module.exports = router;