<?php
	class Crawler {
		static $typesofsearch = array("location" => "Lives in", "birthplace" => "From", "birthdate" => "Born on", "education" => "studied");
		const PROFILEBASEURL = "http://145.92.7.240/~miguel/data/profiles/";
		
		function search_for_by_name($profiles, $searchparameters){
			$matchingprofiles = array();
			
			foreach ($profiles as $profile){
				$url = self::PROFILEBASEURL.$profile["id"];
				
				// Class commonly used on the info we need
				$results = self::search_for_elements_by_class($url, "_50f3");
				
				$matchingparameters = array();
				
				// Temp, until people or place searches are both supported
				$people = false;
				
				foreach ($results as $result){
					// No parameters chosen, use default
					if (count($searchparameters) < 2){
						array_push($searchparameters, "location");
						// array_push($searchparameters, "birthdate");
					}
					
					foreach ($searchparameters as $searchparameter){
						// People or place (like a city) search are not yet differentiated
						if ($searchparameter == "people"){
							$people = true;
							continue;
						}
						
						$tosearchfor = self::$typesofsearch[$searchparameter];
						if (empty($tosearchfor)){
							die("INVALID SEARCH TYPE <br />");
						}
						
						// if (stripos(strtolower($result->nodeValue), $tosearchfor) !== false){
						if (strpos($result->nodeValue, $tosearchfor) !== false){
							// We found the div we want
							
							//// Filter out $tosearchfor?
							//$searchparameter->value = $result->nodeValue;
						
							// array_push($matchingparameters, $result->nodeValue);
							array_push($matchingparameters, strstr($result->nodeValue, $tosearchfor));
						}
					}
				}
				
				// Temp fix for duplicate params
				// This did not work: http://stackoverflow.com/questions/9652575/foreach-loop-with-xpath-on-simplexml-object-returning-duplicate-data
				$matchingparameters = array_unique($matchingparameters);
				
				if (!$people && count($matchingparameters) == count($searchparameters) || $people && count($matchingparameters) == (count($searchparameters) - 1)){
					// This profile matches the search parameters
					// echo "Found a profile matching the search! <br />";
					
					array_push($matchingprofiles, new SearchResult($profile["id"], $profile["name"], $profile["pictureurl"], $matchingparameters));
				}
			}
			
			return $matchingprofiles;
		}
	
		private function search_for_elements_by_class($url, $class){
			$dom = new DOMDocument;
			@$dom->loadHTMLFile($url);
			$xpath = new DOMXPath($dom);
			
			return $xpath->query("//*[@class='{$class}']");
			// return $xpath->query("//div[@class='{$class}']");
		}
	}
?>