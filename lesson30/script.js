function validateform() {
    var x = document.forms['myform'];

    // Get values
    var fullname = x['Fullname'].value.trim();
    var phone = x['Phone number'].value.trim();
    var age = parseInt(x['Age'].value);

    // Validate Full Name
    if (fullname === "" || fullname.toLowerCase() === "abc") {
        alert("Please give a proper name");
        return false;
    }

    // Validate Phone Number
    if (phone === "" || phone.toLowerCase() === "xyz") {
        alert("Please give a valid phone number");
        return false;
    }

    // Validate Age
    if (isNaN(age) || age < 18) {
        alert("You are not eligible to enter this site");
        return false;
    }

    // All validations passed
    return true;
}
