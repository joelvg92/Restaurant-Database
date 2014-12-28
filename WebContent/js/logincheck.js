$(document).ready(function(){
	$('#inputuser,#inputPassword').keyup(function(){
        if ($('#inputuser').val() == '' || $('#inputPassword').val() == '') {
             $('#login').prop('disabled', true);
        } else {
             $('#login').prop('disabled', false);
        }
   });

})	
