function calc () {
  let result = null
  let args = arguments;
  for(let i = 0; i < args.length; i++){
      result += args[i]
  }
  console.log(result)

}
calc(1, 5, 3, 10) // returns 20
