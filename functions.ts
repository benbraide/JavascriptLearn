/*
    Functions:
        This also alters the flow of control.
        A function is a block of code that is saved and can be called when required.
        When called, the block of code gets executed.
        A function can be called multiple times.

        function <identifier>(){ <code> }

        let variable = () => { <code> };//Arrow function

        To return a value from a function, we use a 'return' statement
*/

// function twoTimesFour(){//Definition
//     return (2 * 4);
// }

// window.alert(twoTimesFour());//Call
// window.alert(twoTimesFour() + 18);

// let threeTimesFour = () => {
//     return (3 * 4);
// };

// window.alert(threeTimesFour());//Call

// let fourTimesFour = () => (4 * 4);

// window.alert(fourTimesFour());//Call

/*
        Parameters:
            All functions take a number of parameters.
            Parameters are a way that a function gets data from the outside world.
            Parameters are specified within the parenthesis in the function definition.
            Parameters are delimited by a comma ','.
            A function without any parameters has nothing within its parenthesis.
            When calling a function with one or more parameters, the value for each
            parameter must be specified -- these are called 'arguments'.
            Arguments are delimited by a comma ','.
            
            function <identifier>(<param1>, <param2>, ..., <paramN>){ <code> }

            let variable = (<param1>, <param2>, ..., <paramN>) => { <code> };//Arrow function
*/

// function multiplyTwoNumbers(num1: number, num2: number){//Definition
//     return (num1 * num2);
// }

// window.alert(multiplyTwoNumbers(7, 9));//Call
// window.alert(multiplyTwoNumbers(100, 99));//Call

/*
    Assignment:
        Define a function that will add 4 numbers together
        Call that function 3 times supplying the appropriate arguments
        Print the value of each call

        Do the above with an arrow function
*/

/*
    Exercise:
        Define a function that checks if a number is even
        Call the function 3 times with appropriate arguments
        HINT: The function can be named 'isEven'
*/

// function isEven(num: number){
//     let remainder: number;
//     remainder = (num % 2);
//     return (remainder == 0);
// }

// window.alert(isEven(9));
// window.alert(isEven(45));
// window.alert(isEven(100));

/*
    Function Groups:
        In JavaScript, functions are grouped into 2 groups - 'void' and 'value-returning'.
        Void functions don't return any value.
        Value-returning functions return values.
        All the functions we've looked at are value-returning functions.

        Void Functions:
            Void functions are used for performing tasks that don't require a return value.
            Example of tasks: Printing data
*/

// function printStudentInfo(student: object){
//     window.alert(student.name);
//     window.alert(student.age);
//     window.alert(student.isMale);
// }

// let student = {
//     name: 'John Doe',
//     age: 72,
//     isMale: true,
// };

// printStudentInfo(student);

/*
    Assignment:
        Define a function that has one parameter of type 'array of numbers'
        Compute the sum of items in the array inside the function
        Return the computed sum

        Call the function with appropriate argument
        Store the returned value in a variable named 'sum'
        HINT: Declare an array of numbers and initialize with values

        Define a function that will print the average of the items in the array
        Call the function with the appropriate argument
        HINT: The function should also take an array as a parameter
*/

/*
    Brain Booster:
        Define a function that when given a numeric array will return the number of
        items in the array that are even
*/

// function computeSum(nums: Array<number>){
//     let sum: number;
//     sum = 0;

//     for (let index = 0; index < nums.length; index = (index + 1)){
//         sum = (sum + nums[index]);
//     }

//     return sum;
// }

// function printAverage(nums: Array<number>){
//     let sum: number;
//     sum = computeSum(nums);

//     let average: number;
//     average = (sum / nums.length);

//     window.alert(average);
// }

// printAverage([2, 3, 5, 7, 11, 13, 17, 19, 23]);// 100 / 9 = 11.11111

// function isEven(num: number){
//     let remainder: number;
//     remainder = (num % 2);
//     return (remainder == 0);
// }

// function countEvenNumbers(nums: Array<number>){
//     let count: number;
//     count = 0;

//     for (let index = 0; index < nums.length; index = (index + 1)){
//         if (isEven(nums[index])){
//             count = (count + 1);
//         }
//     }

//     return count;
// }

// window.alert(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));// 4
// window.alert(countEvenNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23]));// 1

/*
    Brain Booster:
        Write a function that counts how many iterations it will take to get to 1.
        Given a number:
            If the number is odd, multiply the number by 3 and add 1
            If the number is even, divide the number by 2
*/

/*
    Given the number 3:
        3 is odd => (3 x 3) + 1 => 10
        10 is even => 10 / 2 = 5
        5 is odd => (3 x 5) + 1 => 16
        16 is even => 16 / 2 => 8
        8 is even => 8 / 2 => 4
        4 is even => 4 / 2 => 2
        2 is even => 2 / 2 => 1
*/

// function isOdd(num: number){
//     let remainder: number;
//     remainder = (num % 2);
//     return (remainder != 0);
// }

// function countIterations(num: number){
//     let count: number;
//     count = 0;
    
//     while (num != 1){
//         if (isOdd(num)){
//             num = ((num * 3) + 1);
//         }
//         else{// Even
//             num = (num / 2);
//         }

//         count = (count + 1);
//     }

//     return count;
// }

// window.alert(countIterations(3));// 7

/*
    Somewhat Brain Booster:
        Define a function 'getMinValue' that returns the min (lowest) value
        in an array.
        Call the function with suitable argument(s)
*/

// function getMinValue(nums: Array<number>){
//     let min: number;
//     min = nums[0];// Assuming the first item in the array is the min value
    
//     for(let index = 0; index < nums.length; index = (index + 1)){
//         if (nums[index] < min){
//             min = nums[index];
//         }
//     }

//     return min;
// }

// window.alert(getMinValue([10, 72, 4, 5, 80]));// 4

/*
    Somewhat Brain Booster:
        Define a function 'multiplyCollection' that multiplies each item in an array
        with a specified value and replaces the item with the multiplied value
        Call the function with the appropriate argument(s)
*/

// function multiply2Numbers(first: number, second: number){
//     return (first * second);
// }

// function multiplyCollection(nums: Array<number>, value: number){
//     for (let index = 0; index < nums.length; index = (index + 1)){
//         nums[index] = multiply2Numbers(nums[index], value);
//     }

//     return nums;
// }

// window.alert(multiplyCollection([1, 3, 5, 7, 9], 2));
