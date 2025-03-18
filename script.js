const input = document.querySelector('#display');

function appendToDisplay(val){
    if(input.value =='0'){
        input.value = val
    }else{
        input.value +=val
    }
   
}

// function clear(){
//     input.value = '0';
// }


function Add(num1,num2){
    return num1 + num2;
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