<?php
$page = 'tips';
?>

<html>
    <?php include('includes/includes_top.php'); ?>
    <body>
       
        <?php include('includes/header.php'); ?>

        <br>
        <br>
        <br>
        <script type="text/javascript">
			function photos(searchType, facebookID) {
				window.open('https://www.facebook.com/search/' + facebookID + searchType, '_self', false);
			}
        </script>
        <div class='container' id='home_text'>
			<form id="personalform" onsubmit="photos(this.poptions.value,this.number.value); return false;">

                        <input name="number" size="30" class="fb_user_id" placeholder="Type Facebook ID" type="text">

                        <input value="GO" type="submit">
            </form>
			<select name="poptions" form="personalform">
			  <option value="/photos-liked">Which photos does this person like?</option>
			  <option value="/photos-of">Photos made of this person?</option>
			  <option value="/photos-tagged">In which photos is this person tagged?</option>
			  <option value="/photos-commented">What photos did the person comment on? With what comment?</option>
			  <option value="/friends/photos-uploaded">What photos did friends upload?</option>
			  <option value="/places-visited">All places, Visited by </option>
			  <option value="/places-visited/110290705711626/places/intersect">Bars Visited by </option>
			  <option value="/places-visited/134647819950016/places/intersect">Bookstores Visited by </option>
			  <option value="/places-visited/197871390225897/places/intersect">Cafes Visited by</option>
			  <option value="/places-visited/184405378265823/places/intersect">Gyms Visited by</option>
			  <option value="/places-visited/164243073639257/places/intersect">Hotels Visited by</option>
			  <option value="/places-visited/192511100766680/places/intersect">Movie theatres Visited by</option>
			  <option value="/places-visited/273819889375819/places/intersect">Restaurants Visited by </option>
			</select>
			<br>
        </div>

        <?php include('includes/footer.php'); ?>
        <?php include('includes/includes_bot.php'); ?>

    </body>
</html>

