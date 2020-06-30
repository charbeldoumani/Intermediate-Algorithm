//Pseudocode:
//1- Define the variable x that starts with 0 and 1.
//2- Define the variable i.
//3- For loop i is less then 1000000.
//4- If condition when i is bigger then 1 then the variable will calculate the sum.
//5- Print the result. 

//Code:
var  X = [0,1];
for(var i = 0; i <= 999999; i++) {
       if(i>1){
           X[i]=X[i-1] + X[i-2]
        }
       console.log(X[i]);
   }

//Diagram:
//i=0 ... x[i]=0
//i=1 ... x[i]=1
//i=2 ... x[i]=[(2-1)+(2-2)]= 1+0 =1
//i=3 ... x[i]=[(3-1)+(2-2)]= 2+0 =2
//i=4 ... x[i]=[(4-1)+(2-2)]= 3+0 =3
//i=5 ... x[i]=[(5-1)+(3-2)]= 4+1 =5
//i=6 ... x[i]=[(6-1)+(5-2)]= 5+3 =8
//.
//.
//.
//i=99999 ... x[i]=[.....]