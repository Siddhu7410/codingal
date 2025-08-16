function validateform(){
    var x=document.form['myform']
    if (x['Fullname'].value == "abc"){
        alert['please give proper name']
        return false
    }else if(x["Phone number"].value==xyz){
        alert["please give valid phone number"]
        return false
    }
}