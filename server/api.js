const express = require('express');

const databaseFunc = require('../database/index');
const router = express.Router();

router.get('/retrieve', (req, res) => {
  databaseFunc.fetchOneLiners((err, result) => {
    if (err) {
      console.error('GET error', err);
      res.sendStatus(500);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

router.post('/save', (req, res) => {
  databaseFunc.saveToDb(req.body, (err, response) => {
    if (err) {
      console.error('POST error', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

router.delete('/remove', (req, res) => {
  databaseFunc.deleteOneLiner(req.body, (err, response) => {
    if (err) {
      console.error('DELETE error', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

module.exports.router = router;
