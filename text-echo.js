"use strict";
var mirror = document.querySelector('#mirror');
var action = document.querySelector('#action');
var input = document.querySelector('input');
function handleKeydownEvent(e) {
    if (e.key == 'Backspace') {
        action.textContent = 'Deleted something';
    }
    else if (e.key == 'Delete') {
        action.textContent = 'Deleted something';
    }
    else if (e.key == 'Enter') {
        action.textContent = 'Going new line';
    }
    else {
        action.textContent = ('Typed: ' + e.key);
    }
}
function handleInputEvent() {
    mirror.textContent = (input.value || 'N/A');
}
input.addEventListener('keydown', handleKeydownEvent);
input.addEventListener('input', handleInputEvent);
