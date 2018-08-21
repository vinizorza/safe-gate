var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  models.proprietario.findAll()
    .then(function(proprietario) {
      if (!proprietario) {
        res.status(404).end();
        return;
      }
      res.json(proprietario);
    });
});

module.exports = router;
