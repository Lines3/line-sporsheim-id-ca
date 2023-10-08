const purchaseForm = document.querySelector("#formPurchase");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const tickets = document.querySelector("#tickets");
const ticketsError = document.querySelector("#ticketsError");
const cardPaymentForm = document.querySelector("#formPurchase");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const nameOnCard = document.querySelector("#nameOnCard");
const nameOnCardError = document.querySelector("#nameOnCardError");
const expiryDate = document.querySelector("#expiryDate");
const expiryDateError = document.querySelector("#expiryDateError");
const securityCode = document.querySelector("#securityCode");
const securityCodeError = document.querySelector("#securityCodeError");
const purchaseButton = document.querySelector("#purchaseButton");

function validateForm() {
    event.preventDefault();

    if (firstName.value.trim().length > 0) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }

    if (lastName.value.trim().length > 0) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }

    if (tickets.value > 0) {
        ticketsError.style.display = "none";
    }
    else {
        ticketsError.style.display = "block";
    }
    if (cardNumber.value) {
        cardNumberError.style.display = "none";
    }
    else {
        cardNumberError.style.display = "block";
    }

    if (nameOnCard.value.trim().length > 0) {
        nameOnCardError.style.display = "none";
    }
    else {
        nameOnCardError.style.display = "block";
    }

    if (expiryDate.value) {
        expiryDateError.style.display = "none";
    }
    else {
        expiryDateError.style.display = "block";
    }

    if (securityCode.value) {
        securityCodeError.style.display = "none";
    }
    else {
        securityCodeError.style.display = "block";
    }

    // console.log();
};


purchaseForm.addEventListener("submit", validateForm);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

//question for teacher: how do I do the onclick function correctly?
//I would like to make the purchase button into a link where the 
//user is taken to the confirmation page. How can I do that as well as 
//having the form validation running?

purchaseButton.onclick = function () {

}
