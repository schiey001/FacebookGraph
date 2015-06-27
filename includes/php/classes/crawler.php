<?php
	class Crawler {
		static $typesofsearch = array("location" => "Lives in", "birthplace" => "From", "birthdate" => "Born on", "education" => "studied");
		const PROFILEBASEURL = "http://145.92.7.240/~miguel/data/profile/?id=";
		
		function search_for_location_by_name($profiles){
			return self::search($profiles, array("Lives in"));
		}
		
		function search_for_birthdate_by_name($profiles){
			return self::search($profiles, array("Born on"));
		}
		
		function search_for_education_by_name($profiles){
			return self::search($profiles, array("studied"));
		}
		
		function search_for_location_and_birthdate_by_name($profiles){
			return self::search($profiles, array("Lives in", "Born on"));
		}
		
		function search_for_person_by_name_and_location($profiles, $location){
			return self::search($profiles, array("Lives in {$location}", "Born on"));
		}
		
		function get_friends_by_name($profiles){
			$friends = array();
			
			foreach ($profiles as $profile){
				$url = self::PROFILEBASEURL.$profile["id"] ."/friends";
				
				$results = self::search_for_elements_by_class($url, "fsl fwb fcb");
				
				foreach ($results as $result){
					array_push($friends, $result->nodeValue);
				}
			}
			
			die(print_r($friends));
		}
		
		function get_friends_by_id($profile){
			$friends = array();
			
			$url = self::PROFILEBASEURL.$profile[0]["id"] ."/friends";
			
			$results = self::search_for_elements_by_class($url, "fsl fwb fcb");
			
			foreach ($results as $result){
				array_push($friends, $result->nodeValue);
			}
			
			die(print_r($friends));
		}
	
		private function search_for_elements_by_class($url, $class){
			$dom = new DOMDocument;
			@$dom->loadHTMLFile($url);
			$xpath = new DOMXPath($dom);
			
			return $xpath->query("//*[@class='{$class}']");
			// return $xpath->query("//div[@class='{$class}']");
		}
		
		private function search($profiles, $searchparameters){
			$matchingprofiles = array();
			
			foreach ($profiles as $profile){
				$url = self::PROFILEBASEURL.$profile["id"];
				
				// Class commonly used on the info we need
				$results = self::search_for_elements_by_class($url, "_50f3");
				
				$matchingparameters = array();
				
				// Temp, until people or place searches are both supported
				$people = false;
				
				foreach ($searchparameters as $searchparameter){
					foreach ($results as $result){
						// if (stripos(strtolower($result->nodeValue), $tosearchfor) !== false){
						if (strpos($result->nodeValue, $searchparameter) !== false){
							// We found the div we want
							
							//// Filter out $tosearchfor?
							//$searchparameter->value = $result->nodeValue;
						
							// array_push($matchingparameters, $result->nodeValue);
							array_push($matchingparameters, strstr($result->nodeValue, $searchparameter));
						}
					}
				}
				
				// Temp fix for duplicate params
				// This did not work: http://stackoverflow.com/questions/9652575/foreach-loop-with-xpath-on-simplexml-object-returning-duplicate-data
				$matchingparameters = array_unique($matchingparameters);
				
				if (count($matchingparameters) == count($searchparameters)){
					// This profile matches the search parameters
					// echo "Found a profile matching the search! <br />";
					
					array_push($matchingprofiles, new SearchResult($profile["id"], $profile["name"], $profile["pictureurl"], $matchingparameters));
				}
			}
			
			return $matchingprofiles;
		}
	}
?>