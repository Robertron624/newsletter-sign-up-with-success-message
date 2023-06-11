const newsLetterForm = document.querySelector('.form-container form')

const email = document.querySelector('.input-container input')

newsLetterForm.addEventListener('submit', handleSubmit)

const emailErrorMessage = document.querySelector('.input-container .error-message')

let isEmailValid;

function handleSubmit (e) {

    e.preventDefault()

    const emailValue = e.target[0].value

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    isEmailValid = emailRegex.test(emailValue)

    if (!isEmailValid) {
        email.classList.add('error')
        emailErrorMessage.style.visibility = 'visible'
        return
    } else {
        email.classList.remove('error')
        emailErrorMessage.style.visibility = 'hidden'
    }

    console.log("Form submitted")
}