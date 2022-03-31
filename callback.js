"use strict";
/*
    Callbacks:
        A callback is a function or method that is given as an argument to another function
        to be called at some point by that function.
*/
function addTwoNumbers(first, second) {
    return (first + second);
}
window.alert(addTwoNumbers(9, 81)); // 90
function addTwoNumbersWithCallback(first, second, handler) {
    var sum = (first + second);
    handler(sum);
}
function handleResult(result) {
    window.alert(result);
}
addTwoNumbersWithCallback(9, 81, handleResult);
