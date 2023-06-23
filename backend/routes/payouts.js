const express = require('express');
const router = express.Router();
const calculator = require('../controllers/calculator')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/",
calculator.calculateExpenses);

module.exports = router;
