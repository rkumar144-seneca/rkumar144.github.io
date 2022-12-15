// ==================== Code for responsive navbar ====================
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.nav-links');

// Making the navbar responsive using a menu icon
menu.addEventListener('click', function() {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

// The navbar should collapse on small screens when scrolled
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

function checkForm()
{
    
    if(checkAddress() &&  checkPostalCode() &&  checkMsg() &&   checkEmail())
        return true;
    else
        return false;

}

function checkAddress()
{
    let adr = document.forms["contactme"]["address"].value;
    if(adr.length<10)
    {
        alert("Address should be more than 10 characters ");
        return false;
    }
    else
    {
        return true;
    }

}

function checkPostalCode()
{
     let postalCode = document.forms["contactme"]["Pcode"].value;
    let validRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(validRegex))) 
    {
        alert("- Invalid Postal Code");
        return false;
    }
    else
    {
        return true
    }
    
}

function checkMsg()
{
    let m = document.forms["contactme"]["msg"].value;
    if(m.length<5)
    {
        alert("Message should be more than 5 characters ");
        return false;
    }
    else
    {
        return true;
    }

}

function checkEmail()
{
     const email = document.forms["contactme"]["email"].value;
    
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(validRegex))) 
        {
            messages.push("- Email Address is Invalid");
            return false;
        }
        else
        {
            return true
        }
        
       
}