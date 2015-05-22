<?php
	// What info to display
	$retrievalparameters = array("location" => false, "birthplace" => false, "birthdate" => false, "studied" => false);
	// Search for a person or a location?
	$p = array("people" => false, "someone" => false, "places" => false, "cities" => false);
	$searchby = array("living in" => false, "named" => false);
	$c = array("of", "from");
	
	
	$name = "";
	
	$q = strtolower($_GET["q"]);
	
	$words = explode(' ', $q);
	
	// Figure out what kind of search it is (do we want to LOOK for a location, or SEARCH for a specific location)
	
	// Gather what to search for (location, birthplace etc)
	
	$r = false;
	$nextisname = false;
	foreach ($words as $key => $word){
		if ($r){
			if (in_array($word, $c)){
				unset($words[$key]);
				$r = false;
				continue;
			}
		}
		
		if ($nextisname){
			$name = $word;
			unset($words[$key]);
			$nextisname = false;
			
			continue;
		}
		
		if (in_array($word, $retrievalparameters)){
			$retrievalparameters[$word] = true;
			
			// Remove from list of words
			unset($words[$key]);
			$r = true;
			
			continue;
		}
		
		if (in_array($word, $p)){
			$p[$word] = true;
			unset($words[$key]);
			
			$nextisname = true;
			
			continue;
		}
	}
?>