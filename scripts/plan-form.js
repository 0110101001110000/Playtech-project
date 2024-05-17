

/* Init -------------------------------------------------------------------- */


// Functions
function warning(element) {
    element.style.color = "red";
    element.style.borderColor = "red";
    
    if ((element.placeholder != undefined) && (!element.placeholder.includes("* "))) {
        element.placeholder = "* " + element.placeholder;
    }
}

function enableElements(array_of_elements) {
    for (let index = 0; index < array_of_elements.length; index++) {
        const element = array_of_elements[index];
        if (element.style.display != "block") {
            element.style.display = "block";    
        }
    }
}

function disableElements(array_of_elements) {
    for (let index = 0; index < array_of_elements.length; index++) {
        const element = array_of_elements[index];
        if (element.style.display != "none") {
            element.style.display = "none";
        }
    }
}

function calculate(text_array) {
    let letters = 0;
    for (let index = 0; index < text_array.length; index++) {
        const element = text_array[index];
        letters += element.length;
    }
    return parseInt(letters + ((Math.random() * 10) * (Math.random() * 10)));
}

// Global Variables
let warning_count = 0;


/* Form Functionality -------------- */

// Get Elements
const submit_button_element = document.getElementById("plan-form-submit-button");

// Get Form Values
submit_button_element.addEventListener("click", (event) => {
    
    // Get elements
    const user_name_element = document.getElementById("plan-form-name");
    const user_email_element = document.getElementById("plan-form-email");  
    const message_elements = document.querySelectorAll(".message");
    const project_estimated_price_elements = document.querySelectorAll(".disabled");
    const project_estimated_price_text_element = document.getElementById("project-estimated-price-text");
    
    // Add all input elements in a array
    let input_elements = [user_name_element, user_email_element]; 
    for (let index = 0; index < message_elements.length; index++) {
        const element = message_elements[index];
        input_elements.push(element);
    }

    // Show warning message && Add all values on let input_element_values
    let input_element_values = [];
    for (let index = 0; index < input_elements.length; index++) {
        const element = input_elements[index];
        if (element.value == "") {
            warning(element);
            warning_count += 1;
        } else {
            element.style.color = "#363636";
            element.style.borderColor = "#ccc";
        }
        input_element_values.push(element.value);
    }

    // Calculate estimated project price
    if (warning_count == 0) {
        enableElements(project_estimated_price_elements);
        const project_estimated_price = calculate(input_element_values); 
        project_estimated_price_text_element.innerText = "R$:" + String(project_estimated_price) + "/mo";
        warning_count = 0;
    } else {
        disableElements(project_estimated_price_elements);
        warning_count = 0;
    }
});
