/*
    Callbacks:
        A callback is a function or method that is given as an argument to another function
        to be called at some point by that function.
*/

function addTwoNumbers(first: number, second: number){
    return (first + second);
}

window.alert(addTwoNumbers(9, 81));// 90

function addTwoNumbersWithCallback(first: number, second: number, handler: (result: number) => void){
    let sum = (first + second);
    handler(sum);
}

function handleResult(result: number){
    window.alert(result);
}

addTwoNumbersWithCallback(9, 81, handleResult);
