//program to find the sum of natural numbers with loop
function sumOfNatural(n) {
  let sum = 0;
  for(let i=1;i<=n;i++)
    {
      sum+=i;
    }
    console.log(sum)
  
}
sumOfNatural(4)

//by recursion , recursion means function calling itself again and again

function sum(n) {
if(n!==0)
  {
    return n+sum(n-1)
  }
  else{
    return n
  }
  
  
}
console.log(sum(4))

//by using mathematical formula

function sumByFormula(n)
{
return n*(n+1)/2
}
console.log(sumByFormula(7))