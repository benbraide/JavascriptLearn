"use strict";
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
var myString = 'Something'; // A sequence of 9 characters
var longerString = (myString + ' new'); // 'Something' + ' new' => 'Something new'
var indexOfM = myString.indexOf('m'); // 2
var indexOfE = longerString.indexOf('e'); // 3
var indexOfThing = myString.indexOf('thing'); // 4
var indexOfThings = myString.indexOf('things'); // -1
var indexOfZ = longerString.indexOf('z'); // -1
var indexOfThing2 = longerString.indexOf('Thing'); // -1
var thinPart = myString.substring(4, 8); // thin
var thingPart = myString.substring(4, 9); // thing
var thingPart2 = myString.substring(4); // thing
var charAt0 = myString[0]; // S
var charAt6 = myString[6]; // i
var charAt3 = myString.charAt(3); // e
for (var index = 0; index < myString.length; index = (index + 1)) {
    window.alert(myString[index]);
}
var words = longerString.split(' '); // [Something, new]
