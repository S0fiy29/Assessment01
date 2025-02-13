function checkPhone() {
    let phone = document.getElementById("phone").value.trim();
    
    if (phone === "+60173527250") {
        localStorage.setItem("phone", phone);
        window.location.href = "Page2.html";
    } else {
        alert("Invalid phone number. Only +60173527250 is allowed.");
    }
}

function submitRegistration() {
    let name = document.getElementById("name").value.trim();
    let birthday = document.getElementById("birthday").value;
    let email = document.getElementById("email").value.trim();
    let noEmailChecked = document.getElementById("noEmailCheckbox").checked;

    let isValid = true;

    if (name === "") {
        document.getElementById("nameWarning").innerText = "Please insert a name.";
        document.getElementById("nameWarning").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameWarning").style.display = "none";
    }

    if (birthday === "") {
        document.getElementById("birthdayWarning").innerText = "Please insert your birthday.";
        document.getElementById("birthdayWarning").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("birthdayWarning").style.display = "none";
    }

    if (!noEmailChecked && email === "") {
        document.getElementById("emailWarning").innerText = "Please insert a valid email address.";
        document.getElementById("emailWarning").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailWarning").style.display = "none";
    }

    if (isValid) {
        localStorage.setItem("name", name);
        localStorage.setItem("birthday", birthday);

        if (!noEmailChecked) {
            localStorage.setItem("email", email);
        } else {
            localStorage.setItem("email", "No Email");
        }

        window.location.href = "Page3.html";
    }
}

function toggleEmail() {
    let emailInput = document.getElementById("email");
    let noEmailCheckbox = document.getElementById("noEmailCheckbox");

    if (noEmailCheckbox.checked) {
        emailInput.value = "";
        emailInput.disabled = true;
        document.getElementById("emailWarning").style.display = "none"; // Hide warning
    } else {
        emailInput.disabled = false;
    }
}

window.onload = function() {
    if (document.getElementById("summaryPhone")) {
        document.getElementById("summaryPhone").innerText = localStorage.getItem("phone") || "N/A";
        document.getElementById("summaryName").innerText = localStorage.getItem("name") || "N/A";
        document.getElementById("summaryBirthday").innerText = localStorage.getItem("birthday") || "N/A";
        document.getElementById("summaryEmail").innerText = localStorage.getItem("email") || "N/A";
    }
};
