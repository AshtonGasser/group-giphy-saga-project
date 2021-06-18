const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();


// return all favorite images

router.get('/', (req, res) => {

  const queryText = `SELECT id, path FROM favorites`;

  pool.query(queryText)
    .then((result) => { 
      res.send(result.rows);
      res.sendStatus(200);
    }) // end .then
    .catch((err) => {
      console.error('Error completing SELECT favorites query', err);
      res.sendStatus(500);
    }) // end .catch, end pool.query
  
}); // end router.get

// add a new favorite
router.post('/', (req, res) => {
  const imageUrl = req.body;
  console.log('req.body.url in router post', req.body.url);

  const queryText = `INSERT INTO "favorites" ("path")
                      VALUES ($1);`;
  pool.query(queryText, [req.body])
  .then (response => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('error in router.post', err);
    res.sendStatus(500);
  })
    
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
