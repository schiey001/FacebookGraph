<?php
	include("../includes/php/classes/crawler.php");
	include("../includes/php/classes/searchresult.php");
	
	// 3, 5 and 6 don't work (education)
	$searchqueries = array(
		"1" => 'location of people named $s', 
		"2" => 'birthdate of people named $s', 
		"3" => 'education of people named $s',
		"4" => 'location and birthdate of people named $s',
		"5" => 'location and education of people named $s',
		"6" => 'location, birthdate and education of people named $s',
		"7" => 'friends of people named $s',
		"8" => 'people named $s',
		"9" => 'people named $s living in $s',
		"10" => 'friends of user with id $s',
		"11" => 'photos of user with id $s',
		"12" => 'photos of people named $s',
		"13" => 'show friends overview'
	);
	
	$searchparameters = array();
	
	$q = strtolower($_POST["q"]);
	
	// Find out which search query is being used
	$lowestlev = array("id" => -1, "lev" => -1);
	foreach ($searchqueries as $key => $searchquery){
		$lev = levenshtein($searchquery, $q);
		
		if ($lev < $lowestlev["lev"] || $lowestlev["id"] == -1){
			$lowestlev["id"] = $key;
			$lowestlev["lev"] = $lev;
		}
	}
	
	$sqc = clean_search_query($searchqueries[$lowestlev["id"]]);
	$cleanedsearchquery = str_replace($sqc, "", $q);
	
	$searchquery = explode(' ', trim($cleanedsearchquery));
	
	$name;
	$filter;
	
	// Clean up empty array values
	// $searchquery = preg_grep('/^\s*\z/', $searchquery, PREG_GREP_INVERT);
	
	// Search queries that use id instead of name
	if ($lowestlev["id"] != 10 && $lowestlev["id"] != 11){
		$searchquery = array_values(array_filter($searchquery));
	}
	
	if ($lowestlev["id"] == 9){
		if (count($searchquery) == 2){
			$name = $searchquery[0];
			$filter = $searchquery[1];
		}
		else if (count($searchquery) == 3){
			$name = $searchquery[0] .' '. $searchquery[1] ;
			$filter = $searchquery[2];
		}
	}
	else if ($lowestlev["id"] == 13){
		$name = "";
	}
	else {
		// Add the rest of the lev ids later (and use a switch)
		if (count($searchquery) == 1){
			$name = $searchquery[0];
		}
		else {
			$name = $searchquery[0] .' '. $searchquery[1];
		}
	}
	
	$searchurl = "http://145.92.7.240/data/api/search.php?q=". $name;
	$profiles = json_decode(file_get_contents($searchurl), true);
	
	$crawler = new Crawler();
	
	$result;
	switch ($lowestlev["id"]){
		case "1":
			$result = $crawler->search_for_location_by_name($profiles);
			break;
			
		case "2":
			$result = $crawler->search_for_birthdate_by_name($profiles);
			break;
			
		case "3":
			$result = $crawler->search_for_education_by_name($profiles);
			break;
			
		case "4":
			$result = $crawler->search_for_location_and_birthdate_by_name($profiles);
			break;
		
		case "7":
			$result = $crawler->get_friends_by_name($profiles);
			break;
			
		case "8":
			$result = $crawler->search_for_location_by_name($profiles);
			break;
			
		case "9":
			$result = $crawler->search_for_person_by_name_and_location($profiles, $filter);
			break;
			
		case "10":
			$result = $crawler->get_friends_by_id($profiles);
			break;
			
		case "11":
			$result = $crawler->get_photos_by_id($profiles);
			break;
			
		case "12":
			$result = $crawler->get_photos_by_name($profiles);
			break;
		
		case "13":
			break;
			
		// Shouldn't happen at all, but just in case
		default:
			$result = $crawler->search_for_location_by_name($profiles);
			break;
	}
	
	// Is the result a list of people or photos?
	if ($lowestlev["id"] != 11 && $lowestlev["id"] != 12 && $lowestlev["id"] != 13){
		$count = count($result);
		for ($i = 0; $i < $count; $i += 3){
			for ($x = 0; $x < 3; $x++){
				if (isset($result[$i+$x])){
					echo "<div class='col-sm-4'>
								<div class='panel panel-info facebook-user'>
									<div class='panel-body'>
										<img src={$result[$i+$x]->picture->data->url} class='img-rounded picture' style='width: 100px; height: 100px' data-facebookid='{$result[$i+$x]->id}'>
										<p>
											<span class='name'>{$result[$i+$x]->name}</span><br />
											{$result[$i+$x]->get_parameters_for_display()}<br />
											<span class='actions'><a href='#' class='photos-search' data-facebookid='{$result[$i+$x]->id}'>Photos</a> <a class='friends-search' href='#' data-facebookid='{$result[$i+$x]->id}'>Friends</a> <a href='data/profile/?id={$result[$i+$x]->id}' target='_blank'>Profile</a></span>
										</p>
										<br style='clear: both;' />
									</div>
								</div>
							</div>";
				}
			}
		}
	}
	else if ($lowestlev["id"] == 13){
		echo file_get_contents("http://145.92.7.240/api/createfriendsoverview.php");
	}
	else {
		echo "<section id='photos'>";
		for ($x = 0; $x < count($result); $x++){
			echo "<a class='fancybox' rel='group' href={$result[$x]}> 
						<img class='photo-result' src={$result[$x]} alt=''/>
					</a>";
		}
		echo "</section>";
	}
	
	function clean_search_query($query){
		$q = explode(' ', $query);
		
		foreach ($q as $key => $value){
			if ($value == '$s'){
				unset($q[$key]);
			}
		}
		
		return $q;
	}
?>