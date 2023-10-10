$(document).ready(function () {
    $('#phone_number').blur(function (e) {
        if (validatePhone('phone_number')) {
            $('#validation_status_phone').html('');
            // $('#validation_status').css('color', 'green');
            $("#btnSubmit").attr("disabled", false)
        } else {
            $('#validation_status_phone').html('Please enter a valid phone number');
            $('#validation_status_phone').css('color', 'red');
            $("#btnSubmit").attr("disabled", true)
        }
    });

    $('#RegisterForm-email').blur(function (e) {
        if (validateEmail('RegisterForm-email')) {
            $('#validation_status_email').html('');
            // $('#validation_status').css('color', 'green');
            $("#btnSubmit").attr("disabled", false)
        } else {
            $('#validation_status_email').html('Please enter a valid email');
            $('#validation_status_email').css('color', 'red');
            $("#btnSubmit").attr("disabled", true)
        }
    });

    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#RegisterForm-password");

    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);

        // toggle the icon
        this.classList.toggle("bi-eye");
    });

});

function validatePhone(phone_number) {
    var a = document.getElementById(phone_number).value;
    var regex = new RegExp('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$');
    if (regex.test(a)) {
        return true;
    } else {
        return false;
    }
}
function validateEmail(email) {
    var a = document.getElementById(email).value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(a)) {
        return true;
    } else {
        return false;
    }
}