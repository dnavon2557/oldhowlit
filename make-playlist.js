
//Main js. file for howLit
//Will take Range Value from slider bar and creat lit number
//lit number calculated with acoustic, energy, dance, and liveliness
//searches for songs based on these values and creates playlist
//playlist plays through spotify. in window? in spotify?

	//default values for song metrics
	//these will be assigned when playlist is requested based on range number
	var rangeNumber = 0;
	var litness;
	var numSongs = 100;
	var min_hotttnessss = 0.5;
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

		} else if (rangeNumber >= 90) {
			litness.max_dancabilty = 1;
			litness.max_energy = 1;
		}

	}

	var items = [];
	//
	function play () {
		findLitNumber;

		//search for 100 songs
		//create playlist 
		//open spotify

		Query.ajaxSettings.traditional = true; 

		//my api key
		var apiKey = ZSB4FV0A9YETOVCG1;
		//url to request songs
		//TODO may change metrics used later
    	var url = 'http://developer.echonest.com/api/v4/song/search?api_key=' + apiKey + 
    	          '&format=json&results=' + numSongs + '&min_danceability=' + min_danceability +
    	          '&max_danceability=' + max_danceability + '&min_energy=' + min_energy + 
    	          '&max_energy=' + max_energy + '&min_hotttnesss=' + min_hotttnessss;
    	          
    	//http get from api 
    	var response = new XMLHttpRequest();
    	response.open("GET", url, false);          
    	var parsedJSON = response.parse(response);

    	//ignore, for reference later          
    	/*           
    	var args = { 
            format:'json', 
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
	*/
	//get the current spotify users id 

	

	}

	/*
	 * PURPOSE: creates a new spotify playlist for client. List of songs from echo nest
	 *          will be added 
	 */
	function createSpotifyPlaylist () {
		var currentUserId = getUserInfo(['id']);
		var playlistName = "foobar"
		var url = 'https://api.spotify.com/v1/users/' + currentUserId + '{user_id}/playlists?' 
				   + 'name=' + playlistName + '&public=true';
		POST 
	}
	

	/*
	 * PURPOSE: gets spotify user information of client. 
	 *  RETURN: currentUserInfo - JSON data of user 
	 */
	function getUserInfo () {
		var apiKeySpotify = "ea7eb5c1d5514aafb06d0c2494fc1fc8"
		var currentUserInfo = new XMLHttpRequest();
		var url = 'https://api.spotify.com/v1/me?client_id=' + apiKeySpotify;
		currentUserInfo.open("GET", url)

		callbackFunction;

		currentUserInfo.send();		
	
		return currentUserInfo;
	}

	function callbackFunction (request) {
			if (request.readyState == 4 && request.status == 200) {
					alert ("Got Spotify User data back");

			}
	}
