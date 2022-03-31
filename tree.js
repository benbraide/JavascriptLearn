"use strict";
var message = document.querySelector('#message');
var container = document.querySelector('#container');
var count = document.querySelector('#count');
function handleCountClickEvent() {
    message.textContent = ('There are ' + container.children.length + ' element(s) inside container');
}
count.addEventListener('click', handleCountClickEvent);
var append = document.querySelector('#append');
function handleAppendClickEvent() {
    var newElement = document.createElement('p');
    newElement.textContent = 'Appended child';
    container.appendChild(newElement);
    message.textContent = 'Appended one element to container';
}
append.addEventListener('click', handleAppendClickEvent);
var prepend = document.querySelector('#prepend');
function handlePrependClickEvent() {
    var newElement = document.createElement('p');
    newElement.textContent = 'Prepended child';
    container.insertBefore(newElement, container.firstElementChild);
    message.textContent = 'Prepended one element to container';
}
prepend.addEventListener('click', handlePrependClickEvent);
var shift = document.querySelector('#shift');
function handleShiftClickEvent() {
    // container.removeChild(container.firstElementChild!);
    container.firstElementChild.remove();
    message.textContent = 'Removed first child from container';
}
shift.addEventListener('click', handleShiftClickEvent);
var pop = document.querySelector('#pop');
function handlePopClickEvent() {
    container.lastElementChild.remove();
    message.textContent = 'Removed last child from container';
}
pop.addEventListener('click', handlePopClickEvent);
/*
    Assigment:
        Add a 'Delete All' button that when clicked deletes all the children
        from the '#container' and output 'Deleted all children from container'
        Fix the following errors:
            When '#container' is empty and we try to delete a child, an error occurs
            i.e. Before deleting a child check to make sure '#container' is not empty
            If '#container' is empty don't delete
*/
