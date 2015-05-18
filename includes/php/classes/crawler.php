<?php
	class Crawler {
		static $typesofsearch = array("location" => "Lives in", "birthplace" => "From", "birthdate" => "Born on", "studied" => "studied");
		const PROFILEBASEURL = "http://145.92.7.240/~miguel/data/profiles/";
		
		function searchforbyname($profiles, $searchparameters){
			$matchingprofiles = array();
			
			foreach ($profiles as $profile){
				$url = self::PROFILEBASEURL.$profile["id"];
				
				$dom = new DOMDocument;
				@$dom->loadHTMLFile($url);
				
				$xpath = new DOMXPath($dom);
				// Class commonly used on the info we need
				$results = $xpath->query("//*[@class='_50f3']");
				
				$matchingparameters = array();
				foreach ($results as $result){	
					foreach ($searchparameters as $searchparameter){
						$tosearchfor = self::$typesofsearch[$searchparameter["type"]];
						if (empty($tosearchfor)){
							die("INVALID SEARCH TYPE <br />");
						}
						
						if (stripos(strtolower($result->nodeValue), $tosearchfor) !== false){
							// We found the div we want
							
							//// Filter out $tosearchfor?
							//$searchparameter->value = $result->nodeValue;
							
							array_push($matchingparameters, $result->nodeValue);
						}
					}
				}
				
				if (count($matchingparameters) >= count($searchparameters)){
					// This profile matches the search parameters
					// echo "Found a profile matching the search! <br />";
					
					array_push($matchingprofiles, new SearchResult($profile["id"], $profile["name"], $profile["pictureurl"], $matchingparameters));
				}
			}
			
			return $matchingprofiles;
		}
	}
?>