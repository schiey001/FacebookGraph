<?php 
$personNumber = $_POST['person_num'];
$searchType = $_POST['search_type'];
const PROFILEBASEURL = "http://145.92.7.240/data/profile/?id=";


switch($searchType){
	case "/photos":
		search_photos($personNumber, $searchType);
		break;
	// case "/photos-liked":
		// search_photos_liked($personNumber, $searchType);
		// break;
	// case "/photos-of":
		// search_photos_liked($personNumber, $searchType);
		// break;
	// case "/photos-tagged":
		// search_photos_liked($personNumber, $searchType);
		// break;
	// case "/photos-commented":
		// search_photos_liked($personNumber, $searchType);
		// break;
	case "/places-visited":
		search_places_visited($personNumber, $searchType);
		break;
	default:
		search_photos_liked($personNumber, $searchType);
		break;
}

function xpathQuery($query,$personNumber, $searchType){
	$dom = new DOMDocument;
	$dom->preserveWhiteSpace = false;
	$url = PROFILEBASEURL.$personNumber.$searchType;
	@$dom->loadHTMLFile($url);
	$xpath = new DOMXPath($dom);
	$results = $xpath->query($query);
	return $results;
}

function displayPhotoResults($resultArray){
	echo "<section id='photos'>";
	for ($x = 0; $x < count($resultArray); $x++){
		echo    "<a class='fancybox' rel='group' href={$resultArray[$x]}> 
					<img src={$resultArray[$x]} alt=''/>
				</a>";
	}
	echo "</section";
}

function search_photos($personNumber, $searchType){
	// the img src is in the background image of the <i> tag, inside the style attribute
	$results = xpathQuery('//i[@style]', $personNumber, $searchType);

	$resultArray = array();
	foreach( $results as $node) {
		$temp = $node->getAttribute('style');	// use substring to filter out the image src
	    $temp = substr($temp, 22, -2);
	    array_push($resultArray, $temp);
	}
	//display the results
	displayPhotoResults($resultArray);
}

function search_photos_liked($personNumber, $searchType){
	//div[@class="uiScaledImageContainer _d17"]/img                                 non cropped images, just the ones we want
	//div[@class="_46-h _d17"]/img                                                  cropped images, just the ones we want
	//div[@class="uiScaledImageContainer _d17"]/img|//div[@class="_46-h _d17"]/img  both, in the right order   
	$results = xpathQuery('//div[@class="uiScaledImageContainer _d17"]/img|//div[@class="_46-h _d17"]/img', $personNumber, $searchType);

	$resultArray = array();
	foreach( $results as $node) {
		$temp = $node->getAttribute('src');
	    $temp = substr($temp, 1);	// use substring to filter out the image src
	    $temp = PROFILEBASEURL.$personNumber.$temp;
	    array_push($resultArray, $temp);
	}
	//display the results
	displayPhotoResults($resultArray);
}

function search_places_visited($personNumber, $searchType){
	//div[@class="clearfix _zw"]                                
	//div[@class="clearfix _zw"]/a/img                              image
	//div[@class="clearfix _zw"]/div/div/div[@class="_zs fwb"]      title
	//div[@class="clearfix _zw"]/div/div/div[@class="_pac _dj_"]    type or subheader
	//div[@class="clearfix _zw"]/div/div/div[@class="_946"]         snippet text and other stuff
	$results = xpathQuery('//div[@class="clearfix _zw"]/div/div/div[@class="_zs fwb"]', $personNumber, $searchType);
	$titleArray = array();
		foreach( $results as $node) {
		$temp = $node->nodeValue;
	    array_push($titleArray, $temp);
	}
	$results = xpathQuery('//div[@class="clearfix _zw"]/a/img', $personNumber, $searchType);
	$imageArray = array();
		foreach( $results as $node) {
		$temp = $node->getAttribute('src');
	    $temp = substr($temp, 1);	// use substring to filter out the image src
	    $temp = PROFILEBASEURL.$personNumber.$temp;
	    array_push($imageArray, $temp);
	}
	$results = xpathQuery('//div[@class="clearfix _zw"]/div/div/div[@class="_pac _dj_"]', $personNumber, $searchType);
	$subheaderArray = array();
		foreach( $results as $node) {
		$temp = $node->nodeValue;
	    array_push($subheaderArray, $temp);
	}
	$results = xpathQuery('//div[@class="clearfix _zw"]/div/div/div[@class="_946"]', $personNumber, $searchType);
	$snippetArray = array();
		foreach( $results as $node) {
		$temp = $node->nodeValue;
	    array_push($snippetArray, $temp);
	}
	//display the results
	for ($x = 0; $x < count($titleArray); $x++){
		echo    
		"<div class='col-sm-4'>
			<div class='panel panel-info facebook-user' data-facebookid=''>
				<div class='panel-heading'>
					{$titleArray[$x]}
				</div>
				<div class='panel-body'>
				<img src={$imageArray[$x]} class='img-rounded' style='width: 100px; height: 100px'>
					<b>{$subheaderArray[$x]}</b>
					<p>{$snippetArray[$x]}</p>
				</div>
			</div>
		</div>";
	}
}
?>			