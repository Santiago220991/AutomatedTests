const reverseString=string=>{
    return string.split("").reverse().join("");
}

const stringLength=string=>{
    if(string.length<1||string.length>10){
        return "error"
    }
    return (string.length)
}

const calculator={
    
    add(a,b) {
        return a+b
    },
    substract(a,b){
        return a-b
    },
    multiply(a,b){
        return a*b

    },
    divide(a,b){
        return a/b
    }
}

const capitalized=string=>{
    string=string.toLowerCase()
    let first=string[0]
  console.log(first)
    first=first.toUpperCase()
  console.log(first)
    string=string.replace(string[0],first)
  return string
}


module.exports={stringLength,reverseString,calculator,capitalized}




