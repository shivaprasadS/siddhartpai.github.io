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
        textchange();
        var submit = $(this).find(":submit").attr('value','SENDING...');
        $.ajax({
			    type: 'POST',
			    url: 'https://hidden-oasis-33636.herokuapp.com/api/v1/contacts',
			    data: formdata,
			    success: function(){
			      textchange();
			    }
			})
        function textchange(){
            setTimeout(function() { 
                $(submit).attr('value','SENT');
                $(submit).css({ background: "#ee5050",color:"#fff"}); 
                $("#target")[0].reset();
            }, 5000);
        }
    });
});

