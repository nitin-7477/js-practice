//write a program to check the largest number from the given three numbers

function  call(a,b,c) {

  if(a>b&&a>c)
    {
      console.log('A')
    }
    else if(b>a && b>c)
      {
        console.log('B')
      }
      else{
        console.log('C')
      }
  
}
call(2,9,4)

function  call2(a,b,c) {

 let result;

//  result = a>b && a>c ? "A" :b>a && b>c ? "B" : "C"
// result = Math.max(a,b,c)
// arr = [12,21,33]
// result = Math.max(...arr)
result = Math.max(...[a,b,c])
  console.log(result)
}
call2(2,9,1)