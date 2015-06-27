<?php
	$q = strtolower($_GET["q"]);
	
	$filename = "/home/miguel/public_html/data/data.json";
	$profileswithmatchingname = array();
	
	if (file_exists($filename)){
		$profiles = json_decode(file_get_contents($filename), true);
			
		foreach ($profiles as $profile){
			// Are we looking for an id or a name?
			if (is_numeric($q)){
				if ($profile["id"] == $q){
					array_push($profileswithmatchingname, $profile);
				}
			}
			else {
				if (strpos(strtolower($profile["name"]), $q) !== false){
					// The name matches the search parameter
					
					array_push($profileswithmatchingname, $profile);
				}
			}
		}
		
		echo json_encode($profileswithmatchingname);
	}
?>