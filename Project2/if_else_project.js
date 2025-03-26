// 1.Enter Electricity Unit and Calculate amount to pay 
let  totalBill, surcharge, finalAmount;
let unitsConsumed = +prompt("ENTER THE CONSUMED UNITS:");

if (unitsConsumed <= 50) {
    totalBill = unitsConsumed * 1;
    console.log("The electricity bill is:", totalBill, "Rs");
}
else if (unitsConsumed <= 150) {
    totalBill = ((unitsConsumed - 50) * 2) + (50 * 1);
    console.log("The electricity bill is:", totalBill, "Rs");
}
else if (unitsConsumed <= 250) {
    totalBill = ((unitsConsumed - 150) * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("The electricity bill is:", totalBill, "Rs");
    console.log("Surcharge:", surcharge, "Rs");
    console.log("The final amount to pay is:", finalAmount, "Rs");
}
else {
    totalBill = ((unitsConsumed - 250) * 4) + (100 * 3) + (100 * 2) + (50 * 1);
    surcharge = totalBill * 0.2;
    finalAmount = totalBill + surcharge;

    console.log("The electricity bill is:", totalBill, "Rs");
    console.log("Surcharge:", surcharge, "Rs");
    console.log("The final amount to pay is:", finalAmount, "Rs");
}

// 2. WAP tp print the season by month

let months = prompt("ENTER THE MONTH(1-12) :");
console.log("YOUR CHOOSE MONTH IS : ",months);

switch(months)
{
    case '1':
    case '2':
    case '3':
    case '4':
        console.log("It's Coldy Winter Season!!!");
        break;

    case '5':
    case '6':
    case '7':
    case '8':
        console.log("It's Hot Summer Season...");
        break;

    case '9':
    case '10':
    case '11':
    case '12':
        console.log("It's Rainy Monsoon Season!.!.");
        break;

    default :
    console.error("ENTER THE VALID NUMBER.. ");
}



//3.WAP to calculate the interest 

let interestRate , totalInterest;
let principleAmount = +prompt("Enter Your Amount :");
let timeInYear = +prompt("Enter The Time Period : ");

if (3 < timeInYear <= 5 )
{
    interestRate = 3;
}
else if( 5 < timeInYear <= 8)
{
    interestRate = 5;
}
else if ( 8 < timeInYear <= 12)
{
    interestRate = 12;
}
else 
{
    interestRate = 15;
}

totalInterest = (principleAmount * interestRate * timeInYear)/100;
console.log("Total Interest Rate is : ",totalInterest);



// 4. voting eligible 

let age = +prompt("ENTER YOUR AGE :");

if (age < 18)
{
    console.log("You Are Not Eligible For Voiting!!!!");
}
else if (age >= 18)
{
    console.log("You Are Eligible For Voiting...");
}
else 
{
    console.log("Enter valid choice...");
}



//5.Classify age groups

let your_age = +prompt("Enter your age to classify age groups :");
console.log("Your age is :",your_age);

if(your_age <= 1)
{
    console.log("YOU ARE CLASSIFIED AS INFANTS..");
}
else if(your_age <= 4)
{
    console.log("YOU ARE CLASIFIED AS TODDLERS..");
}
else if (your_age <= 12)
{
    console.log("YOU ARE CLASSIFIED AS CHILDERNS..");
}
else if(your_age <= 19)
{
    console.log("YOU ARE CLASSIFIED AS TEENAGERS..");
}
else if (your_age <= 39)
{
    console.log("YOU ARE CLASSIFIED AS YOUNG ADUTLS..");
}
else if(your_age <= 59)
{
    console.log("YOU ARE CLASSIFIED AS MIDD-ADULTS..");
}
else if(your_age >= 60)
{
    console.log("YOU ARE CLASSIFIED AS SENIOR CITIZENS..");
}
else 
{
    console.error("ENTER VALID AGE!!!");
}