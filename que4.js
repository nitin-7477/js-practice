// swap two variable with temperary variable

function call(a, b) {
  // take a temporary variable to store the value of a so that we can use it later 
  //now store the value of a in temporary value and get the value of b in a 
  // now put the value of temp in b
  let temp = a
  a = b
  b = temp
  console.log(a, b)

}
call(9, 76)

// swap without using any third variable

function swapVariable(a,b) {
  a= a+b
  b=a-b
  a=a-b
  console.log(a,b)
  
}
swapVariable(28,92)
