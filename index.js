const newsLetterForm = document.querySelector(".form-container form");

const email = document.querySelector(".input-container input");

newsLetterForm.addEventListener("submit", handleSubmit);

const emailErrorMessage = document.querySelector(
    ".input-container .error-message"
);

const emailErrorMessageDesktop = document.querySelector(
    ".input-container .error-message-desktop"
);

const newsLetterContainer = document.querySelector("section.newsletter");

let isEmailValid;

const main = document.querySelector("main");

function handleSubmit(e) {
    e.preventDefault();

    const emailValue = e.target[0].value; //first element of the forms target is the input

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    isEmailValid = emailRegex.test(emailValue);

    if (!isEmailValid) {
        email.classList.add("error");
        emailErrorMessage.style.visibility = "visible";
        emailErrorMessageDesktop.style.visibility = "visible";
        return;
    }

    email.classList.remove("error");
    emailErrorMessage.style.visibility = "hidden";
    emailErrorMessageDesktop.style.visibility = "hidden";

    const thankYouElement = `
    <div class="thank-you">
        <div class="text">
            <img src="/assets/images/icon-success.svg" alt="check icon">
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <strong> ${emailValue}</strong>. Please open it and click the button inside to confirm your subscriptions</p>
        </div>
        <button class="dismiss">Dismiss message</button>
    </div>
    `;

    newsLetterContainer.remove();

    main.insertAdjacentHTML("afterbegin", thankYouElement);

    const dismissButton = document.querySelector(".thank-you button");

    dismissButton.addEventListener("click", () => {
        // reload the page
        location.reload();
    });

    console.log("Form submitted");
}
