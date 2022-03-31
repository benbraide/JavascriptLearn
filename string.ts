/*
    Strings:
        A string is a sequence of characters, with the first character at index 0.
        Strings can be added to other strings to form longer strings.
        Characters and words can be searched for in strings.
        A sub-sequence of the string can be obtained.
        We can get characters at specified indexes.
        Each character in the string can be iterated over.
        N/B: Strings are immutable i.e. you can't modify them after creation
*/

let myString = 'Something';// A sequence of 9 characters

let longerString = (myString + ' new');// 'Something' + ' new' => 'Something new'

let indexOfM = myString.indexOf('m');// 2
let indexOfE = longerString.indexOf('e');// 3

let indexOfThing = myString.indexOf('thing');// 4
let indexOfThings = myString.indexOf('things');// -1

let indexOfZ = longerString.indexOf('z');// -1
let indexOfThing2 = longerString.indexOf('Thing');// -1

let thinPart = myString.substring(4, 8);// thin
let thingPart = myString.substring(4, 9);// thing
let thingPart2 = myString.substring(4);// thing

let charAt0 = myString[0];// S
let charAt6 = myString[6];// i

let charAt3 = myString.charAt(3);// e

for (let index = 0; index < myString.length; index = (index + 1)){
    window.alert(myString[index]);
}

let words = longerString.split(' ');// [Something, new]
