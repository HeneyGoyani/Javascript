// 1. WAP to find arae of triangle

let length = 4 , base = 7 , area_triangle ;

area_triangle = 1/2 * length * base ;
console.log("Area of Triangle : ",area_triangle);

// OUTPUT : 14 

//------------------------------------------------------------


// 2. WAP to convert celsius into fahrenheit

let celsius = 49 , fahrenheit ;

fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit is : ",fahrenheit);

// OUTPUT : 120.2

//------------------------------------------------------------


// 3. WAP to find area of rectangle 

let area_rectangle , l = 79 , w = 42 ;

area_rectangle = l * w ;
console.log("Area Of Rectangle : ",area_rectangle);

// OUTPUT : 3318

//------------------------------------------------------------



// 4. WAP to find area of circle

let area_circle , pi = 3.14 ; r = 33 ;

area_circle = pi*(r**2);
console.log("Area of Circle : ",area_circle);

//OUTPUT : 3419.46

//------------------------------------------------------------


// 5. WAP to convert feet into inches 

let feet = 54 , inches ;

inches = feet * 12 ;
console.log("Inches are : ", inches);

// OUTPUT : 648

//------------------------------------------------------------


// 6. Calculate the given formulas 

// i. a2 - b2 = (a-b) (a+b)

let a = 50 , b = 30 , c = 22 , formula1 ;

formula1 = (a*a) - (b*b) === (a-b) * (a+b);
console.log("ANSWER 1 : ", formula1);

// OUTPUT : TRUE

//------------------------------------------------------------


// ii. (a-b)2 = a2 - 2ab + b2

let formula2;

formula2 = (a-b) * (a-b) === (a**2) - (2*a*b) + (b**2);
console.log("ANSWER 2 : ", formula2);

// OUTPUT : TRUE

//------------------------------------------------------------

// iii. (a+b+c)2 = a2 + b2 + c2 + 2ab + 2ac + 2bc

let formula3 ;

formula3 = (a+b+c) * (a+b+c) === (a**2) + (b**2) + (c**2) + (2*a*b) + (2*a*c) +(2*b*c);
console.log("ANSWER 3 : " , formula3);

// OUTPUT : TRUE 

//------------------------------------------------------------


// iv. (a-b-c)2 = a2 + b2 + c2 - 2ab - 2ac + 2bc

let formula4;

formula4 = (a-b-c) * (a-b-c) === (a**2) + (b**2) + (c**2) - (2*a*b) - (2*a*c) +(2*b*c);
console.log("ANSWER 4: " , formula4);

// OUTPUT : TRUE 

//------------------------------------------------------------

// v. (a-b)3 = a3 - 3 a2b + 3ab2 - b3

let formula5;

formula5 = (a-b) * (a-b) * (a-b) === (a*a*a) - (3*a*a*3*b) + (3*a*b**2) - (b*b*b);
console.log("ANSWER 5 : " , formula5);

// OUTPUT : FALSE


