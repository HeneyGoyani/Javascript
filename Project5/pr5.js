// 1 Write a simple JavaScript program to print expected Output using the following

// array.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange


let color = ["Red", "Green", "White", "Black"];
console.log(color.join(" , "));
console.log(color.join(" + "));
console.log(color.slice(0, 3).join(",  "));
console.log(color.slice(0, 1).join("")); 
console.log(color.slice(2, 4).join(" , ")); 
console.log(color.slice().join(" , ") + " , Orange");


//OUTPUT: Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange



// ==========================================================================================================================




// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop.

 let numbers = [91,45,23,58,5,20,15,83,95,14,20];

 let length = numbers.length;

 let sum = 0 , i;

// Using for loop

 for(i = 0; i < length; i++)
 {
     sum += numbers[i];
 }

console.log("Using for loop Sum of these numbers is : ",sum);

// output : Using for loop Sum of this numbers is : 581

// ============================================

//Using foreach loop

 sum = 0;

 numbers.forEach(number => {
   sum += number;
 });

 console.log("Using foreach method Sum of these numbers is : ", sum);

// output : Using foreach method Sum of these numbers is : 581



// ==========================================================================================================================


// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let num = [56,25,41,85,99,78,15,20];
 let max = num[0]; 

 for (let i = 1; i < num.length; i++) {
     if (num[i] > max) {
         max = num[i]; 
     }
 }

console.log("The maximum value in the array is:", max);

//  output : The maximum value is the array is : 99

// ============================================

 let min = num[0]; 

 for (let i = 1; i < num.length; i++) {
     if (num[i] < min) {
         min = num[i]; 
     }
    }
console.log("The minimum value in the array is:", min);

// output : The minimum value is the array is : 15


// ==========================================================================================================================



// 4.Write a JavaScript program to convert all array elements into ASCII values.

 let array = ["h","p","s","$"];

for (let i = 0; i < array.length; i++) {
  console.log("ASCII value of " + array[i] + " is " + array[i].charCodeAt(0));
}

// ASCII value of h is 104
// ASCII value of p is 112
// ASCII value of s is 115
// ASCII value of $ is 36



// ==========================================================================================================================





// 5.Write a JavaScript program to remove negative values using the filter array function.


 let numb = [-23,45,-98,23,23,54,89,24,-98,-47];

 let positiveNumbers = numb.filter((numb) => numb >= 0);
 console.log(positiveNumbers);

// output: [45, 23, 23, 54, 89, 24]




// ==========================================================================================================================




// 6. Write a JavaScript program using array map() method and return the square of the array element.
// array = [2, 5, 6, 3, 8, 9];

 let arr = [2,4,6,8,10];

 let squareArr = arr.map((number) => number * number);

 console.log(squareArr);

 //output: [1, 4, 9, 16, 25, 36, 49, 64, 81]



// ==========================================================================================================================




// 7.Write a JavaScript program for sorting an array in ascending descending.
 //number = [23, 20, 17, 12, 5, 0, 1, 5, 19, 20];
 //myColor = ["Red", "Green", "White", "Black"];



 let number = [23,20,17,12,5,0,1,5,19,20];
 let myColor = ["Red", "Green", "White", "Black","Orange","Pink","Blue"];

 let ascendingNumber = number.sort((a, b) => a - b);
 console.log(ascendingNumber);

let descendingNumber = number.sort((a, b) => b - a);
console.log(descendingNumber);

 let ascendingColor = myColor.sort();
 console.log(ascendingColor);

 let descendingColor = myColor.sort().reverse();
 console.log(descendingColor);

// output:  [0, 1, 5, 5, 12, 17, 19, 20, 20, 23]
// output: [23, 20, 20, 19, 17, 12, 5, 5, 1, 0]

// output: ['Black', 'Blue', 'Green', 'Orange', 'Pink', 'Red', 'White']
// output: ['White', 'Red', 'Pink', 'Orange', 'Green', 'Blue', 'Black']



// ==========================================================================================================================





// 8. Write a JavaScript program which filters out any string which is less than 8 characters.
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


 let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


 let filterWords = words.filter((word) => word.length <= 8);
 console.log(filterWords);

// output: ['Python', 'Go', 'Java', 'PHP', 'Ruby']

// ==========================================================================================================================





// 9. write a JavaScript program to print expected output for the following string.
// x = "airplane"; output:- r
// x = "oxoxoxox"; output:- "oXoXoXoX"
// x = "A New Java Book";
// output:- "a new java book" , "A NEW JAVA BOOK"

 let x = "oxoxoxox";
 let output = x.replace(/x/g, "X");
 console.log(output);

 let y = "A New Java Book";
 let outputs = y.toUpperCase().split(" ").join(" ");
 console.log(outputs);

// output: x = "oXoXoXoX"
// output: "A NEW JAVA BOOK"




// ==========================================================================================================================





// 10. write a JavaScript program for array reverse.

 let arrayy = [1, 2, 3, 4, 5];

 let reverseArray = arrayy.reverse();
 console.log(reverseArray);


// output: [5, 4, 3, 2, 1]




// ==========================================================================================================================




// 11. write a JavaScript program to check if a value is found or not?

 let arrayyy = [1, 2, 3, 4, 5 ,6]; 

 let checkValue = arrayyy.includes(9);
console.log(checkValue);

// output: false



// ==========================================================================================================================


// 12. write a JavaScript program to print your name and write the number of total characters.


 let name = "Heney Goyani";

let totalCharacter = name.length;
 console.log(totalCharacter);

// output: 12




// ==========================================================================================================================




// 13. write a JavaScript program given this output using replace concept.
// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:- "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"



 let input = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";


 let outtput = input.replace(/dog/g, "cat");
 console.log(outtput);


// output: "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"




// ==========================================================================================================================




// 14. write a JavaScript program convert string to array.
// Input :- "Hire the top 1% freelance developers";
// Output :- ["Hire", "the", "top", "1%"]


 let inputt = "Hire the top 1% freelance developers";

 let outputt = inputt.split(" ");
 console.log(outputt);

// output: ["Hire", "the", "top", "1%", "freelance", "developers"]



// ==========================================================================================================================




// 15. write a JavaScript program to convert an array to string.
// Input:- ['5', 32, 'resha'];
// Output: 5,32,resha

 let iinput = ['5', 32, 'resha','heney'];

 let outPut = iinput.toString();
 console.log(outPut);

 //output: 5,32,resha,heney