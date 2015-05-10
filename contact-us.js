$(document).ready(function(){
	var count = 1;

	$(".icon-menu").click(function(){
		console.log("here")

		if(count == 1){
			$("nav").animate({
				left: "0"
			});
			count= 0;
		}else{
			count= 1;
			$("nav").animate({
				left: "-100%"
			});
		}
	  }); 


			$( "form" ).submit(function( event ) {
		  if ( $( "input:first" ).val() === "correct" ) {
		    $( "not-valid" ).text( "Validated..." ).show();
		    return;

		  }else{
		  	alert("Thank you")
		  }

		 
		
		  $( "#not-valid" ).text( "Not valid!" ).show().fadeOut( 1000 );
		  event.preventDefault();
			
		});



	 }); 
