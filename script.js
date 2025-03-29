function Add(num1,num2){
    return parseFloat(num1) + parseFloat(num2);
}

function Substract(num1,num2){
    return num1 - num2;
}

function Multiply(num1,num2){
    return num1 * num2;
}

function Divide(num1,num2){
    return num1 / num2;
}

let num1 = '';
let num2 = '';
let operator = '';
let result = 0;

function operate(num1,operator,num2){

    if(operator =='+'){
        result = Add(num1,num2);
    }
    else if(operator == '–'){
        result = Substract(num1,num2);
    }
    else if(operator =='×'){
        result = Multiply(num1,num2);
    }
    else if(operator =='÷'){
        result = Divide(num1,num2);
    }
    return input.value = result;
}

const input = document.querySelector('#display');

function appendToDisplay(val){
    try{
        if (!isNaN(val) || val === '.') { 

            if (operator === '') {  
                num1 += val;    
                input.value = num1;  
            } else {  
                num2 += val ;    
                input.value = num2;  
            }  
        } else if (num1 !== '') {  
                operator = val;
                input.value = '';  
            }
        
        else {
            input.value = 'Error';  
        }
    }catch(error){
        input.value = 'Error';
    }
    
        

}



function clearBtn(){
    input.value = '';
    num1 = '';
    num2 = '';
    operator ='';
}


