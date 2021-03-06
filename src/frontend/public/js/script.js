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


validateDoc = (form) => {
    const doc = form.elements["docSelect"];
    if (document.getElementById("docSelect").selectedIndex < 0) {
        doc.setCustomValidity("Please choose your doctor");
    }
    else {
        doc.setCustomValidity("");
    }
};

validate = (form) => {
    validateEmail(form);
    validateName(form);
    validateDate(form);
    validateDoc(form);


};