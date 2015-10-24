
//Main js. file for howLit
//Will take Range Value from slider bar and creat lit number
//lit number calculated with acoustic, energy, dance, and liveliness
//searches for songs based on these values and creates playlist
//playlist plays through spotify. in window? in spotify?

	//default values
	var rangeNumber = 0;
	var litNumber = 0;
	window.alert (document.getElementbyID(range));

	//updates litNumber on change in slider
    function updateRangeNumber () {
   		$('input[type="range"]').on('mousedown input', function() {
 	   	    rangeNumber = this.value;
 	    	console.log ('rangeNumber');
		});
   	}

	//
	function findLitNumber () {
		//TODO calaculta numbers for song metrics
	}

	
//});