$(document).ready(function(){
	$(".contactForm").submit(function(){

	var str = $(this).serialize();

		$.ajax({
		type: "POST",
		url: "contact.php",
		data: str,
		success: function(msg){

			if(msg == 'OK') {
				alert('Thank you!');
			} else {
				alert('error');
			}

	    
			// $("#note").ajaxComplete(function(event, request, settings){

			// 	if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
			// 	{
			// 		alert('Your message has been sent Succesfully. Thank you!!!');
			// 		$("#fields").hide();
			// 	}
			// 	else
			// 	{
			// 		alert(msg);
			// 	}

			// 	$(this).hide();
			// 	$(this).html(result).slideDown("slow");

			// 	$(this).html(result);

			// });

		}

	});

	return false;

	});

});
