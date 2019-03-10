$(document).ready( function() {

	$('#lol-search-box').on('keyup', function() {

		var searchVal = capitalizeFirstLetter($(this).val());
		if (searchVal.length >= 3) {

			//$.post("http://ddragon.leagueoflegends.com/cdn/9.5.1/data/en_GB/champion/"+searchVal+".json").done(function(response) {
				$.ajax({
					type: 'GET',
					crossDomain: true,
					dataType: 'json',
					url: 'http://ddragon.leagueoflegends.com/cdn/9.5.1/data/en_GB/champion/'+searchVal+'.json',
					success: function(response) {
					console.log(response);
					// store champion data in variable
					var champion = response;
					var random = getRandomInt(0, champion.data[searchVal].enemytips.length);
					console.log(random);
					var championName = champion.data[searchVal].name;
					var championDesc = champion.data[searchVal].enemytips[random];
					// get the champion icon
					$("#lol-champion-icon").html("<img src='http://ddragon.leagueoflegends.com/cdn/9.5.1/img/champion/"+championName+".png'></img>");
					$("#lol-champion-name").html(championName);
					$("#lol-champion-desc").html("<p>"+championDesc+"</p>");
				}
			});
		}
	});

	$.ajax({
		type: 'GET',
		crossDomain: true,
		dataType: 'json',
		url: 'http://ddragon.leagueoflegends.com/cdn/9.5.1/data/en_GB/champion.json',
		success: function(response) {
			console.log(response);
			$.each(response.data, function(index, element) {
				console.log(index);
				console.log(element);
				$("#lol-champion-list").append(
					"<div class='col-lg-1'>"+
						"<a href='#' class='champ-pic-link'>"+
							"<img src='http://ddragon.leagueoflegends.com/cdn/9.5.1/img/champion/"+index+".png' class='lol-champion-pic'>"+
						"</a>"+
					"</div>"
				)
			});
		}
	});
});

var slideIndex = 0;
slideShow(slideIndex);


function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function slideShow(slideIndex) {
	var i;
	var slides = $("#slide-show");
	console.log(slideIndex);
	

	var images = ['Garen', 'Aatrox', 'Jax', 'Jinx', 'Teemo', 'Zed'];
	

	slides.css("background-image", "url(/data/dragonhead/img/champion/splash/"+images[slideIndex]+"_2.jpg)");
	slides.addClass("lol-jumbo-background-image");

	slideIndex++;

	if (slideIndex > images.length) {slideIndex = 0} 
//	setTimeout(slideShow(slideIndex), 5000); // Change image every 2 seconds
}