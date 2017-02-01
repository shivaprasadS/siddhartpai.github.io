  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

$(function(){ 
  $('#submit').click(function(e) { 
   e.preventDefault();  
   var name = $('#last').val();
   var email = $('#notify-email').val();
   var message = $('#message').val();
   var formdata = {
    contact:{
      name:name,
      email:email,
      message:message
    }
  }
  $.ajax({
    type: 'POST',
    url: 'https://hidden-oasis-33636.herokuapp.com/api/v1/contacts',
    data: formdata,
    success: function(){
      console.log("Email sent");
    }
  })

     $(".submit").html('Sending..');
      setTimeout(function(){
      $(".submit").html('Send');
         
         },5000);

});
});

$(function(){ 
  $('.notify').click(function(e) { 
   e.preventDefault();  
   var name = "Notify me"
   var email = $('#notify-email').val();
   var message =  "Please send me latest updates on scapic."
   var formdata = {
    contact:{
      name:name,
      email:email,
      message:message
    }
  }

        
  $.ajax({
    type: 'POST',
    url: 'https://hidden-oasis-33636.herokuapp.com/api/v1/contacts',
    data: formdata,
    success: function(){
      console.log("Email Notification");
    }
  })

     $(".notify").html('Notifying Soon..');
      setTimeout(function(){
      $(".notify").html('Notify Me');
         },5000);
  
});
});

