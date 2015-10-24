
//Main js. file for howLit
//Will take Range Value from slider bar and creat lit number
//lit number calculated with acoustic, energy, dance, and liveliness
//searches for songs based on these values and creates playlist
//playlist plays through spotify. in window? in spotify?

	//default values
	var rangeNumber = 0;
	var litness = 0;

	//updates litNumber on change in slider
    function updateRangeNumber () {
   			rangeNumber = document.getElementByClassName('slider').value;
 	    	console.log ('rangeNumber');
   	}

	//
	function findLitNumber () {
		//TODO calaculte numbers for song metrics
	}

	function play (litness) {

	}

//});