var a='9'
console.log(typeof(a))
a = Number(a)
console.log(typeof(a))
var b=[2,4,6,8]
console.log(typeof(b))
try{
    //errorcode
    const i = 'coolie'
    i='vettai varalaaru'
}catch(err){
    console.log('handling the error')
    console.log(err)
}
console.log('this is a error free zone')
console.log('lets gooooo')
function sleep(a,b,c,d){
    console.log(9+a)
    console.log(5+b)
    console.log(4+c)
    console.log(3+d)

}
sleep(9,5,3)