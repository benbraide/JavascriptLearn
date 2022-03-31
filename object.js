"use strict";
/*
    The Object Type
        An object is an enitity with fields and attributes contained as a unit
        In JavaScript, objects are created us a pair of '{' and '}'
        And each field and attribute are represented by a key-value pair, delimited by a ':'
        Finally, fields are separated by a ','
        E.g. {
                name: 'John Doe',
                age: 72,
                hasGraduated: true
             }
        N/B: They keys can be any valid identifier or a string literal
*/
// let studentName: string;
// let studentAge: number;
// let studentHasGraduated: boolean;
// studentName = 'John Doe';
// studentAge = 72;
// studentHasGraduated = true;
// window.alert(studentName);
// window.alert(studentAge);
// window.alert(studentHasGraduated);
// let student: object;
// student = {
//     name: 'John Doe',
//     age: 72,
//     hasGraduated: true
// };
// let person: object;
// person = {
//     'first name': 'William',
//     'last name': 'Johnson'
//     age: 72,
//     hasGraduated: true
// };
/*
    In JavaScript objects, we use a '.' to access a field
    E.g. student.age
*/
// window.alert(student.name);
// window.alert(student.age);
// window.alert(student.hasGraduated);
/*
    Declare a variable named 'house' of type 'object'
    Assign an object with applicable fields to the variable
*/
/*
    We can also use a pair of '[' and ']' to access a field
    E.g. student['age']; person['first name'];
*/
// window.alert(student['name']);
// window.alert(student['age']);
// window.alert(student['hasGraduated']);
/*
    Arrays
        An array is sequence of data e.g. an array of strings, of numbers, booleans, etc
        In Javascript, an array is created using a pair '[' and ']'
        The items in the array are separated by a ','
        In TypeScript, arrays can also be created by the expression:
            new Array<type>();
*/
var numbers;
var booleans;
var names;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
names = ['Jane Doe', 'Janice Omah'];
/*
    We can access each item using an index
    The first item in an array is at an index of 0
    The last item is at an index of (length of array) - 1
    We use a pair of '[' and ']' and the index to access desired item
    E.g. names[2] --> We are accessing the third item
*/
// window.alert(names[0]);// 'Jane Doe'
/*
    We can get the length (number of items) of the array using the 'length' field
*/
// window.alert(names.length);// 2
// window.alert(names['length']);// 2
/*
    Think of an array as shortcut to creating an object with extra fields
    ['John Doeman', 'Jane Pee'] => {
                                        '0': 'John Doeman',
                                        '1': 'Jane Pee',
                                        length: 2
                                    }
*/
window.alert(names['0']); // 'Jane Doe'
/*
    Assignment:
        Declare and represent two student variables with the following fields:
            name, class and grade
        Sum their grades are store in variable
        Check if their average grade is above (greater than) 50

        Declare an array of numbers with 7 items
        Assign appropriate value to the variable
        Sum the numbers and store in another variable
*/
