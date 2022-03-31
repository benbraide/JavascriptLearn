let mirror = document.querySelector('#mirror')!;
let action = document.querySelector('#action')!;
let input = document.querySelector('input')!;

function handleKeydownEvent(e: KeyboardEvent){
    if (e.key == 'Backspace'){
        action.textContent = 'Deleted something';
    }
    else if (e.key == 'Delete'){
        action.textContent = 'Deleted something';
    }
    else if (e.key == 'Enter'){
        action.textContent = 'Going new line';
    }
    else{
        action.textContent = ('Typed: ' + e.key);
    }
}

function handleInputEvent(){
    mirror.textContent = (input.value || 'N/A');
}

input.addEventListener('keydown', handleKeydownEvent);
input.addEventListener('input', handleInputEvent);
