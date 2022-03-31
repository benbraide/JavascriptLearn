/*
    DOM (Document Object Model):
        This is hierarchical representation of an HTML document in JavaScript.
        In JavaScript, we select elements from the document tree to manipulate.
*/

// let allH1 = document.getElementsByTagName('h1');
// let firstH1 = allH1[0];

// window.alert(firstH1.textContent);

// firstH1.textContent = 'JavaScript is indeed awesome!';

// let allP = document.getElementsByTagName('p');
// window.alert(allP.length);

// let targetP = document.getElementById('targetP')!;

// window.alert(targetP.textContent);

// let allGroupA = document.getElementsByClassName('group-a');
// window.alert(allGroupA.length);

// let el = document.querySelector('h1')!;// Selects the first 'h1' element
// let els = document.querySelectorAll('h1');// Selects all 'h1' elements

// let byId = document.querySelector('#targetP');// Select first item with ID

// let byClass = document.querySelector('.group-a');// Select first item with class
// let byClass2 = document.querySelectorAll('.group-a');// Select all items with class

// let button = document.querySelector('button')!;
// button.textContent = 'Still waiting!';

// for (let index = 0; index < allGroupA.length; index = (index + 1)){
//     allGroupA[index].textContent = 'First Group';
// }

/*
    Assignment:
        Select the 'button' element from the HTML and change its text to 'Still waiting!'.
        Change the texts of all the 'span' elements in 'Group A' to 'First Group'.
*/

/*
    Events:
        In JavaScript different user actions generate events that can be handled.
        Examples of events are clicks, double clicks, key down|up, etc
*/

// let output = document.querySelector('#output')!;
// let input = document.querySelector('input')!;

// let button = document.querySelector('button')!;

// function handleClick(){
//     output.textContent = ('Value of input: ' + input.value);
// }

// button.addEventListener('click', handleClick);

// let resetButton = document.querySelector('button + button')!;

// function handleResetClick(){
//     input.value = '';
//     output.textContent = 'Input reset';
// }

// resetButton.addEventListener('click', handleResetClick);

// let removeListenerButton = document.querySelector('input[type="button"]')!;

// function handleRemoveListenerClick(){
//     button.removeEventListener('click', handleClick);
//     output.textContent = 'Removed listener';
// }

// removeListenerButton.addEventListener('click', handleRemoveListenerClick);

/*
    Exercise:
        Select the second button and assign to a variable
        Define a function to handle the 'click' event from the button
        Listen for the 'click' event on the button
*/

/*
    Assignment:
        Create an HTML with the following:
            An 'output' element
            A text input element
            A button with the text 'Not listening' and an id of 'main'
            Another button with the text 'Start listening'
            A third button with the text 'Stop listening'

        Listen for the 'click' event on the 'Start listening' button so that when clicked,
        you listen for the 'click' event on the '#main' button and change the text
        on the '#main' button to 'Now listening'

        Listen for the 'click' event on the 'Stop listening' button so that when clicked,
        you stop listening for the 'click' event on the '#main' button and change the text
        on the '#main' button to 'Not listening'

        When the '#main' button is clicked, and we are listening for the event,
        make the 'output' text content to read 'Solved the puzzle'
*/
