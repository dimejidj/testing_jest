const { Str } = require("prelude-ls");
const { string } = require("yargs");

function sum(a, b) {
  return a + b;
}

function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function calculator(a, b) {
  return {
    add: a + b,
    subtract: a - b,
    divide: a / b,
    multiply: a * b,
  };
}

function ceasarCipher(str, shift) {
  let strSplit = str.split("");
  let strLower = str.toLowerCase();
  let finalArr = [];
  let arrNum = [];
  let upperLetter = [];
  let reg = /[A-Z]|[a-z]/;
  let upperRegTest = /[A-Z]/;
  let numTest = /[0-9]/;

  function checkCharCode(val) {
    if (val < 123) {
      return val;
    } else {
      let difference = 96 + (val - 122);
      return difference;
    }
  }

  for (let u = 0; u < strLower.length; u++) {
    if (reg.test(strLower[u])) {
      arrNum.push(strLower.charCodeAt(u) + shift);
    } else {
      arrNum.push(strLower[u]);
    }
  }

  for (let x = 0; x < arrNum.length; x++) {
    if (numTest.test(arrNum[x])) {
      finalArr.push(String.fromCharCode(checkCharCode(arrNum[x])));
    } else {
      finalArr.push(arrNum[x]);
    }
  }

  for (let k = 0; k < strSplit.length; k++) {
    if (upperRegTest.test(strSplit[k])) {
      upperLetter.push(k);
    }
  }

  for (let r = 0; r < upperLetter.length; r++) {
    finalArr[upperLetter[r]] = finalArr[upperLetter[r]].toUpperCase();
  }

  return finalArr.join("");
}

function analyseArray(arr) {
  let total = arr.reduce((final, arr) => final + arr, 0);
  let sort = arr.sort((a, b) => a - b);
  let min = sort[0];
  let max = sort[sort.length - 1];
  let average = total / arr.length;
  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
}

module.exports = {
  sum,
  capitalise,
  reverseString,
  calculator,
  ceasarCipher,
  analyseArray,
};
