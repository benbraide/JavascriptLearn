/*
    Control Structures
        In JavaScript, the flow of control (i.e. way in which code gets executed) is:
            Top to Bottom; Left to Right
        The control structures in JavaScript are:
            Selection Statement
            Switch Statement
            Loop Statement

        Selection Statements:
            These statements specify which block of code should be executed, and which should
            be skipped base on a predicate (i.e. condition)
            There are 3 types of selection statements:
                If Statement
                If-Then-Else Statement
                If-Then-Else-If Statement

            If Statement:
                This instructs the interpreter to execute a block of code if the predicate
                evaluates to true
                if (<predicate>){ <code> }
*/

// if (true){
//     window.alert('Hello world!');
// }

// if (false){
//     window.alert('Hello world!');
// }

// let num20: number;
// num20 = 900;

// if (num20 < 100){
//     window.alert('It is a small number');
// }

/*
            If-Then-Else Statement:
                This instructs the interpreter to execute a block of code if the predicate
                evaluates to true, otherwise another (the next) block of code
                if (<predicate>){ <code> } else { <code> }

*/

// if (true){
//     window.alert('Hello world!');
// }
// else{
//     window.alert('Not hello world!');
// }

// if (false){
//     window.alert('Hello world!');
// }
// else{
//     window.alert('Not hello world!');
// }

// let num20: number;
// num20 = 900;

// if (num20 < 100){
//     window.alert('It is a small number');
// }
// else{
//     window.alert('It is a big number');
// }

/*
    Exercise:
        Declare a numeric variable and assign a value to it
        Check if the number is odd
        Print 'Number is odd' if it is an odd number
        Print 'Number is even' if it is an not odd number
*/

/*
            If-Then-Else-If Statement:
                This instructs the interpreter to execute a block of code if the predicate
                evaluates to true, otherwise the the next predicate is tested; if it
                evealuates to true, the associated block of code is executed, and so on.
                If none of the predicates evaluate to true, the 'else' block is executed
                if (<predicate>){ <code> } else if (<predicate>){ <code> } else { <code> }

*/

// let num20: number;
// num20 = 900;

// if (num20 < 100){
//     window.alert('It is a small number');
// }
// else if (num20 == 100){
//     window.alert('It is a neutral number');
// }
// else{
//     window.alert('It is a big number');
// }

/*
    Assignment:
        Come up with a problem or task that involves arrays and selection statements
        Solve the problem
*/

/*
        Switch Statement:
            The switch statement is like a selection statment i.e. it specifies which block
            code to execute and which to skip.
            The major difference is that a switch statement has labels to test against
            the predicate
            switch (<predicate>){
                case <label>: <code block>
                break;
                .
                .
                case <label>: <code block>
                break;
                default: <code block>
                break;
            }
*/

// let num20: number;
// num20 = 500;

// switch (num20){
//     case 9: window.alert('Our number is 9');
//     break;
//     case 100: window.alert('Number is neutral');
//     break;
//     case 900: window.alert('Number is big');
//     break;
//     default: window.alert('Number is uncertain');
//     break;
// }

/*
        Loop Statement:
            This enables us to iterate (repeat) a code block multiple times dependent on
            a predicate
            The general struture of a loop statement is:
                Initialization
                Condition
                Update

            There are 3 types of loop statements, namely:
                While Statement
                For Statement
                Do-While Statement

            While Statement:
                This iterates a block of code while a predicate evaluates to true
                while (<predicate>){ <code> }
*/

// let num20: number;
// num20 = 0;// Initialization

// while (num20 < 10){//Condition
//     window.alert(num20);
//     num20 = (num20 + 1);//Update
// }

// let numbers20: Array<number>;
// numbers20 = [18, 25, 10, 5, 8, 9, 20];

// let index: number;
// index = 0;// Initialization

// while (index < numbers20.length){//Condition
//     window.alert(numbers20[index]);
//     index = (index + 1);//Update
// }

/*
    Exercise:
        Declare a numeric array
        Assign 9 numbers to it
        Declare a 'sum' variable
        Initialize it to 0
        Using a loop, compute the sum of the items in the array
        HINT: For every iteration, add the item to the sum and assign to the sum
        After the loop, print out the sum
*/

// let array20: Array<number>;
// array20 = new Array<number>(1, 2, 3, 4, 5, 6, 7, 8, 9);

// let sum20: number;
// sum20 = 0;

// let index: number;
// index = 0;// Initialization

// while (index < array20.length){//Condition
//     sum20 = (sum20 + array20[index]);
//     index = (index + 1);//Update
// }

// window.alert(sum20);// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45

/*
    Assignment:
        Declare a numeric array
        Assign 11 numbers to it
        Declare a 'product' variable
        Using a loop, compute the product of the items in the array
        After the loop, print out the product
        If the product is less than 200, print 'Not too big'
        If the product is exactly 200, print 'Almost too big'
        If the product is greater than 200, print 'Definitely too big'
*/

/*
            For Statement:
                This is similar to the while-loop but it provides a convenient
                initialization and update.
                The for-loop works very well with arrays
                for (<initialization>; <predicate>; <update>){ <code> }
*/

// let numbers20: Array<number>;
// numbers20 = [18, 25, 10, 5, 8, 9, 20];

// for (let index = 0; index < numbers20.length; index = (index + 1)){//Condition
//     window.alert(numbers20[index]);
// }

/*
            Do-While Statement:
                This is also similar to the while-loop but its code block gets
                executed at least once
                do{ <code> } while (<predicate>);
*/

// let num20: number;
// num20 = 0;// Initialization

// do{//Condition
//     window.alert(num20);
//     num20 = (num20 + 1);//Update
// } while (num20 < 10);
