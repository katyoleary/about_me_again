'use strict';

alert('following are some questions about me. if you think the question is true, answer y. if false, answer n');

var quest1 = prompt('one time i caught a pick at a willie nelson concert');
var res1 = quest1.toLowerCase();
console.log('question 1 answer: ', res1);

if (res1 === 'y' || res1 === 'yes') {
  alert('nah, that\'d be tight tho');
}

if (res1 === 'n' || res1 === 'no') {
  alert('correct');
}


var quest2 = prompt('wayne\'s world is my favorite movie')
var res2 = quest2.toLowerCase();
console.log('question 2 answer: ', res2);

if (res2 === 'y' || res2 === 'yes') {
  alert('oh yah!!!!');
}

if (res2 === 'n' || res2 === 'no') {
  alert('false. its the best');
}


var quest3 = prompt('i like to sing in the shower');
var res3 = quest3.toLowerCase();
console.log('question 3 answer: ', res3);

if (res3 === 'y' || res3 === 'yes') {
  alert('hale yes i do!');
}

if (res3 === 'n' || res3 === 'no') {
  alert('WRONG. and i sound like beyonce');
}

var quest4 = prompt('i once went bowling with bill murray');
var res4 = quest4.toLowerCase();
console.log('question 4 answer: ', res4);

if (res4 === 'y' || res4 === 'yes') {
  alert('owwwww you right, i did!!!!');
}

if (res4 === 'n' || res4 === 'no') {
  alert('i totally did. he\'s not very good at bowling and neither am i.')
}


var quest5 = prompt('my favorite color is black');
var res5 = quest5.toLowerCase();
console.log('question 5 answer: ', res5);

if (res5 === 'y' || res5 === 'yes') {
  alert('i know that\'s the only color i wear, but my fav color is red');
}

if (res5 === 'n' || res5 === 'no') {
  alert('true');
}


var number;
var counter = 1;
var guess = 0;
var flag;


while (number !== 32) {

  number = parseInt(prompt('How many countries do you think ive visited?'));

  if (number < 32) {
    alert('too low!');
    counter++;
  } else if (number > 32) {
    alert('too high!');
    counter++;
  } else if (number === NaN || number === null) {
    alert('please enter a number');
    counter++;
  }
  if (guess < 3) {
    guess++;
  } else if (guess === 3) {
    flag = true;
    guess++;
    break;
  }
}

console.log('counter: ', counter);
