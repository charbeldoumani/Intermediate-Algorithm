var sum=0;
for(var i=200; i<=300; i++){
  if ((i%3===0 || i%5===0) && !(i%3===0 && i%5===0)){
    sum+=i;
    }
}
console.log(sum);