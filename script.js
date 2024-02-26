let firstNumber
let operator 
let nextNumber

let add=function(firstNumber,secondNumber){
    return firstNumber+secondNumber
}

let subtract=function(firstNumber,secondNumber){
    return firstNumber-secondNumber
}

let multiply=function(firstNumber,secondNumber){
    return firstNumber*secondNumber
}

let divide=function(firstNumber,secondNumber){
    return firstNumber/secondNumber
}




let operate= function(firstNumber,operator,secondNumber){
     switch(operator){
        case '+': return add(firstNumber,secondNumber);
        break;
        case '-': return subtract(firstNumber,secondNumber);
        break;
        case '*': return multiply(firstNumber,secondNumber);
        break;
        case '/': return divide(firstNumber,secondNumber);
        break;
     }
}

let display=document.querySelector('#display')
let buttons=document.querySelector('#buttonContainer')
let displayValue
let nextInteger
buttons.addEventListener('click',(event)=>{
   if (event.target.id==='clear'){
    display.textContent=''
   
   }
   else if (event.target.id==='+'){
    operator='+'
   }

   else if (event.target.id==='-'){
    operator='-'
   }
   else if (event.target.id==='*'){
    operator='*'
    
   }
   else if (event.target.id==='/'){
    operator='/'
   }
   else if (event.target.tagName==='BUTTON'){
     nextInteger=event.target.innerText
    displayValue='' 
    String(nextInteger)
      String(displayValue)
      display.textContent+=displayValue.concat('',nextInteger)
      nextInteger=''
      displayValue=display.textContent
   }
})







