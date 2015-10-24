
//Main js. file for howLit
//Will take Range Value from slider bar and creat lit number
//lit number calculated with acoustic, energy, dance, and liveliness
//searches for songs based on these values and creates playlist
//playlist plays through spotify. in window? in spotify?

	//default values for song metrics
	//these will be assigned when playlist is requested based on range number
	var rangeNumber = 50;
	var litness = new Object;
	var numSongs = 1;
	var min_hotttnesss = 0.5;
	//updates litNumber on change in slider
    function updateRangeNumber () {
    		var slider = document.getElementById('slider');
    		console.log(slider);
   			rangeNumber = slider.value;
 	    	console.log (rangeNumber);
   	}

	//
	function findLitNumber () {
		//TODO calaculte numbers for song metrics
		litness.min_danceability = rangeNumber/100;
		litness.min_energy = rangeNumber/100;
		if (rangeNumber < 90) {
			litness.max_danceability = rangeNumber/100 + 0.1
			litness.max_energy = rangeNumber/100 +0.1

		} else if (rangeNumber >= 90) {
			litness.max_danceability = 1;
			litness.max_energy = 1;
		}

	}

	var items = [];
	//
	function play () {
		findLitNumber();
		//search for 100 songs
		//create playlist 
		//open spotify

		
		var apiKey = 'ZSB4FV0A9YETOVCG1';
    	var url = 'http://developer.echonest.com/api/v4/song/search?api_key=' + apiKey + 
    	          '&format=json&results=' + numSongs + '&min_danceability=' + litness.min_danceability +
    	          '&max_danceability=' + litness.max_danceability + '&min_energy=' + litness.min_energy + 
    	          '&max_energy=' + litness.max_energy + '&song_min_hotttnesss=' + min_hotttnesss+'&callback=?';
     	
    		$.ajax({type: "GET",
            crossDomain : true,
            url: url,
            contentType: "application/json",
            success: function(data) {
            	alert(data);
            }
    		}); 
function myJsonMethod(response){
  console.log (response);
}
}
    	/*
		
    	var response = new XMLHttpRequest({mozSystem: true});
    	response.onreadystatechange = function (){
    		console.log('readyState changing and shit');
    		console.log(response.readyState);
    		if ( response.readyState == 4) {
    			console.log('readyState is 4 and shit');
    			console.log(response.responseText);
    		}
    	}
    	response.open("GET", url, true);       
    	response.send();   
    	//var parsedJSON = JSON.parse(response);*/


    	//ignore, for reference later          
    	/*           
    	var args = { 
            format:'jsonp', 
            api_key: apiKey,
            name: artist,
            results: 100, 
   		 };
    	info("Fetching images for " + artist);
    	$.getJSON(url, args,
            function(data) {
                $("#results").empty();
                if (! ('images' in data.response)) {
                    error("Can't find any images for " + artist);
                } else {
                    $("#results").show();
                    $.each(data.response.images, function(index, item) {
                        var div = formatItem(index, item);
                        $("#results").append(div);
                    });
                    info("Showing " + data.response.images.length + " of " + data.response.total + " images for " + artist);
                }
            },
            function() {
                error("Trouble getting blog posts for " + artist);
            }
        );
		
	}
*/	