const numberbuttons=document.querySelectorAll('.number')
const operatorbuttons=document.querySelectorAll('.operators')
const display = document.querySelector('.display')

let currentInput=''
let previouInput=''
let operator=null

function updateDisplay(v){
    display.innerText=v
}

numberbuttons.forEach(b => {

b.addEventListener('click', ()=>{

currentInput = currentInput + b.id

updateDisplay(currentInput)

})

})