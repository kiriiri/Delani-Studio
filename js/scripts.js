$(document).ready(function() {
    $('.clickable').click(function() {
        $('.design-description').slideToggle();
        $('.design-icon').slideToggle();
    });
    $('.clickable1').click(function() {
        $('.development-description').slideToggle();
        $('.development-icon').slideToggle();
    });
    $('.clickable2').click(function () {
        $('.product-description').slideToggle();
        $('.product-icon').slideToggle();
    });  
    
});
document.addEventListener('DOMContentLoaded',function() {
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault()
    })
});
function submitData() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("e-mail").value;
    var message=document.getElementById("message").value;
    if(name === "") {
        document.getElementById("name").innerText="Enter your name please"
        document.getElementById("error").style.color="red"
    }else if(email ==="") {
        document.getElementById("email").innerText="Enter your E-mail please"
        document.getElementById("errro1").style.color="red"
    }else if(message==="") {
        document.getElementById("message").innerText="Enter your message please"
        document.getElementById("error2").style.color="red"
    }else {
        document.getElementById("contact-us").innerHTML="Thanks for the feedback"
    }
}
