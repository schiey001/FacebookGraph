<?php
$page = 'tips';
?>

<html>
<head>
	<!-- code for special characters like ë -->
	<meta charset="utf-8" />
	<!-- Website Title & Description for Search Engine purposes -->
	<title></title>
	<meta name="description" content="">
	<!-- Mobile viewport optimized -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!-- Bootstrap CSS -->
	<link href="includes/css/bootstrap.min.css" rel="stylesheet">
	<link href="includes/css/bootstrap-glyphicons.css" rel="stylesheet">
	<!-- Custom CSS -->
	<link href="includes/css/styles.css" rel="stylesheet">
	<!-- Include Modernizr in the head, before any other Javascript -->
	<script src="includes/js/modernizr-2.6.2.min.js"></script>
	
	<!-- Add jQuery library -->
	<script type="text/javascript" src="fancybox/lib/jquery-1.10.1.min.js"></script>
	<!-- Add fancyBox -->
	<link rel="stylesheet" href="fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
	<script type="text/javascript" src="/fancybox/source/jquery.fancybox.pack.js"></script>
	<script>
	var $= jQuery.noConflict();
	$(document).ready(
	function(){
		$('#submitbutton').click(function(){
			$.post("includes/php/classes/tipscrawl.php",
				{
					person_num: $('#inputID').val(),
					search_type: $('#searchOptions').val()
				}, 
				function(data){
					$('#responseHolder').html(data);
				}
			);
		});
	}
	);
	$(document).ready(
		function() {
			$(".fancybox").fancybox();
		}
	);

	</script>
</head>
    <body>
        <?php include('includes/header.php'); ?>
        <br>
        <div class='container' id='home_text'>
            <div>
            <form id="personalform" class="form-inline">
				<div class="form-group">
	                        <input id="inputID"  class="form-control" placeholder="Type Facebook ID" type="text" style="width:224px;">
	                        <input id="submitbutton" class="btn btn-default" value="Search" type="button">
	            </div>
				<select id="searchOptions" class="form-control" name="poptions" form="personalform" style="width:300px;">
				  <option value="/photos">Photos uploaded by</option>
				  <option value="/photos-liked">Photos liked by</option>
				  <option value="/photos-of">Photos made of</option>
				  <option value="/photos-tagged">In which photos is this person tagged?</option>
				  <option value="/photos-commented">Photos commmented on by</option>
				  <option value="/places-visited">All places, Visited by </option>
				</select>
			</form>
            </div>
        </div>
        <br>
		<div id="responseHolder"></div>
        <?php include('includes/footer.php'); ?>
        <?php include('includes/includes_bot.php'); ?>

    </body>
</html>

