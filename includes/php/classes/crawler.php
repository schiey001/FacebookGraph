<?php
	class Crawler {
		static $typesofsearch = array("location" => "Lives in", "birthplace" => "From", "birthdate" => "Born on", "education" => "studied");
		const PROFILEBASEURL = "http://145.92.7.240/data/profile/";
		
		function search_for_location_by_name($profiles){
			return self::search($profiles, array("Lives in"));
		}
		
		function search_for_birthdate_by_name($profiles){
			return self::search($profiles, array("Born on"));
		}
		
		function search_for_education_by_name($profiles){
			return self::search($profiles, array("Studied"));
		}
		
		function search_for_location_and_birthdate_by_name($profiles){
			return self::search($profiles, array("Lives in", "Born on"));
		}
		
		function search_for_person_by_name_and_location($profiles, $location){
			return self::search($profiles, array("Lives in {$location}", "Born on"));
		}
		
		function get_friends_by_name($profiles){
			$matchingprofiles = array();
			$friends = array();
			
			foreach ($profiles as $profile){
				$url = self::PROFILEBASEURL."/friends/?id=". $profile["id"];
			
				// Grab the id of the user
				$results = self::search_for_elements_by_class($url, "_42ft _4jy0 _3-93 _4jy3 _517h _51sy");
				for ($i = 0; $i < $results->length; $i++){
					$text = $results->item($i)->getAttribute('ajaxify');
					$text = str_replace("/ajax/follow/follow_profile.php?profile_id=", "", $text);
					$id = str_replace("&feed_blacklist_action=show_followee_on_follow&location=1", "", $text);
					array_push($friends, array("id" => (int)$id));
					// $friends[$i]["id"] = (int)$id;
				}
				
				$results = self::search_for_elements_by_class($url, "fsl fwb fcb");
				for ($i = 0; $i < $results->length; $i++){
					// array_push($friends, array("name" => $result->nodeValue));
					$friends[$i]["name"] = $results->item($i)->nodeValue;
				}
				
				$results = self::search_for_elements_by_class($url, "_s0 _rw img");
				// First element is the picture of the current user, ignore it
				for ($i = 0; $i < ($results->length - 1); $i++){
					// $friends[$i]["pictureurl"] = $results->item($i + 1)->getAttribute('src');
					$friends[$i]["pictureurl"] = str_replace("../files", "data/profile/files", $results->item($i + 1)->getAttribute('src'));
				}
				
				foreach($friends as $friend){
					array_push($matchingprofiles, new SearchResult($friend["id"], $friend["name"], $friend["pictureurl"], array()));
				}
			}
			
			return $matchingprofiles;
		}
		
		function get_friends_by_id($profile){
			$matchingprofiles = array();
			$friends = array();
			
			$url = self::PROFILEBASEURL."/friends/?id=". $profile[0]["id"];
			
			// Grab the id of the user
			$results = self::search_for_elements_by_class($url, "_42ft _4jy0 _3-93 _4jy3 _517h _51sy");
			for ($i = 0; $i < $results->length; $i++){
				$text = $results->item($i)->getAttribute('ajaxify');
				$text = str_replace("/ajax/follow/follow_profile.php?profile_id=", "", $text);
				$id = str_replace("&feed_blacklist_action=show_followee_on_follow&location=1", "", $text);
				array_push($friends, array("id" => (int)$id));
				// $friends[$i]["id"] = (int)$id;
			}
			
			$results = self::search_for_elements_by_class($url, "fsl fwb fcb");
			for ($i = 0; $i < $results->length; $i++){
				// array_push($friends, array("name" => $result->nodeValue));
				$friends[$i]["name"] = $results->item($i)->nodeValue;
			}
			
			$results = self::search_for_elements_by_class($url, "_s0 _rw img");
			// First element is the picture of the current user, ignore it
			for ($i = 0; $i < ($results->length - 1); $i++){
				// $friends[$i]["pictureurl"] = $results->item($i + 1)->getAttribute('src');
				$friends[$i]["pictureurl"] = str_replace("../files", "data/profile/files", $results->item($i + 1)->getAttribute('src'));
			}
			
			foreach($friends as $friend){
				array_push($matchingprofiles, new SearchResult($friend["id"], $friend["name"], $friend["pictureurl"], array()));
			}
			
			return $matchingprofiles;
		}
		
		function get_photos_by_id($profile){
			$photos = array();
			
			$url = self::PROFILEBASEURL."/photos/?id=". $profile[0]["id"];
			
			$results = self::search_for_photos('//i[@style]', $url);

			foreach( $results as $node) {
				// This fix doesnt work, probably because of the /
				if (strpos($node->getAttribute("src"), "alt=''/") !== true){
					$temp = $node->getAttribute('style');	// use substring to filter out the image src
					$temp = substr($temp, 22, -2);
					array_push($photos, $temp);
				}
			}
			
			return $photos;
		}
		
		function search_for_photos($query, $url){
			$dom = new DOMDocument;
			$dom->preserveWhiteSpace = false;
			@$dom->loadHTMLFile($url);
			$xpath = new DOMXPath($dom);
			$results = $xpath->query($query);
			return $results;
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
				$url = self::PROFILEBASEURL ."?id=". $profile["id"];
				
				// Class commonly used on the info we need
				$results = self::search_for_elements_by_class($url, "_50f3");
				
				$matchingparameters = array();
				
				// Temp, until people or place searches are both supported
				$people = false;
				
				foreach ($searchparameters as $searchparameter){
					//echo $searchparameter ."<br />";
					foreach ($results as $result){
						// if (stripos(strtolower($result->nodeValue), $tosearchfor) !== false){
						// echo $result->nodeValue ."<br />";
						if (strpos($result->nodeValue, $searchparameter) !== false){
							// We found the div we want
							//echo "Yep <br />";
							//// Filter out $tosearchfor?
							//$searchparameter->value = $result->nodeValue;
							
							// The needed for searches looking for a users education
							if (strpos($result->nodeValue, "Attended from") !== false){
								$value = strstr(trim($result->nodeValue), "Attended", true);
								array_push($matchingparameters, strstr(trim($value), $searchparameter));
							}
							else {
								// array_push($matchingparameters, $result->nodeValue);
								array_push($matchingparameters, strstr(trim($result->nodeValue), $searchparameter));
							}
						}
						//else {
							//echo "Nope <br />";
						//}
					}
				}
				
				// Temp fix for duplicate params
				// This did not work: http://stackoverflow.com/questions/9652575/foreach-loop-with-xpath-on-simplexml-object-returning-duplicate-data
				$matchingparameters = array_unique($matchingparameters);
				
				//var_dump($matchingparameters);
				//die(print_r($searchparameters));
				//die(count($matchingparameters) ." : ". count($searchparameters));
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