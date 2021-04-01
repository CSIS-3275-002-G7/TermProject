
window.onload = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var mmPlusOne = today.getMonth() + 2;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    if (mmPlusOne < 10) {
        mmPlusOne = '0' + mmPlusOne
    }

    today = yyyy + '-' + mm + '-' + dd;
    plusMonth = yyyy + '-' + mmPlusOne + '-' + dd;

    document.getElementById("date").setAttribute("min", today);
    document.getElementById("date").setAttribute("max", plusMonth);
};





const validate = (form) => {
    validateEmail(form);
    validateName(form);
    validateDate(form);
    validateDoc(form);


};

validateEmail = (form) => {
    const email = form.elements["email"];

    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email")
    } else if (email.validity.typeMismatch) {
        const input = document.getElementById("inputEmail").value;
        email.setCustomValidity("Email " + input + " is not in a correct format");
    } else {
        email.setCustomValidity("");
    }
};


validateName = (form) => {
    const nameField = form.elements["name"];
    const name = document.getElementById('inputName').value;
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (nameField.validity.valueMissing) {
        nameField.setCustomValidity("Please enter your full legal name");
    } else if (!regName.test(name)) {
        nameField.setCustomValidity("Please enter your full legal First and Last name");
    }
    else {
        nameField.setCustomValidity("");
    }
};



validateDate = (form) => {
    const date = form.elements["date"];
    if (date.validity.valueMissing) {
        date.setCustomValidity("Please select appointment date")
    } else {
        date.setCustomValidity("");
    }
};

function docEnable() {
    document.getElementById("docSelect").disabled = false;
}


validateDoc = (form) => {
    const doc = form.elements["docSelect"];
    if (document.getElementById("docSelect").selectedIndex < 0) {
        doc.setCustomValidity("Please choose your doctor");
    }
    else {
        doc.setCustomValidity("");
    }
};




