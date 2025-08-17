//json
var a={name:'Siddhesh',age:15,iq:'extremely high '}
console.log(a)
var b=JSON.stringify(a)
console.log(b)
var c=JSON.parse(b)
console.log(c)

console,log('startinggggg')
setTimeout(()=>{
    console.log('work done hurray')

},5000)
console.log(end)
var p = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('hurray boi')},7000)

        

})

p.then((data) => console.log(data)).catch(err=>console.log('ok ok noi',err))