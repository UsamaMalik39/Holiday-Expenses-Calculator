const express = require('express');
const router = express.Router();
const calculator = require('../controllers/calculator')

router.post("/",
calculator.calculateExpenses);

module.exports = router;
