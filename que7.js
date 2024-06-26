// function  call(number) {
// const result = Number(number.toString().split('').reverse().join(''))
// console.log(typeof result)
// if(result === number)
//   {
//     console.log('Palindrom')
//   }
//   else{
//     console.log('Not Palindrom')
//   }
// }

// call(121)
// function palindromeCheck(num) {
//   let numStr = num.toString();
//   let result = numStr.split('').reverse().join('');
//   return numStr === result;
// }

// console.log(palindromeCheck(121)); // true
// console.log(palindromeCheck(123)); // false


function call(number) {
  let numStr = number.toString()
  let numArr = numStr.split('')


  let result = numArr.every((item, index) => {
    return item === numArr[numArr.length - 1 - index]
  })

  // console.log(result)
}
call(121)
call(12321)

function checkPalindromByLoop(number) {
  let temp = number;
  let sum = 0
  while(temp)
    {
      reminder = temp%10;
    
      sum  = sum*10 + reminder
      temp = Math.floor(temp/10)

   
    }
    console.log(sum===number)
}
checkPalindromByLoop(121  )
