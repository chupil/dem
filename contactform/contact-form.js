$(function(){
   $('#contact-form button[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/chupil87@gmail.com", 
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                subject:$('#subject').val(),
                message: $('#message').val()
            },
            dataType: "json"
        })
         .done( () => $('#sendmessage').addClass("show") )
         .fail( () => $('#errormessage').addClass("show") ); 
    }
}
