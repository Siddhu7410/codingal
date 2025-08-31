const numberbuttons=document.querySelectorAll('.number')
const operatorbuttons=document.querySelectorAll('.operators')
const display = document.querySelectorAll('.display')

let currentinput=''
let previousinput=''
let operator=null

function updateDisplay(v){
    display.innertext=v
}

numberbuttons.forEach(b => {

b.addEventListener('click', ()=>{

currentInput = currentInput + b.id

updateDisplay(currentInput)

})

})