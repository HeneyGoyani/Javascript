//1. WAP TO DISPLAY THE MULTIPLICATION TABLE OF THE GIVEN NUMBER USING WHILE LOOP

/*
let n = prompt("ENTER ANY MULTIPLICATIVE NUMBER :");
let i = 1;

while(i <= 10)
{
    console.log(n + "x" + i + "="+(n*i));
    i++;
}

*/
//OUTPUT : if n = 5
/*
 5x1=5
 5x2=10
 5x3=15
 5x4=20
 5x5=25
 5x6=30
 5x7=35
 5x8=40
 5x9=45
 5x10=50
 */
 

//=============================================================================


 //2. WAP TO CALCULATE THE FACTORIAL OF GIVEN NUMBER USING WHILE LOOP

 /*
 let numb = prompt("ENTER ANY FACTORIAL NUMBER :");
 let fact = 1;

 while(numb >= 1)
 {
    fact = fact * numb;
    numb--;
 }
 console.log("Factorial is :",fact);

 */
 //OUTPUT : if num = 4
 // Factorial is : 24 

 // =============================================================================


 // 3. WAP TO FIND ARMSTRONG NUMBER LIST USING DO WHILE LOOP

/*

let numb = prompt("ENTER ANY VALUE : ");
let original = numb;
let reverse = 0;

do 
{
    let digit = numb % 10;
    reverse = reverse + digit ** 3;
    numb = Math.floor(n / 10);
} 
while(numb > 0);

if(original == reverse) 
{
    console.log("NUMBER IS AN ARMSTRONG👍");
} 
else 
{
    console.log("NUMBER IS NOT AN ARMSTRONG👎");
}
*/

// OUTPUT : if numb = 233
// NUMBER IS NOT AN ARMSTRONG



//===================================================================


//4.WAP TO FIND THE NUMBER IS PALINDROME OR NOT USING WHILE LOOP

let num = +prompt("Enter The Number (palindrome) :");


let original = num;
let reverse = 0;

while(num > 0)
{
    let rem = num % 10;
    reverse = (reverse * 10) + rem;
    num = Math.floor( num/10);
}
if (original == reverse )
{
    console.log("Number is Palindrom");
}
else 
{
    console.log("Number is not Palindrom");
}

//OUTPUT : 121
//NUMBER IS PALINDROME 



//===============================================================================



// 5.WAP TO CALCULATE THE FIBONACCI SERIES OF GIVEN NUMBER USING WHILE LOOP

/*
let a = 1, b = 1,c;
console.log(a);
console.log(b);

for(let i = 1; i <= 10; i++)
{
    c = a + b;
    console.log(c);
    a = b;
    b = c;
} */

// OUTPUT : 1 1 2 3 5 8 13 21 34 55 89 144 



//============================================================



// 6. WAP TO ADD ALL THE INTEGERS BETWEEN 0 AND 30 AND DISPLAY THE TOTAL USING DO WHILE LOOP

/*
let sum = 0 ,i;
for (i = 1; i <= 30; i++)
{
    sum = sum + i;
}
console.log("Your 0 to 30 sum is : ",sum);
*/

// OUTPUT: 465



//==============================================================



// 7. WAP TO PRINT INTEGER FROM 1 TO 100 , FOR MULTIPLES OF 3 FIZZ SHOULD BE PRINTES AND FRO 5 BUZZ AND ELSE FOR MULTIPLACATIVE OF 3 AND 5 FIZZBUZZ SHOULD BE PRINTED 

/*
let number = 1;
do{
    if( number % 3 === 0 && number % 5 === 0)
    {
        console.log("FizzBuzz");
    } else if( number % 3 == 0)
    {
        console.log("Fizz");
    }
    else if(number % 5 == 0)
    {
        console.log("Buzz");
    }
    else 
    {
        console.log(number);
    }
    number++;
}while(number <= 100);

*/
// OUTPUT :
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz
// Fizz
// 52
// 53
// Fizz
// Buzz
// 56
// Fizz
// 58
// 59
// FizzBuzz
// 61
// 62
// Fizz
// 64
// Buzz
// Fizz
// 67
// 68
// Fizz
// Buzz
// 71
// Fizz
// 73
// 74
// FizzBuzz
// 76
// 77
// Fizz
// 79
// Buzz
// Fizz
// 82
// 83
// Fizz
// Buzz
// 86
// Fizz
// 88
// 89
// FizzBuzz
// 91
// 92
// Fizz
// 94
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz


//=====================================================================================================

// 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop.
// There will be no hyphen(-) at starting and ending position.

 /*
 let result = "";

for (let i = 1; i <= 10; i++) {
    result += i;
    if (i < 10) {
        result += "-"; 
    }
}

 console.log(result);


 OUTPUT :1-2-3-4-5-6-7-8-9-10
 */



//=========================================================



//9. Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using a for loop.


/*
let sum = 0;
let result = "";

for (let i = 1; i <= 10; i++) {
    sum += i * i;
    result += (i * i) + (i < 10 ? "+" : "");
}
console.log(result + " = " + sum);

*/
//OUTPUT : 1+4+9+16+25+36+49+64+81+100 = 385


//======================================================================================


//10. Write a JAVASCRIPT Program that displays below pattern using nested for loop:

let i,j;

for ( i = 5; i >= 1; i--) {
    let result = "";
    for ( j = 5; j >= i; j--) {
        result += j + " ";
    }
    console.log(result);
}

/*OUTPUT :-
5
5 4 
5 4 3 
5 4 3 2 
5 4 3 2 1 */


//==========================================================================================



// 11. Write a JAVASCRIPT Program that displays below pattern using nested for loop:

let number = 1;

for (let i = 1; i <= 5; i++) { 
    let result = "";
    for (let j = 1; j <= i; j++) {
        result += number + " ";
        number++; 
    }
    console.log(result); 
}

// OUTPUT : 
// 1
// 2 3 
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

