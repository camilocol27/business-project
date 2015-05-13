function showAll() {
	var location = document.getElementById('location').value;
	var cg = "Coral Gables";
	var mb = "Miami Beach";
	console.log("Reset and show all.")

	$(".cg").css("display","block");
	$(".mb").css("display","block");

};

function filter() {
	var location = document.getElementById('location').value;
	var cg = "Coral Gables";
	var mb = "Miami Beach";

	var price = document.getElementById('price').value;
	var firstRange = "$500K-$749,999";
	var secondRange = "$750K-$999,999";
	var thirdRange = "$1M-$1.5M";

	var bed = document.getElementById('bed').value;
	var onePlus = "1";
	var twoPlus = "2";
	var threePlus = "3";
	var fourPlus = "4";

	var bath = document.getElementById('bath').value;
	var one = "1";
	var two = "2";
	var three = "3";
	var four = "4";

	var type = document.getElementById('type').value;

	console.log(location);
	console.log(price);


	if((location === cg && price === firstRange && bed === "1" && bath === "1" && type === "Condo") || (location === cg && price === firstRange && bed === "1" && bath === "2" && type === "Condo") || (location === cg && price === firstRange && bed === "1" && bath === "3" && type === "Condo") || (location === cg && price === firstRange && bed === "1" && bath === "4" && type === "Condo") || (location === cg && price === firstRange && bed === "1" && bath === "5" && type === "Condo") || (location === cg && price === firstRange && bed === "2" && bath === "1" && type === "Condo")  || (location === cg && price === firstRange && bed === "2" && bath === "2" && type === "Condo") || (location === cg && price === firstRange && bed === "2" && bath === "3" && type === "Condo") || (location === cg && price === firstRange && bed === "2" && bath === "4" && type === "Condo") || (location === cg && price === firstRange && bed === "2" && bath === "5" && type === "Condo") || (location === cg && price === firstRange && bed === "3" && bath === "1" && type === "Condo") || (location === cg && price === firstRange && bed === "3" && bath === "2" && type === "Condo") || (location === cg && price === firstRange && bed === "3" && bath === "3" && type === "Condo") || (location === cg && price === firstRange && bed === "3" && bath === "4" && type === "Condo") || (location === cg && price === firstRange && bed === "3" && bath === "5" && type === "Condo") || (location === cg && price === firstRange && bed === "4" && bath === "1" && type === "Condo") || (location === cg && price === firstRange && bed === "4" && bath === "2" && type === "Condo") || (location === cg && price === firstRange && bed === "4" && bath === "3" && type === "Condo") || (location === cg && price === firstRange && bed === "4" && bath === "4" && type === "Condo") || (location === cg && price === firstRange && bed === "4" && bath === "5" && type === "Condo") || (location === cg && price === firstRange && bed === "5" && bath === "1" && type === "Condo") || (location === cg && price === firstRange && bed === "5" && bath === "2" && type === "Condo") || (location === cg && price === firstRange && bed === "5" && bath === "3" && type === "Condo") || (location === cg && price === firstRange && bed === "5" && bath === "4" && type === "Condo") || (location === cg && price === firstRange && bed === "5" && bath === "5" && type === "Condo") ||
	   (location === cg && price === secondRange && bed === "1" && bath === "1" && type === "Condo") || (location === cg && price === secondRange && bed === "1" && bath === "2" && type === "Condo") || (location === cg && price === secondRange && bed === "1" && bath === "3" && type === "Condo") || (location === cg && price === secondRange && bed === "1" && bath === "4" && type === "Condo") || (location === cg && price === secondRange && bed === "1" && bath === "5" && type === "Condo") || (location === cg && price === secondRange && bed === "2" && bath === "1" && type === "Condo")  || (location === cg && price === secondRange && bed === "2" && bath === "2" && type === "Condo") || (location === cg && price === secondRange && bed === "2" && bath === "3" && type === "Condo") || (location === cg && price === secondRange && bed === "2" && bath === "4" && type === "Condo") || (location === cg && price === secondRange && bed === "2" && bath === "5" && type === "Condo") || (location === cg && price === secondRange && bed === "3" && bath === "1" && type === "Condo") || (location === cg && price === secondRange && bed === "3" && bath === "2" && type === "Condo") || (location === cg && price === secondRange && bed === "3" && bath === "3" && type === "Condo") || (location === cg && price === secondRange && bed === "3" && bath === "4" && type === "Condo") || (location === cg && price === secondRange && bed === "3" && bath === "5" && type === "Condo") || (location === cg && price === secondRange && bed === "4" && bath === "1" && type === "Condo") || (location === cg && price === secondRange && bed === "4" && bath === "2" && type === "Condo") || (location === cg && price === secondRange && bed === "4" && bath === "3" && type === "Condo") || (location === cg && price === secondRange && bed === "4" && bath === "4" && type === "Condo") || (location === cg && price === secondRange && bed === "4" && bath === "5" && type === "Condo") || (location === cg && price === secondRange && bed === "5" && bath === "1" && type === "Condo") || (location === cg && price === secondRange && bed === "5" && bath === "2" && type === "Condo") || (location === cg && price === secondRange && bed === "5" && bath === "3" && type === "Condo") || (location === cg && price === secondRange && bed === "5" && bath === "4" && type === "Condo") || (location === cg && price === secondRange && bed === "5" && bath === "5" && type === "Condo") ||
	   (location === cg && price === thirdRange && bed === "1" && bath === "1" && type === "Condo") || (location === cg && price === thirdRange && bed === "1" && bath === "2" && type === "Condo") || (location === cg && price === thirdRange && bed === "1" && bath === "3" && type === "Condo") || (location === cg && price === thirdRange && bed === "1" && bath === "4" && type === "Condo") || (location === cg && price === thirdRange && bed === "1" && bath === "5" && type === "Condo") || (location === cg && price === thirdRange && bed === "2" && bath === "1" && type === "Condo")  || (location === cg && price === thirdRange && bed === "2" && bath === "2" && type === "Condo") || (location === cg && price === thirdRange && bed === "2" && bath === "3" && type === "Condo") || (location === cg && price === thirdRange && bed === "2" && bath === "4" && type === "Condo") || (location === cg && price === thirdRange && bed === "2" && bath === "5" && type === "Condo") || (location === cg && price === thirdRange && bed === "3" && bath === "1" && type === "Condo") || (location === cg && price === thirdRange && bed === "3" && bath === "2" && type === "Condo") || (location === cg && price === thirdRange && bed === "3" && bath === "3" && type === "Condo") || (location === cg && price === thirdRange && bed === "3" && bath === "4" && type === "Condo") || (location === cg && price === thirdRange && bed === "3" && bath === "5" && type === "Condo") || (location === cg && price === thirdRange && bed === "4" && bath === "1" && type === "Condo") || (location === cg && price === thirdRange && bed === "4" && bath === "2" && type === "Condo") || (location === cg && price === thirdRange && bed === "4" && bath === "3" && type === "Condo") || (location === cg && price === thirdRange && bed === "4" && bath === "4" && type === "Condo") || (location === cg && price === thirdRange && bed === "4" && bath === "5" && type === "Condo") || (location === cg && price === thirdRange && bed === "5" && bath === "1" && type === "Condo") || (location === cg && price === thirdRange && bed === "5" && bath === "2" && type === "Condo") || (location === cg && price === thirdRange && bed === "5" && bath === "3" && type === "Condo") || (location === cg && price === thirdRange && bed === "5" && bath === "4" && type === "Condo") || (location === cg && price === thirdRange && bed === "5" && bath === "5" && type === "Condo")) {

		console.log("Condo only, no results available.");
	
		$(".mb").css("display", "none");
		$(".cg").css("display","block");
		$(".house").css("display", "none");

		alert("Sorry, your search returned no results. No condo's listed in Coral Gables. Try another search.")
	} else
		//Start Coral Gables Location only Filters
		//Start Single Family Home Only Filters
		//Start First Range
	if(location === cg && price === firstRange && bed === "1" && bath === "1" && type === "Single Family Home") {
				
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		


		

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}else
	if(location === cg && price === firstRange && bed === "1" && bath === "2" && type === "Single Family Home") {
				
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "1" && bath === "3" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === cg && price === firstRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === cg && price === firstRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}  else
	if(location === cg && price === firstRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	}else
	if(location === cg && price === firstRange && bed === "2" && bath === "2" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "3" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} 


	 else
	if(location === cg && price === firstRange && bed === "3" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} 

	else
	if(location === cg && price === firstRange && bed === "4" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
} else
	if(location === cg && price === firstRange && bed === "4" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

} else
	if(location === cg && price === firstRange && bed === "4" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


} else
	if(location === cg && price === firstRange && bed === "4" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

} else
	if(location === cg && price === firstRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
} 
 else
	//Start second range
	if(location === cg && price === secondRange && bed === "1" && bath === "1" && type === "Single Family Home") {
				
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "2" && type === "Single Family Home") {
				
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "3" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");


	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}  else
	if(location === cg && price === secondRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	}else
	if(location === cg && price === secondRange && bed === "2" && bath === "2" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "2" && bath === "3" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} 


	 else
	if(location === cg && price === secondRange && bed === "3" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} 

	else
	if(location === cg && price === secondRange && bed === "4" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
} else
	if(location === cg && price === secondRange && bed === "4" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

} else
	if(location === cg && price === secondRange && bed === "4" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


} else
	if(location === cg && price === secondRange && bed === "4" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

} else
	if(location === cg && price === secondRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

} else
	//Start third range
	if(location === cg && price === thirdRange && bed === "1" && bath === "1" && type === "Single Family Home") {
				
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block");
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "1" && bath === "2" && type === "Single Family Home") {
				
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "1" && bath === "3" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === cg && price === thirdRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === cg && price === thirdRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	}  else
	if(location === cg && price === thirdRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
		
	} else
	if(location === cg && price === thirdRange && bed === "2" && bath === "2" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "2" && bath === "3" && type === "Single Family Home") {
			
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 


	 else
	if(location === cg && price === thirdRange && bed === "3" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "3" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "3" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === cg && price === thirdRange && bed === "3" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === cg && price === thirdRange && bed === "3" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 

	else
	if(location === cg && price === thirdRange && bed === "4" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
} else
	if(location === cg && price === thirdRange && bed === "4" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

} else
	if(location === cg && price === thirdRange && bed === "4" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


} else
	if(location === cg && price === thirdRange && bed === "4" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

} else
	if(location === cg && price === thirdRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		
		$(".condo").css("display", "none");
		$(".cg").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

}else
	//Start Miami Beach location only Filters
	//Start Single Family Home Only Filters
	//Start first Range
	if(location === mb && price === firstRange && bed === "1" && bath === "1" && type === "Single Family Home") {
				
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "2" && type === "Single Family Home") {
				
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "3" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}  else
	if(location === mb && price === firstRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "2" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "3" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "1" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "2" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "3" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "4" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "5" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} 

	else
	if(location === mb && price === firstRange && bed === "4" && bath === "1" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	}else
	if(location === mb && price === firstRange && bed === "4" && bath === "2" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "4" && bath === "3" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === firstRange && bed === "4" && bath === "4" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	} 
 	else
	//Start second range
	if(location === mb && price === secondRange && bed === "1" && bath === "1" && type === "Single Family Home") {
				
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}else
	if(location === mb && price === secondRange && bed === "1" && bath === "2" && type === "Single Family Home") {
				
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "1" && bath === "3" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === secondRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");


	} else
	if(location === mb && price === secondRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}  else
	if(location === mb && price === secondRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	}else
	if(location === mb && price === secondRange && bed === "2" && bath === "2" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "2" && bath === "3" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} 


	 else
	if(location === mb && price === secondRange && bed === "3" && bath === "1" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "2" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "3" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "4" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "5" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} 

	else
	if(location === mb && price === secondRange && bed === "4" && bath === "1" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	}else
	if(location === mb && price === secondRange && bed === "4" && bath === "2" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "4" && bath === "3" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === secondRange && bed === "4" && bath === "4" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	//Start third range
	if(location === mb && price === thirdRange && bed === "1" && bath === "1" && type === "Single Family Home") {
				
		$(".mb").css("display","block"); 
		$(".house").css("display","block");
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	}else
	if(location === mb && price === thirdRange && bed === "1" && bath === "2" && type === "Single Family Home") {
				
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "1" && bath === "3" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === mb && price === thirdRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === mb && price === thirdRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	}  else
	if(location === mb && price === thirdRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
		
	}else
	if(location === mb && price === thirdRange && bed === "2" && bath === "2" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "2" && bath === "3" && type === "Single Family Home") {
			
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 


	 else
	if(location === mb && price === thirdRange && bed === "3" && bath === "1" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "2" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "3" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "4" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "5" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 

	else
	if(location === mb && price === thirdRange && bed === "4" && bath === "1" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
	}else
	if(location === mb && price === thirdRange && bed === "4" && bath === "2" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "4" && bath === "3" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === mb && price === thirdRange && bed === "4" && bath === "4" && type === "Single Family Home") {

		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		
		$(".mb").css("display","block"); 
		$(".house").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".cg").css("display", "none");
		$(".condo").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	//Start Miami Beach location only Filters
	//Start Condo Only Filters
	//Start first Range
	if(location === mb && price === firstRange && bed === "1" && bath === "1" && type === "Condo") {
				
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "2" && type === "Condo") {
				
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "3" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "4" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === firstRange && bed === "1" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}  else
	if(location === mb && price === firstRange && bed === "2" && bath === "1" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "2" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "3" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "4" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "2" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "1" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "2" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "3" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "4" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === mb && price === firstRange && bed === "3" && bath === "5" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} 

	else
	if(location === mb && price === firstRange && bed === "4" && bath === "1" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	}else
	if(location === mb && price === firstRange && bed === "4" && bath === "2" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "4" && bath === "3" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === firstRange && bed === "4" && bath === "4" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === firstRange && bed === "4" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overFiveHundredThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	} 
 	else
	//Start second range
	if(location === mb && price === secondRange && bed === "1" && bath === "1" && type === "Condo") {
				
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}else
	if(location === mb && price === secondRange && bed === "1" && bath === "2" && type === "Condo") {
				
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "1" && bath === "3" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === secondRange && bed === "1" && bath === "4" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");


	} else
	if(location === mb && price === secondRange && bed === "1" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	}  else
	if(location === mb && price === secondRange && bed === "2" && bath === "1" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
	}else
	if(location === mb && price === secondRange && bed === "2" && bath === "2" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "2" && bath === "3" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "2" && bath === "4" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "2" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} 


	 else
	if(location === mb && price === secondRange && bed === "3" && bath === "1" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "2" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "3" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "4" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		alert("Sorry, your search returned no results. Try another search.");

	} else
	if(location === mb && price === secondRange && bed === "3" && bath === "5" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	} 

	else
	if(location === mb && price === secondRange && bed === "4" && bath === "1" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
	}else
	if(location === mb && price === secondRange && bed === "4" && bath === "2" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "4" && bath === "3" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");


	} else
	if(location === mb && price === secondRange && bed === "4" && bath === "4" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	if(location === mb && price === secondRange && bed === "4" && bath === "5" && type === "Condo") {
		

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overSevenFiftyThousand").css("display","block");

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

	} else
	//Start third range
	if(location === mb && price === thirdRange && bed === "1" && bath === "1" && type === "Condo") {
				
		$(".mb").css("display","block"); 
		$(".condo").css("display","block");
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	}else
	if(location === mb && price === thirdRange && bed === "1" && bath === "2" && type === "Condo") {
				
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "1" && bath === "3" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === mb && price === thirdRange && bed === "1" && bath === "4" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === mb && price === thirdRange && bed === "1" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".oneBed").css("display","block");
		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		

		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	}  else
	if(location === mb && price === thirdRange && bed === "2" && bath === "1" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
	

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
		
	}else
	if(location === mb && price === thirdRange && bed === "2" && bath === "2" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "2" && bath === "3" && type === "Condo") {
			
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "2" && bath === "4" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "2" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".twoBed").css("display","block");
		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 


	 else
	if(location === mb && price === thirdRange && bed === "3" && bath === "1" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "2" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "3" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "4" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "3" && bath === "5" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		$(".threeBed").css("display","block");	
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");
		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");

		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 

	else
	if(location === mb && price === thirdRange && bed === "4" && bath === "1" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".oneBath").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");
	}else
	if(location === mb && price === thirdRange && bed === "4" && bath === "2" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".twoBath").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");

		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "4" && bath === "3" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".threeBath").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");


	} else
	if(location === mb && price === thirdRange && bed === "4" && bath === "4" && type === "Condo") {

		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fourBath").css("display","block");	
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} else
	if(location === mb && price === thirdRange && bed === "4" && bath === "5" && type === "Condo") {
		
		$(".mb").css("display","block"); 
		$(".condo").css("display","block"); 
		$(".overOneMillion").css("display","block"); 

		
		$(".fourBed").css("display","block");
		$(".fiveBed").css("display","block");
		$(".fiveBath").css("display","block");

		
		$(".oneBed").css("display","none");
		$(".twoBed").css("display","none");
		$(".threeBed").css("display","none");
		$(".oneBath").css("display","none");
		$(".twoBath").css("display","none");
		$(".threeBath").css("display","none");
		$(".fourBath").css("display","none");	
		
		$(".cg").css("display", "none");
		$(".house").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overSevenFiftyThousand").css("display","none");

	} 


}