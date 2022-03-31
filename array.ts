/*
    Arrays:
        An array sequence of data or items.
        Items can be added and removed from arrays.
        Items can be searched for in arrays.
        A sub-sequence of the array can be obtained.
        We can get items at specified indexes.
        Each character in the array can be iterated over.
        N/B: Arrays are mutable i.e. you can modify them after creation
*/

let myList = [2, 4, 5, 7, -4, 0, 54];
// window.alert(myList);// [2, 4, 5, 7, -4, 0, 54]

myList.push(36);// Add the item '36' to the end of the array
// window.alert(myList);// [2, 4, 5, 7, -4, 0, 54, 36]

myList.unshift(99);// Add the item '99' to the beginning of the array
// window.alert(myList);// [99, 2, 4, 5, 7, -4, 0, 54, 36]

myList.pop();// Removes the last item in the array
// window.alert(myList);// [99, 2, 4, 5, 7, -4, 0, 54]

myList.shift();// Removes the first item in the array
// window.alert(myList);// [2, 4, 5, 7, -4, 0, 54]

myList.splice(2, 3);// Starting at index '2' delete 3 items
// window.alert(myList);// [2, 4, 0, 54]

myList.splice(2, 0, 81, 27, 100);//Go to index '2', delete nothing and add '81', '27', and '100'
// window.alert(myList);// [2, 4, 81, 27, 100, 0, 54]

myList.splice(2, 4, -72, -65);// Go to index '2', delete 4 items and add '-72' and '-65'
// window.alert(myList);// [2, 4, -72, -65, 54]

// myList.splice(2);// Starting index '2' delete everything to the end of the array

// window.alert(myList.indexOf(4));// 1
// window.alert(myList.indexOf(53));// -1

// window.alert(myList.slice(1, 4));// [4, -72, -65]
// window.alert(myList.slice(1, 5));// [4, -72, -65, 54]
// window.alert(myList.slice(1));// [4, -72, -65, 54]

function printArrayItem(item: number){
    window.alert(item);
}

myList.forEach(printArrayItem);
