function calc () {
  let result = null
  let args = arguments;
  for(let i = 0; i < args.length; i++){
      result += args[i]
  }
  console.log(result)
  console.log(arguments);

}
calc(1, 2, 3, 10)
