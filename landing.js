$(function() { 
    $('#target').on('submit', function(e) { 
        e.preventDefault();  
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var formdata = {
        	contact:{
	        	name:name,
	        	email:email,
	        	message:message
	        }
        }
        var submit = $(this).find(":submit").attr('value','SENT');
        setTimeout(function() { $(submit).attr('value','SEND') }, 10000);
        $.ajax({
			    type: 'POST',
			    url: 'https://hidden-oasis-33636.herokuapp.com/api/v1/contacts',
			    data: formdata,
			    success: function(){
			      console.log("Email sent");
			    }
			})
    });
});

