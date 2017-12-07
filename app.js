'use strict';

alert('following are some questions about me. if you think the question is true, answer y. if false, answer n');

var numRight = 0;

var quest1 = prompt('one time i caught a pick at a willie nelson concert');
var res1 = quest1.toLowerCase();
console.log('question 1 answer: ', res1);

if (res1 === 'y' || res1 === 'yes') {
  alert('nah, that\'d be tight tho');
  numRight++;
}

if (res1 === 'n' || res1 === 'no') {
  alert('correct');
}


var quest2 = prompt('wayne\'s world is my favorite movie')
var res2 = quest2.toLowerCase();
console.log('question 2 answer: ', res2);

if (res2 === 'y' || res2 === 'yes') {
  alert('oh yah!!!!');
  numRight++;
}

if (res2 === 'n' || res2 === 'no') {
  alert('false. its the best');
}


var quest3 = prompt('i like to sing in the shower');
var res3 = quest3.toLowerCase();
console.log('question 3 answer: ', res3);

if (res3 === 'y' || res3 === 'yes') {
  alert('hale yes i do!');
  numRight++;
}

if (res3 === 'n' || res3 === 'no') {
  alert('WRONG. and i sound like beyonce');
}

var quest4 = prompt('i once went bowling with bill murray');
var res4 = quest4.toLowerCase();
console.log('question 4 answer: ', res4);

if (res4 === 'y' || res4 === 'yes') {
  alert('owwwww you right, i did!!!!');
  numRight++;
}

if (res4 === 'n' || res4 === 'no') {
  alert('i totally did. he\'s not very good at bowling and neither am i.')
}


var quest5 = prompt('my favorite color is black');
var res5 = quest5.toLowerCase();
console.log('question 5 answer: ', res5);

if (res5 === 'y' || res5 === 'yes') {
  alert('i know that\'s the only color i wear, but my fav color is red');
  numRight++;
}

if (res5 === 'n' || res5 === 'no') {
  alert('true');
}

/* QUESTIONN 6 */


var number;
var counter = 1;
var guess = 0;
var flag;


while (number !== 32) {

  number = parseInt(prompt('How many countries do you think ive visited?'));

  if (number === 32) {
    alert('you guessed it!')
    numRight++;
  } else if (number < 32) {
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
    counter++;
  } else if (guess === 3) {
    flag = true;
    guess++;
    break;
  }
}

  console.log('question 6 answer: ', number);
  console.log('counter: ', counter);
  console.log('guesses for question 6: ', guess);

/* QUESTIONN 7*/



var flag7;
var numGuesses = 0;

while (answer !== 'austria' || answer !== 'hong kong' || answer !== 'australia' || answer !== 'thailand') {
  numGuesses++;


  if (numGuesses < 6) {

    if (flag7 === true) {
      break;
    }

    var countries = ['austria', 'hong kong', 'australia', 'thailand'];
    var answer = (prompt('what other countries do you think ive lived in besides the states?')).toLowerCase();

    for (var i = 0; i < countries.length; i++) {
      if (answer === countries[i]) {
        console.log('each iteration: ', countries[i]);
        flag7 = true;
        alert('you guessed one of \'em!!');
        numRight++;
        break;
      }
    }



  if (flag7 === true) {
    alert('nice guess! all the countries ive lived in besides the states are: austria, hong kong, australia, and thailand.');
  }

  if (!flag7) {
    alert('youre wrong');
    }
  }
}




  if (!flag7) {
    alert('the countries ive lived in outside the states are: austria, hong kong, australia, and thailand.');
  }
  var name = prompt('what is your name?');
  alert(name + ', you got ' + numRight + ' questions right out of 7');

  console.log('question 7 answer: ', answer);
  console.log('num guesses for question 7: ', numGuesses);
  console.log('number of questions answered correctly: ', numRight);
