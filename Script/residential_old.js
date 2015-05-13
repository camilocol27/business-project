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

	console.log(location);
	console.log(price);

	if(location === cg && price === firstRange && bed === twoPlus && bath === two) {
		console.log("hide mb");
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .cg .overFiveHundredThousand .oneBed .oneBath").css("display","none");
		$(".cg .overFiveHundredThousand, .cg .overFiveHundredThousand .twoBed .twoBath, .cg .overFiveHundredThousand .threeBed .threeBath, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}else 
	if(location === cg && price === firstRange && bed === twoPlus && bath === one) {
		console.log("hide mb");
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .cg .overFiveHundredThousand .oneBed").css("display","none");
		$(".cg .overFiveHundredThousand, cg .overFiveHundredThousand .twoBed .oneBath, .cg .overFiveHundredThousand .twoBed .twoBath, .cg .overFiveHundredThousand .threeBed .threeBath, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}else 
	if(location === cg && price === firstRange && bed === twoPlus && bath === three) {
		console.log("hide mb");
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .cg .overFiveHundredThousand .oneBed .oneBath,  .cg .overFiveHundredThousand .oneBed .twoBath").css("display","none");
		$(".cg .overFiveHundredThousand, .cg .overFiveHundredThousand .twoBed .twoBath, .cg .overFiveHundredThousand .threeBed .threeBath, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}else 
	if(location === cg && price === firstRange && bed === twoPlus && bath === four) {
		console.log("hide mb");
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .cg .overFiveHundredThousand .oneBed .oneBath,  .cg .overFiveHundredThousand .oneBed .twoBath, .cg .overFiveHundredThousand .oneBed .threeBath, .cg .overFiveHundredThousand .twoBed .oneBath, .cg .overFiveHundredThousand .twoBed .twoBath").css("display","none");
		$(".cg .overFiveHundredThousand, .cg .overFiveHundredThousand .twoBed .fourBath,, .cg .overFiveHundredThousand .twoBed .twoBath, .cg .overFiveHundredThousand .threeBed .threeBath, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}



	else if(location === cg && price === secondRange && bed === twoPlus && bath === two) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion, .cg .overSevenFiftyThousand .oneBed .oneBath").css("display","none");
		$(".cg .overSevenFiftyThousand, .cg .overSevenFiftyThousand .twoBed .twoBath, .cg .overSevenFiftyThousand .threeBed .threeBath, .cg .overSevenFiftyThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === thirdRange && bed === twoPlus && bath === two) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand, .cg .overOneMillion .oneBed .oneBath").css("display","none");
		$(".cg .overOneMillion, .cg .overOneMillion .twoBed, .cg .overOneMillion .threeBed .threeBath, .cg .overOneMillion .fourBed .fourBath").css("display","block");
	}else 

	if(location === cg && price === firstRange && bed === threePlus && bath === three) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .cg .overFiveHundredThousand .oneBed .oneBath, .cg .overFiveHundredThousand .twoBed .twoBath").css("display","none");
		$(".cg .overFiveHundredThousand, .cg .overFiveHundredThousand .threeBed .threeBath, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === secondRange && bed === threePlus && bath === three) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion, .cg .overSevenFiftyThousand .oneBed .oneBath, .cg .overSevenFiftyThousand .twoBed .twoBath").css("display","none");
		$(".cg .overSevenFiftyThousand, .cg .overSevenFiftyThousand .threeBed .threeBath, .cg .overSevenFiftyThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === thirdRange && bed === threePlus && bath === three) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand, .cg .overOneMillion .oneBed .oneBath, .cg .overOneMillion .twoBed .twoBath").css("display","none");
		$(".cg .overOneMillion, .cg .overOneMillion .threeBed .threeBath, .cg .overOneMillion .fourBed .fourBath").css("display","block");

	}else 

	if(location === cg && price === firstRange && bed === fourPlus && bath === four) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .cg .overFiveHundredThousand .oneBed .oneBath, .cg .overFiveHundredThousand .twoBed .twoBath, .cg .overFiveHundredThousand .threeBed .threeBath").css("display","none");
		$(".cg .overFiveHundredThousand, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === secondRange && bed === fourPlus && bath === four) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion, .cg .overSevenFiftyThousand .oneBed .oneBath, .cg .overSevenFiftyThousand .twoBed .twoBath, .cg .overSevenFiftyThousand .threeBed .threeBath").css("display","none");
		$(".cg .overSevenFiftyThousand, .cg .overSevenFiftyThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === thirdRange && bed === fourPlus && bath === four) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand, .cg .overOneMillion .oneBed .oneBath, .cg .overOneMillion .twoBed .twoBath, .cg .overOneMillion .threeBed .threeBath").css("display","none");
		$(".cg .overOneMillion, .cg .overOneMillion .fourBed .fourBath").css("display","block");

	}else 

	if(location === cg && price === firstRange && bed === onePlus && bath === one) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion").css("display","none");
		$(".cg .overFiveHundredThousand, .cg .overFiveHundredThousand .oneBed .oneBath, .cg .overFiveHundredThousand .twoBed .twoBath, .cg .overFiveHundredThousand .threeBed .threeBath, .cg .overFiveHundredThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === secondRange && bed === onePlus && bath === one) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion").css("display","none");
		$(".cg .overSevenFiftyThousand, .cg .overSevenFiftyThousand .oneBed .oneBath, .cg .overSevenFiftyThousand .twoBed .twoBath, .cg .overSevenFiftyThousand .threeBed .threeBath, .cg .overSevenFiftyThousand .fourBed .fourBath").css("display","block");
	}else if(location === cg && price === thirdRange && bed === onePlus && bath === one) {
		console.log("hide mb"),
		$(".mb").css("display","none");
		$(".cg").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand").css("display","none");
		$(".cg .overOneMillion, .cg .overOneMillion .oneBed .oneBath, .cg .overOneMillion .twoBed .twoBath, .cg .overOneMillion .threeBed .threeBath, .cg .overOneMillion .fourBed .fourBath").css("display","block");

	}


	if(location === mb && price === firstRange && bed === twoPlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .oneBed").css("display","none");
		$(".mb .overFiveHundredThousand, .twoBed, .threeBed, .fourBed").css("display","block");
	}else if(location === mb && price === secondRange && bed === twoPlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion, .oneBed").css("display","none");
		$(".mb .overSevenFiftyThousand, .mb .overSevenFiftyThousand .twoBed, .mb .overSevenFiftyThousand .threeBed, .mb .overSevenFiftyThousand .fourBed").css("display","block");
	}else if(location === mb && price === thirdRange && bed === twoPlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand, .oneBed").css("display","none");
		$(".mb .overOneMillion, .mb .overOneMillion .twoBed, .mb .overOneMillion .threeBed, .mb .overOneMillion .fourBed").css("display","block");
	}else
	if(location === mb && price === firstRange && bed === threePlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .oneBed, .twoBed").css("display","none");
		$(".mb .overFiveHundredThousand, .mb .overFiveHundredThousand .threeBed, .mb .overFiveHundredThousand .fourBed").css("display","block");
	}else if(location === mb && price === secondRange && bed === threePlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion, .oneBed, .twoBed").css("display","none");
		$(".mb .overSevenFiftyThousand, .mb .overSevenFiftyThousand .threeBed, .mb .overSevenFiftyThousand .fourBed").css("display","block");
	}else if(location === mb && price === thirdRange && bed === threePlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand, .oneBed, .twoBed").css("display","none");
		$(".mb .overOneMillion, .mb .overOneMillion .threeBed, .mb .overOneMillion .fourBed").css("display","block");
	}else
	if(location === mb && price === firstRange && bed === fourPlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion, .oneBed, .twoBed, .threeBed").css("display","none");
		$(".mb .overFiveHundredThousand, .mb .overFiveHundredThousand .fourBed").css("display","block");
	}else if(location === mb && price === secondRange && bed === fourPlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion, .oneBed, .twoBed, .threeBed").css("display","none");
		$(".mb .overSevenFiftyThousand, .mb .overSevenFiftyThousand .fourBed").css("display","block");
	}else if(location === mb && price === thirdRange && bed === fourPlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand, .oneBed, .twoBed, .threeBed").css("display","none");
		$(".mb .overOneMillion, .mb .overOneMillion .fourBed").css("display","block");
	}else
	if(location === mb && price === firstRange && bed === onePlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overSevenFiftyThousand, .overOneMillion").css("display","none");
		$(".mb .overFiveHundredThousand, .mb .overFiveHundredThousand .oneBed, .mb .overFiveHundredThousand .twoBed, .mb .overFiveHundredThousand .threeBed, .mb .overFiveHundredThousand .fourBed").css("display","block");
	}else if(location === mb && price === secondRange && bed === onePlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overOneMillion").css("display","none");
		$(".mb .overSevenFiftyThousand, .mb .overSevenFiftyThousand .oneBed, .mb .overSevenFiftyThousand .twoBed, .mb .overSevenFiftyThousand, .mb .overSevenFiftyThousand .threeBed, .mb .overSevenFiftyThousand .fourBed").css("display","block");
	}else if(location === mb && price === thirdRange && bed === onePlus) {
		console.log("hide cg"),
		$(".cg").css("display","none");
		$(".mb").css("display","block");

		$(".overFiveHundredThousand, .overSevenFiftyThousand").css("display","none");
		$(".mb .overOneMillion, .mb .overOneMillion .oneBed, .mb .overOneMillion .twoBed, .mb .overOneMillion .threeBed, .mb .overOneMillion .fourBed").css("display","block");
	}



};

function showAll() {
	var location = document.getElementById('location').value;
	var cg = "Coral Gables";
	var mb = "Miami Beach";

	$(".cg").css("display","block");
	$(".mb").css("display","block");

};

/*
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
	if(location === cg && price === firstRange && bed === "1" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
	}else
	if(location === cg && price === firstRange && bed === "1" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath").css("display","none");
	} else
	if(location === cg && price === firstRange && bed === "1" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		$(".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath").css("display","none");
		

	} else
	if(location === cg && price === firstRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		
		$(".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","none");
		

	} else
	if(location === cg && price === firstRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		$(".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath").css("display","none");
		
	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		
		$(".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath").css("display","none");
	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		
		$(".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath").css("display","none");
		

	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		
		$(".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","none");
		

	} else
	if(location === cg && price === firstRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");
		
		
		$(".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath").css("display","none");
		
	} 

	  else
	if(location === cg && price === firstRange && bed === "3" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		
	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
	    $(".cg .house .overFiveHundredThousand .threeBed .oneBath").css("display", "none");
	    $(".cg .house .overFiveHundredThousand .fourBed .oneBath").css("display", "none");

	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath").css("display","none");

	} else
	if(location === cg && price === firstRange && bed === "3" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath").css("display","none");
		
	} else
	if(location === cg && price === firstRange && bed === "4" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","none");
		
} else
	if(location === cg && price === firstRange && bed === "4" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath").css("display", "none"); 

} else
	if(location === cg && price === firstRange && bed === "4" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath").css("display","none");

} else
	if(location === cg && price === firstRange && bed === "4" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .fourBed .fourBath", ".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath").css("display","none");

} else
	if(location === cg && price === firstRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overSevenFiftyThousand").css("display", "none");
		$("overOneMillion").css("display","none");

		$(".cg .house .overFiveHundredThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overFiveHundredThousand .oneBed .oneBath", ".cg .house .overFiveHundredThousand .oneBed .twoBath", ".cg .house .overFiveHundredThousand .oneBed .threeBath", ".cg .house .overFiveHundredThousand .oneBed .fourBath", ".cg .house .overFiveHundredThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .twoBed .oneBath", ".cg .house .overFiveHundredThousand .twoBed .twoBath", ".cg .house .overFiveHundredThousand .twoBed .threeBath", ".cg .house .overFiveHundredThousand .twoBed .fourBath", ".cg .house .overFiveHundredThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .threeBed .oneBath", ".cg .house .overFiveHundredThousand .threeBed .twoBath", ".cg .house .overFiveHundredThousand .threeBed .threeBath", ".cg .house .overFiveHundredThousand .threeBed .fourBath", ".cg .house .overFiveHundredThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overFiveHundredThousand .fourBed .oneBath", ".cg .house .overFiveHundredThousand .fourBed .twoBath", ".cg .house .overFiveHundredThousand .fourBed .threeBath", ".cg .house .overFiveHundredThousand .fourBed .fourBath").css("display","none");
				
} else
	//Start second range
	if(location === cg && price === secondRange && bed === "1" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
	}else
	if(location === cg && price === secondRange && bed === "1" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath").css("display","none");
	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath").css("display","none");
		

	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		
		$(".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","none");
		

	} else
	if(location === cg && price === secondRange && bed === "1" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath").css("display","none");
		
	}  else
	if(location === cg && price === secondRange && bed === "2" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		
	}else
	if(location === cg && price === secondRange && bed === "2" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		
		$(".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath").css("display","none");
	} else
	if(location === cg && price === secondRange && bed === "2" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		
		$(".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath").css("display","none");
		

	} else
	if(location === cg && price === secondRange && bed === "2" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		
		$(".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","none");
		

	} else
	if(location === cg && price === secondRange && bed === "2" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");
		
		
		$(".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath").css("display","none");
		
	} 


	 else
	if(location === cg && price === secondRange && bed === "3" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
	
	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
	    $(".cg .house .overSevenFiftyThousand .threeBed .oneBath").css("display", "none");
	    $(".cg .house .overSevenFiftyThousand .fourBed .oneBath").css("display", "none");

	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath").css("display","none");
	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath").css("display","none");

	} else
	if(location === cg && price === secondRange && bed === "3" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","block");
		$(".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath").css("display","none");
		
	} 

	else
	if(location === cg && price === secondRange && bed === "4" && bath === "1" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","none");
		
}else
	if(location === cg && price === secondRange && bed === "4" && bath === "2" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath").css("display", "none"); 

} else
	if(location === cg && price === secondRange && bed === "4" && bath === "3" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath").css("display","none");

} else
	if(location === cg && price === secondRange && bed === "4" && bath === "4" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .fourBed .fourBath", ".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand.twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath").css("display","none");

} else
	if(location === cg && price === secondRange && bed === "4" && bath === "5" && type === "Single Family Home") {
		$(".condo").css("display", "none");
		$(".mb").css("display", "none");
		$(".overFiveHundredThousand").css("display", "none");
		$(".overOneMillion").css("display","none");

		$(".cg .house .overSevenFiftyThousand .fourBed .fiveBath").css("display","block");
		
		
		$(".cg .house .overSevenFiftyThousand .oneBed .oneBath", ".cg .house .overSevenFiftyThousand .oneBed .twoBath", ".cg .house .overSevenFiftyThousand .oneBed .threeBath", ".cg .house .overSevenFiftyThousand .oneBed .fourBath", ".cg .house .overSevenFiftyThousand .oneBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .twoBed .oneBath", ".cg .house .overSevenFiftyThousand .twoBed .twoBath", ".cg .house .overSevenFiftyThousand .twoBed .threeBath", ".cg .house .overSevenFiftyThousand .twoBed .fourBath", ".cg .house .overSevenFiftyThousand .twoBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .threeBed .oneBath", ".cg .house .overSevenFiftyThousand .threeBed .twoBath", ".cg .house .overSevenFiftyThousand .threeBed .threeBath", ".cg .house .overSevenFiftyThousand .threeBed .fourBath", ".cg .house .overSevenFiftyThousand .threeBed .fiveBath").css("display","none");
		$(".cg .house .overSevenFiftyThousand .fourBed .oneBath", ".cg .house .overSevenFiftyThousand .fourBed .twoBath", ".cg .house .overSevenFiftyThousand .fourBed .threeBath", ".cg .house .overSevenFiftyThousand .fourBed .fourBath").css("display","none");
				
} 

}*/