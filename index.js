// navigation

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

    // Activate Carousel
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
    
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });



    $('#myAffix').affix({
      offset: {
        top: 100,
        bottom: function () {
          return (this.bottom = $('.footer').outerHeight(true))
        }
      }
    })
 
        // enlarge pictures

        $(".box-one").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });
     


        $("header").on("contextmenu", ".enlarged-image", function() {
          return false;
        });

        $(".box-two").click(function() {
          $("header").css("overflow", "hidden");
          $(".lightbox .enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });


       $(".box-three").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });

             $(".box-four").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });
     
          $(".box-five").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });

             $(".box-six").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });
     
          $(".box-seven").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });

             $(".box-eight").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });
     
          $(".box-nine").click(function() {
          $("header").css("overflow", "hidden");
          $(".enlarged-image").attr("src", $(this).attr("src"));
          $(".lightbox").show();
        });

        $(".icon-squered-cross").click(function() {
          $("header").css("overflow", "");
          $(".lightbox .enlarged-image").attr("src", "");
          $(".lightbox").hide();
        });


   });






