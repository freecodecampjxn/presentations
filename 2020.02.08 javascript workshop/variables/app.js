// javascript is a language similar to how we use English

// syntax is important

// The dog pdido down the sohop.

// language in our home is differenct from work, church, or wherever

// open the console and begin to do math in the constext of the web browser

// name a var 
var myName = 'Eliot';

// change the document.title = to a value

// document.

// change the document.body.style.backgroundColor to a value
// document.body.style.backgroundColor = 'lightblue';
// comments

// this is a comment
// another comment




/* shift + alt + a */

/* class
    -build a comment
    - build a var
*/ 

// build a var





// variable.. let is not block-scoped

var myName = 'Eliot';

console.log(myName);
myName = '';

console.log(myName);


// console.log(variableName);

// let example... let is block-scoped

let freeCodeCamp = 'freeCodeCamp';

freeCodeCamp= 'happy';

// const example... const is block-scoped

const library = 'Bolden Moore';
// library = 'Eudora Welty'

// change, or overwrite, the value

// value reassignment

// declare a variable called cow
var cow

// reassignment of cow
cow= 'moo'
// error will tell you it's not defined

// camel case example

// capitalization matters, plus an example of multiplication (*) using variables

/**
 * naming conventions for variables:
 * - don't use reserved keywords, such as break, boolean, return
 * - no numbers can start a variable
 * - variables are case sensitive
 * - underscores can be used, but they are typically not used at the beginning because other programming languages indicate private variables
 *  */ 

 var bigGiantPurpleElephant = 'Dumbo';
 bigGiantPurpleElephant;


//  var 5monkeys = ''

//  var _saveSecret = 578474874;


// example of payPerYear, payPerMonth, payPerWeek example


// data types 

// strings 

// var something = 'you can't do this' //is broken
var something = 'this "works"'//is good
// insert the /' before the
// number in the string

// integers
let myNumber = 5;
console.log(typeof myNumber);

let gibberish = 'aihdhpidh'

// log addition


// math operations

console.log(myNumber - gibberish); // 5 and all the gibberish or ignore
console.log(typeof myNumber - gibberish); //string


/*  plus: + // also the concatenation symbol
    minus: -
    times: *
    divide: /
    modulus: %
    single equal sign(assignment operator): =
*/







// boolean
let thing = true;
thing = Boolean('false');
console.log(thing); // true
console.log(thing); // boolean


// concatenation in quotes
let newGibberish = 'diuhihd';

console.log("I ran into " + gibberish + " and " + newGibberish + "at freeCodeCamp!" );


// concatenation in template literals
newGibberish = "Bolden Moore";
gibberish = "with friends"
let moreGibberish = `I am here at ${newGibberish} ${gibberish}!!!`
console.log(moreGibberish);


//what do you think will output string + number


//the number is coerced


// the integer coerces the string in multiplication

// increment "++"
// decrement "--"

let newNumber = 47;
console.log(newNumber);
newNumber++;
console.log(newNumber);
newNumber--;
console.log(newNumber);


// play the game what outputs in the log


// variableName += int
// vaiableName -= int

let camperNumber = 12;
camperNumber%=5;
console.log(camperNumber); //2

// equivalent of ++
// shorthand for int = int + int;



// shorthand for int = int * int;

// shorthand int = int / 5;




/*  Use JavaScript variables and math operations 
    to calculate paid time off at a fixed rate of 5 hours per paycheck paid every two weeks.
    How many hours will you have accrued at the end of a year?
    Create your answer using stored variables and share your code. */




// psuedo code can help you problem solve step by step in English statements
/**
 * START
 *  RECEIVE input = 5
 *  SET thing = input
 *  SET thingTimesFive = thing x 5
 *  DISPLAY "Here is the input times 5: thingsTimesFive"
 * END
 * 
 * pseudo code helps you avoid making spaghetti code
 * 
 * look up articles on pseudo code keywords
 */

// SCOPE

// global


//  var is global
// let is block scoped

 { // these brackets create an objects and local scope inside of it
    // local scope
    // let and const are block scoped

    // reassignment attempt of const will error the const
 }


//  what will log for let const in the local scope?

// this will error if uncommented

//  naming something in a particular scope can stop you from poluting the global scope;


// example where const cannot do this thing that var and let do




/**
 * start with what you know
 * don't get stumped at what you can't do
 */


