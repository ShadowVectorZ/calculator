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
        default: add(firstNumber,secondNumber)

     }
}