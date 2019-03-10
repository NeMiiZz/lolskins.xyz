<?php 
	include("include/config.php");
?>

<! DOCTYPE html>
<?php if ($maintenance) { ?>
	<html>
		<body style='background-image:url(/public/images/maintenance.jpg);background-repeat: no-repeat;background-size: cover;' class="maintanence">
		</body>
	</html>
<?php } else { ?>
	<html>
		<head>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
			<link rel="stylesheet" href="/public/bin/css/main.css">
		</head>
		<body>
			<div class="jumbotron text-center " id='slide-show'>
				<h1 class="lol-home-title">LoL Skins</h1>
				<input type='text' id='lol-search-box' placeholder="Search for a Champion or Skin name">
			</div>
			<div class="container text-center">
				<span id='lol-champion-icon'></span>
				<h2 id='lol-champion-name'></h2>
				<p id='lol-champion-desc'></p>
				<div class="row" id="lol-champion-list"></div>
			</div>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script src="/public/bin/javascript/main.js"></script>
		</body>
	</html>
<?php } ?>