let firstNumber
let operator 
let secondNumber

let add=function(firstNumber,secondNumber){
    
    return Number(firstNumber)+Number(secondNumber)
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
let secondDisplay=document.querySelector('#secondDisplay')
let buttons=document.querySelector('#buttonContainer')
let displayValue
let secondDisplayValue
let nextInteger
buttons.addEventListener('click',(event)=>{
   if (event.target.id==='clear'){
    display.textContent=''
    secondDisplay.textContent=''
   
   }
   else if (event.target.id==='+'){
    operator='+'
    display.textContent=secondDisplayValue
    secondDisplay.textContent=''
    displayValue=''
    firstNumber=display.textContent
    display.textContent+= displayValue.concat('',operator)
    
   }

   else if (event.target.id==='-'){
    operator='-'
    display.textContent=secondDisplayValue
    secondDisplay.textContent=''
    displayValue=''
    firstNumber=display.textContent
    display.textContent+= displayValue.concat('',operator)
   }
   else if (event.target.id==='*'){
    operator='*'
    display.textContent=secondDisplayValue
    secondDisplay.textContent=''
    displayValue=''
    firstNumber=display.textContent
    display.textContent+= displayValue.concat('',operator)
    
   }
   else if (event.target.id==='/'){
    operator='/'
    display.textContent=secondDisplayValue
    secondDisplay.textContent=''
    displayValue=''
    firstNumber=display.textContent
    display.textContent+= displayValue.concat('',operator)
   }
   else if (event.target.id==='='){
   let result=operate(firstNumber,operator,secondNumber)
   display.textContent=''
   secondDisplay.textContent=result
   secondDisplayValue=result
   operator=''
   }

   else if (event.target.tagName==='BUTTON'){
     nextInteger=event.target.innerText
    secondDisplayValue='' 
    String(nextInteger)
      String(secondDisplayValue)
      secondDisplay.textContent+=secondDisplayValue.concat('',nextInteger)
      nextInteger=''
      secondDisplayValue=secondDisplay.textContent
      secondNumber=secondDisplay.textContent
   }
})







