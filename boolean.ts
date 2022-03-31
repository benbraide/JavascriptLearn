/*
    Boolean Operators:
        These are operators that produce true/false results.
        There are 2 classes -- Relational and Logical

    Relation Operators:
        These are operators that report on the relationships between different data.
        The operators are:
        Equality (==)         ==> This tests if the 2 operands are equal
        Inequality (!=)       ==> This tests if the 2 operands are not equal
        Less than (<)         ==> This tests if the left operand is less than the right
        Greater than (>)      ==> This tests if the left operand is greater than the right
        Less or equal (<=)    ==> This tests if the left operand is not greater than the right
        Greater or equal (>=) ==> This tests if the left operand is not less than the right
*/

// window.alert(9 == 100);// false
// window.alert(9 == 9);// true

// window.alert(9 != 100);// true
// window.alert(9 != 9);// false

// window.alert(9 < 100);// true
// window.alert(100 < 9);// false
// window.alert(9 < 9);// false

// window.alert(9 > 100);// false
// window.alert(100 > 9);// true
// window.alert(9 > 9);// false

// window.alert(9 <= 100);// Is 9 NOT greater than 100? 9 is NOT greater than 100 =>  true
// window.alert(100 <= 9);// Is 100 NOT greater than 9? 100 is greater than 9 => false
// window.alert(9 <= 9);// Is 9 NOT greater than 9? 9 is NOT greater than 9 => true

// window.alert(9 >= 100);// Is 9 NOT less than 100? 9 is less than 100 => false
// window.alert(100 >= 9);// Is 100 NOT less than 9? 100 is NOT less than 9 => true
// window.alert(9 >= 9);// Is 9 NOT less than 9? 9 is NOT less than 9 => true

// let num10: number;
// let num11: number;

// num10 = 18;
// num11 = num10;

// window.alert(num10 == num11);// true

/*
    Logical Operators:
        These are operators that apply logic to one or more boolean values
        The operators are:
        Not (!)  ==> This checks if the operand is false e.g. !op
        OR (||)  ==> This checks if one of the operands is true e.g. lop || rop
        AND (&&) ==> This checks if both operands are true e.g. lop && rop

    The Truth Table:
        A  |   B   | A OR B  |  A AND B |  NOT A  |
    -----------------------------------------------
        T  |   T   |    T    |     T    |    F
        T  |   F   |    T    |     F    |    F
        F  |   T   |    T    |     F    |    T
        F  |   F   |    F    |     F    |    T
*/

// let num12: number;
// num12 = 40;

// /*
//     Mathematically, a number is even if the remainder is (equality) zero when divided by 2
// */

// let remainder: number;
// remainder = (num12 % 2);

// let isEven: boolean;
// isEven = (remainder == 0);

// window.alert(isEven);

/*
    Exercise:
        Declare 2 numeric variables
        Assign the values 9 and 18 to the variables respectively
        Declare a variable named 'bothAreEven'
        Assign the result from the check if both of the variables are even
*/

/*
    Assignment:
        You are given 2 numbers
        Check if they are both odd
        Check if the first number is not even
        Sum both numbers and store in a variable
        Check if the sum is even
*/
