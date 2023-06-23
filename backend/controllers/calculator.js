const controller = {};
const calculatorService = require("../services/calculator.service");

controller.calculateExpenses = async function (req, res, next) {
  return calculatorService.calculateExpenses(req, res);
};

module.exports = controller;
