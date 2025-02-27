'use strict';

//Step5 (optional): Rewrite code into functional style for better readability:
// Use methods like findIndex, reduce, filter and others

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (input) =>
  MONTHS.findIndex((month) => input.toLowerCase().startsWith(month)) + 1 || -1;

module.exports = getMonthNumber;
