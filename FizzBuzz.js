//Pseudocode:
//1- Define the variable x.
//2- Define the variable i.
//3- For loop the variable i starting from 1 and less or equal then 135.
//4- If condition: i divided by 3 and equal to 0 and i divided by 5 and equal to 0 then print FizzBuzz.
//5- Else if condition: i is divided by 3 and equal to 0 then print Fizz.
//6- Else if condition: i is divided by 5 and equal to 0 then print Buzz.
//7- Else print the result i.

//Code:
var i;
for(i=1; i<=135; i++){
    if (i%3===0 && i%5===0){
        console.log('FizzBuzz')
    }else if(i%3===0){
        console.log('Fizz')
      }else if (i%5===0){
        console.log('Buzz')
    }else 
    console.log(i)
  }

//Diagram:
//i=1 ... i=1
//i=2 ... i=2
//i=3 ... i=Fizz
//i=4 ... i=4
//i=5 ... i=Buzz
//.
//.
//.
//i=135 ... i= FizzBuzz






