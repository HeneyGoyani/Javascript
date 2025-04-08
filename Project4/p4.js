//1.WAP TO PRINT GREETING MESSAGE USING THE ARGUMENT NO RETURN TYPE FUNCTION WHEN CALL A FUNCTION WITHPUT ARGUMENT AT THAT TIME PRINT MESSAGE GOOD MORNING

let n;
function greet(g){
    if(g == null)
    {
        console.log("Good Morning...");
    }
    else
    {
        console.log("Hello world");
    }
}
greet();

// output : Good morning


//=========================================================================================

// 2.WAP TO FIND CIRCLE AREA ( area = pi * r * r)USING RETURN TYPE WITH ARGUMENT

let pi = 3.14;
function areaCircle(r)
{
    areaCircle = pi * r * r;
    return console.log("Area Of Circle is :",areaCircle);

}
areaCircle(20);

//OUTPUT : 1256

//===========================================================================================


//3.WAP TO FIND AREA OF TRIANGLE (area = (l * h)/2) USING RETURN TYPE WITH ARGUMENT

let l , h;
function areaTriangle (l,h)
{
    areaTriangle = (l * h)/2
    return console.log("Area Of Triangle :",areaTriangle);
}
areaTriangle(15,20);

//OUTPUT : 150

//============================================================================================


//4. WAP TO FIND AREA OF RECTANGLE (area = l * h) USING RETURN TYPE WITH ARGUMENT

let length , breadth ;
function areaRectangle (length ,  breadth)
{
    areaRectangle = (length * breadth);
    return console.log("Area Of Rectangle :",areaRectangle);
}
areaRectangle(5,4);

//OUTPUT : 20

//=============================================================================================


//5.WAP TO FIND ANS OF ((b*b)(4*a*c))/(2*a) USING RETURN TYPE WITH ARGUMENT

//let a, b, c;
function Formula1(a, b, c)
{
    Formula1 = ((b * b) * (4 * a * c))/ (2*a);
    return console.log("Answer for Formula1:",Formula1);

}
Formula1(2,4,6);

//OUTPUT: 192


//================================================================================================


//6. WAP TP FIND ANS OF (a*a)+(2*a*b)+(b*b) USING RETURN TYPE WITH ARGUMENT 

//let a , b;
function Formula2(a,b)
{
    Formula2 = (a*a) + (2*a*b) + (b*b);
    return console.log("Answer for Formula2 :",Formula2);
}
Formula2(3,3);

//OUTPUT: 36


//===================================================================================================



//7.WAP to convert Fahrenheit to Celsius (c = (f-32)/1.8 ) using return type with argument function.

let celcius;
function FatoCe (fahrenheit)
{
    celcius = (fahrenheit - 32) / 1.8 ;
    return console.log("Fahrenheit to Celsius :",celcius);
}

FatoCe(75);

//OUTPUT: 23.88888888888889

//=======================================================================================================


// 8. WAP to convert Celsius to Fahrenheit (f: (c*1.8)+32 ) using return type with argument function

let fahrenheit;
function CetoFa (celcius)
{
    fahrenheit = (celcius * 1.8) + 32 ;
    return console.log("Celsuis to Fahrenheit :",fahrenheit);
}

CetoFa(8);

//OYUTPUT : 46.4

//=========================================================================================================

// 9. WAP to find if a given number is odd or even using an argument with no return type.

function odd(number)
{
    if (number == 0)
    {
        console.log("Number is Zero",number);

    } else if( number % 2 == 0)
    {
        console.log("Number is Even :",number);
    } else 
    {
        console.log("Number is Odd :",number);
    }

}
odd(2345);

//OUTPUT : NUMBER IS ODD : 2345


//=========================================================================================================


//10.WAP  to swap a value without third variable using with argument no return type

let a , b;
function swap(a,b)
{
    a = a + b;
    b = a - b;
    a = a - b;

    console.log("A :",a);
    console.log("B :",b);

}
swap(15,20);

//OUTPUT : A : 20 , B : 15


