
//  Variables

var crystalNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var crystalImages = ["./assets/images/cr-Blue.png", "./assets/images/cr-red.png", "./assets/images/cr-yellow.png", "./assets/images/cr-brown.png"];

// Functions -Random Number

	function randomcrystalNumber () {
		crystalNumber = Math.floor(Math.random() * 102) + 19;
	}
// function Crystal Image diplay and set Random number
	function setcrystalImage () {
		$.each(crystalImages, function(index, value) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", value);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "150");
			$(".crystal-images").append(crystal);
		});
		
	}
// Functions -Display contains in the web page

	function dispaly () {
		$(".crystal-number-box").html("<p>Random Crystal Number: <br><b>" + crystalNumber + "</b></p>");
		$(".win-lose-box").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number-box").html("<p> Your Crystal Count: <br><b>" + counter + "<b></p>");
		$(".crystal-images").empty();
	}

	function allReset () {
		randomcrystalNumber ();
		counter = 0;
		dispaly();
		setcrystalImage ();
	}

// Running Code

	// Inital Page Set Up - when load page
	randomcrystalNumber();
	dispaly();
	setcrystalImage();

// Click Functions
	 function crystal() {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number-box").html("<p> Your Crystal Count: <br><b>" + counter + "<b></p>");
		if (counter == crystalNumber) {
			wins++;
			allReset();
		}
		else if (counter > crystalNumber) {
			losses++;
			allReset();
		};
		
	};
	
	$(document).on("click", ".crystal", crystal);

	//Function To Display Games Instruction
	document.getElementById('howToplay').style.display = "none";
	function div_show() {	
		if(document.getElementById('howToplay').style.display == 'block')
		document.getElementById('howToplay').style.display = 'none';
		else
		document.getElementById('howToplay').style.display = 'block';
	}


