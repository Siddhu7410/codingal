var a ='99'
console.log(typeof(a))
a = Number(a)
console.log(typeof(a))
try{
    const i=75//the error in this line is the assignment of a different value to a constant 'i'
    i=99
}catch(err){//the error gets handled here and moves on to the next block of code without terminating it
    console.log('handling the error')
    console.log(err)
}
console.log('The error has been dealt with')
console.log('Continuing the output')