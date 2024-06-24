function call(num) {
  const digits = num.toString().split('');
  const length = digits.length

 const sum = digits.reduce((acc,digit)=>acc+Math.pow(parseInt(digit),length),0);
 
 if(sum===num)
  {
    console.log( 'Number is Armstrong')
  }
  else{
    console.log('Number is not Armstrong')
  }
  
}
// call(9474)
 

function sum() {
const arr = [1,2,3,4,5]
let sum = arr.reduce((acc,digit)=>acc+digit,0)
// console.log(sum)

  
}
sum()

function isArmStrong(num) {
  let temp = num;
  let length = order(temp)
let sum = 0;
 
  while(temp)
  {
    let remainder = temp % 10;
   
     temp = Math.floor(temp/10)
     sum = sum + Math.pow(remainder,length);

  }
  if(sum===num)
    {
      console.log('Armstrong')
    }
    else{
      console.log('Not Armstrong')

    }
  
}
isArmStrong(1534)
function order(num) {
  let length = 0;
  while(num>0)
    {
      length++
      num = Math.floor(num/10)
    }
    return length
}