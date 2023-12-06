// 

function generateNumber(guesses){
    const randomNumber = Math.floor(Math.random() * 100 + 1)
    
   if (guesses === randomNumber){
    return "Your guess number is corrrect"
   }

  else if(guesses < randomNumber){
    return "Your guess number is low"
}
  else {
    return " Your guess number is high"
  }
}
//   Now let us test if it works- yayyy-it does
console.log(generateNumber(50))

