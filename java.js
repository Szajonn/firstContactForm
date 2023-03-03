const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const emailAdress  = document.getElementById('emailAdress')
const chooseDate = document.getElementById('chooseDate')
const submitBtn = document.getElementById('submitBtn')
const inputs = document.getElementsByClassName('inputs')

let customer = {
    firstName : "",
    secondName : "",
    emailAdress : ""
}

submitBtn.addEventListener('click', isValid);

  function isValid (){
      if (firstName !== null && firstName.value.length >= 2 && 
        lastName !== null && lastName.value.length >= 2 &&
        emailAdress !== null && emailAdress.value.length >= 2) {
         alert('oké')
        } 
        alert("Hiba!")
    }
    


