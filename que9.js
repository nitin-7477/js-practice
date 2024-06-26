// write a function to check whether the given number is prime or not

function isPrime(number) {
  let isPrime = true
  if(number==2 || number ===3)
    {
      return true
    }
    if(number<=1)
      {
        return false
      }

      for(let i=2;i<number;i++)
        {
          if(number%i==0)
            {
             isPrime=false
             break;
            }
         
            
        }
        if (isPrime) {
          console.log('This is prime')
          
        }
        else{
          console.log("this is not prime")
        }
  
}

// isPrime(9)

function call(number) {
  if (number <= 1) {
    console.log('It is not a prime number');
    return;
  } else if (number === 2 || number === 3) {
    console.log('Number is prime');
    return;
  } else if (number % 2 === 0 || number % 3 === 0) {
    console.log('Number is not prime');
    return;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      console.log('This is not prime');
      return;
    }
  }
  console.log('This is a prime number');
}

call(7); // Output: This is a prime number
call(27); // Output: Number is not prime
