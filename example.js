const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require('fs').readFileSync(filePath).toString().split('\n');
let count = Number(input[0]);
let answerStr = '';