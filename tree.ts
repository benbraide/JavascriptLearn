let message = document.querySelector('#message')!;
let container = document.querySelector('#container')!;

let count = document.querySelector('#count')!;

function handleCountClickEvent(){
    message.textContent = ('There are ' + container.children.length + ' element(s) inside container');
}

count.addEventListener('click', handleCountClickEvent);

let append = document.querySelector('#append')!;

function handleAppendClickEvent(){
    let newElement = document.createElement('p');
    newElement.textContent = 'Appended child';
    container.appendChild(newElement);

    message.textContent = 'Appended one element to container';
}

append.addEventListener('click', handleAppendClickEvent);

let prepend = document.querySelector('#prepend')!;

function handlePrependClickEvent(){
    let newElement = document.createElement('p');
    newElement.textContent = 'Prepended child';
    container.insertBefore(newElement, container.firstElementChild);

    message.textContent = 'Prepended one element to container';
}

prepend.addEventListener('click', handlePrependClickEvent);

let shift = document.querySelector('#shift')!;

function handleShiftClickEvent(){
    // container.removeChild(container.firstElementChild!);
    container.firstElementChild!.remove();
    message.textContent = 'Removed first child from container';
}

shift.addEventListener('click', handleShiftClickEvent);

let pop = document.querySelector('#pop')!;

function handlePopClickEvent(){
    container.lastElementChild!.remove();
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
