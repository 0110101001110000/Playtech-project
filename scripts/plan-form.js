

/* Init -------------------------------------------------------------------- */


/* Form Functionality -------------- */

// Get Submit Button
const submit_button = document.getElementById("plan-form-submit-button");

// Get Form Values
submit_button.addEventListener("click", (event) => {
    // Get elements
    const user_name = document.getElementById("plan-form-name").value;
    const user_email = document.getElementById("plan-form-email").value;
    const messages = document.getElementsByClassName("message")[0].value;
    alert(user_name);
    alert(user_email);
    for (let index = 0; index < messages.length; index++) {
        const element = array[index];
        alert(element);
    }

    // Get user name values


});
