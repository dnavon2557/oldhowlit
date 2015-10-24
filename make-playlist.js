
//Main js. file for howLit
//Will take Range Value from slider bar and creat lit number
//lit number calculated with acoustic, energy, dance, and liveliness
//searches for songs based on these values and creates playlist
//playlist plays through spotify. in window? in spotify?

	//default values for song metrics
	//these will be assigned when playlist is requested based on range number
	var rangeNumber = 50;
	var litness = new Object;
	var numSongs = 100;
	var min_hotttnesss = 0.5;

	//updates litNumber on change in slider
    function updateRangeNumber () {
    		var slider = document.getElementById('slider');
    		console.log(slider);
   			rangeNumber = slider.value;
 	    	console.log (rangeNumber);
   	}

	/*
	 * PURPOSE: finds litness - uses danceability and energy. Litness is
	 *          used by echo nest to create list of songs
	 */
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

	/*
	 * PURPOSE: main function used in howlit. Finds litness, grabs list of songs 
	 *          using echo nest api, and creates spotify playlist for client with songs found
	 */
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
            	console.log(data);
            	createSpotifyPlaylist(data);
            }
    		}); 
		function myJsonMethod(response){
  			console.log (response);
		}
	}
    		
	
	//get the current spotify users id 

	

	


	/*
	 * PURPOSE: creates a new spotify playlist for client. List of songs from echo nest
	 *          will be added 
	 */
	function createSpotifyPlaylist (data) {
		var currentUserId = getUserInfo(['id']);
		var playlistName = "foobar"
		var url = 'https://api.spotify.com/v1/users/' + currentUserId + '/playlists?' 
				   + 'name=' + playlistName + '&public=true';

		var newPlaylist; //TODO get request to make new playlist and save as variable

		$.ajax({type: "POST",
			url: url,
			//data: data,   //?????????????????????????
			success: function (data) {
				alert (data);
				newPlaylist = data; //change to fill with actual data
			},
			dataType: JSON
		});

		var playlistID; //TODO
		//make array of songs to add to playlist. songs in uri form 
		var songsToAdd = pullSongs (data); //TODO add function to pull parsed data
		//loop through JSON data from 

		addSongs (songsToAdd, currentUserId, playlistID)
	}
	
	/*
	 * PURPOSE: adds songs to specified playlist using array of song ids
	 */
	function addSongs (songsToAdd, currentUserId, playlistID) {
		var url = 'https://api.spotify.com/v1/users/' + currentUserId + '/playlists' + 
		          playlistID + '/tracks?uris=';
		for (i = 0; i < songsToAdd.length; i++) {
			if (i != 0) url += ',';
			url += songsToAdd[i]['id'];
		}
		//TODO add get request to add songs to playlist using url
		$.ajax({type: "POST",
			url: url,
			//data: data,   //?????????????????????????
			success: function (data) {
				alert (data);
			}
		});
	}
	/*
	 * PURPOSE: gets spotify user information of client. 
	 *  RETURN: currentUserInfo - JSON data of user 
	 */
	function getUserInfo () {
		//TODO 401 error - add authorization shit 
		var apiKeySpotify = "a0cdedaf4c0d4e3bb8e3025b35f8da41"
		var currentUserInfo;

		var url = 'https://api.spotify.com/v1/me?client_id=' + apiKeySpotify;

		//jquery to get current user info
		$.ajax({type: "GET",
            crossDomain : true,
            url: url,
            contentType: "application/json",
            success: function(data) {
            	alert(data);
            	currentUserInfo = data;
            },
            dataType: JSON
    	}); 

		callbackFunction;	
	
		return currentUserInfo;
	}

	function callbackFunction (request) {
			if (request.readyState == 4 && request.status == 200) {
					alert ("Got Spotify User data back");

			}
	}

	/*
	 * PURPOSE: Adds ids of songs found in JSON response to songs array. 
	 *  RETURN: songsArray - array of song ids s
	 */
	function pullSongs (data) {
		var songsArray = [];
		for (i = 0; i < data.length; i++) {
			songsArray[i] = data[i]['id'];
		}
		return songsArray;
	}

//TODOs for all
//error handling, pop up windows with errors?
