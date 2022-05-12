// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called NAME(only capitalizing for clarity) and assigned it a value of Dane.
// We set a conditional if/else statement to check if NAME's value is equal to Mary.
// The script determined the value is not equal to Mary so it ran the "else" code.
// - How do you do? - was output to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared a variable called SECRET.
// We declared another variable called CODE and assigned it a value of 123.
// We made a conditional to check if CODE's value is equal to 123. It is so the code runs and 
// assigns our variable SECRET a value of 'super' and takes our other variable CODE and multiplies it by 2 giving it a new value of 246.
// A second conditional was made to see if CODE has a value of more than 250. It was determined that 
// CODE is not over 250 so the subsequent code is not run. 
// Our last line of code has the word - super - logged to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declared a boolean variable called isStudent with a value of true
// A variable called age is declared with a value of 34
// A variable called zip is declared with a value of 55407
// We created a conditional with 4 possible outputs.
// We work our way down the if/else statement until we come to block(s) of code 
// that can be executed if all the specified conditions are true
// - Welcome to Prime! - is logged to the console. The else block of code is ignored.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
          FIX - the values of the two variables are reversed. It should read: 
          let colorOne = 'blue';
          let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

          FIX - the conditional statement is supposed to change the values of colorOne AND colorTwo to 'purple' if our other variable(mix) is true, however, as written it only affects colorOne. We need to add: 
          colorTwo = 'purple'; 
          before closing the if statement.

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

          FIX - we have the incorrect operator to check for an AND condition. We should substitute || with &&.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

          FIX - We are supposed to check if age is greater than or equal to minAge. What we have is checking if minAge is less than or equal to age which is essentially the same thing, but the outputs would need to be reversed to make sense. However, to write the code as instructed we would change the first line of the if/else statement to :

          if(age >= minAge) {


if(minAge <= age) {

          FIX - We need to change these console.log instructions around to get the desired outcome of allowing entry if age is greater than minAge.
          
          console.log('entry');
          } else {
            console.log(' no entry');
          }

  console.log('no entry');
} else {
  console.log('enter');
}
*/

