//Pseudocode:
//1- Define the variable x.
//2- Define a variable equal to an *.
//3- Define an empty variable str.
//4- Define an empty array variable.
//5- For loop and define the variable i for the length of the variable x.
//6- If condition not equal to Program write the same string.
//7- Else define a variable j less then the length of the x[i] that gives the variable str equal to an *.
//8- Print the result.

//Code:
var X = ['Man', 'I', 'Love','The','Matrix','Program']
var newWord = '*';
var str = '';
var newArr = []
for(var i=0; i<X.length; i++){
    if(X[i] !== 'Program'){
        newArr.push(X[i])
    }else {
        for(var j=0; j<X[i].length; j++){
            str += '*'
        }
        newArr.push(str)
        str = ''
    }
}
console.log(newArr)

//Diagram:
//i=0 ... x[i]= Man
//i=1 ... x[i]= I
//i=2 ... x-[i]= Love
//i=3 ... x[i]= The
//i=4 ... x[i]= Matrix
//i=5 ... x[i]= *******