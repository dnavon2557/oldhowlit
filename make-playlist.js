
//Main js. file for howLit
//Will take Range Value from slider bar and creat lit number
//lit number calculated with acoustic, energy, dance, and liveliness
//searches for songs based on these values and creates playlist
//playlist plays through spotify. in window? in spotify?

	//default values
	var rangeNumber;
	var litness;

	//updates litNumber on change in slider
    function updateRangeNumber () {
   			rangeNumber = document.getElementByClassName('slider').value;
 	    	console.log ('rangeNumber');
   	}

	//
	function findLitNumber () {
		//TODO calaculte numbers for song metrics
		litness.min_dancablity = rangeNumber/100;
		litness.min_energy = rangeNumber/100;
		if (rangeNumber < 90) {
			litness.max_dancabilty = rangeNumber/100 + 0.1
			litness.max_energy = rangeNumber/100 +0.1

		}

	}

	function play (litness) {

	}

//});