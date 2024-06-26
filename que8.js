// function to get the random number in a given range
function  call(min,max)
 {
  const randomNumber = Math.floor(Math.random()*(max-min)+min)
  console.log(randomNumber)
}
 call(5,10)