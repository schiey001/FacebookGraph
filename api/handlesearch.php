<?php
	include("../includes/php/classes/crawler.php");
	include("../includes/php/classes/searchresult.php");
	
	// $searchqueries = array("1" => ':%1$s of :%2$s named :%3$s', "2" => "aiwdjiaw iajwdjiawoij aiojd ioajwd ijawdiojoij");
	// $searchqueries = array("1" => '$s of $s named $s', "2" => '$s named $s', "3" => 'friends of people named $s');
	$searchqueries = array("1" => '$s of $s named $s', "2" => '$s named $s');
	$searchparameters = array();
	
	$q = strtolower($_POST["q"]);
	
	$lowestlev = array("id" => -1, "lev" => -1);
	foreach ($searchqueries as $key => $searchquery){
		$lev = levenshtein($searchquery, $q);
		
		if ($lev < $lowestlev["lev"] || $lowestlev["id"] == -1){
			$lowestlev["id"] = $key;
			$lowestlev["lev"] = $lev;
		}
	}
	
	$sqc = clean_search_query($searchqueries[$lowestlev["id"]]);
	$qe = explode(' ', $q);
	
	foreach ($sqc as $sqclean){
		$parameter = strstr($q, $sqclean, true);
		
		// If parameter actually contains multiple parameters
		if (strpos($parameter, ",") !== false || strpos($parameter, "and") !== false){
			$par = str_replace(", ", '-', $parameter);
			$par = str_replace(" and ", '-', $par);
			$parameters = explode("-", $par);
			
			foreach ($parameters as $p){
				array_push($searchparameters, trim($p));
			}
		}
		else {
			array_push($searchparameters, trim($parameter));
		}
		
		$q = str_replace($parameter.$sqclean.' ', '', $q);
	}
	
	// Only the name should be left in the query
	$name = $q;
	
	$searchurl = "http://145.92.7.240/~miguel/data/api/search.php?q=". $name;
	$profiles = json_decode(file_get_contents($searchurl), true);
	$crawler = new Crawler();
	
	$result;
	switch ($lowestlev["id"]){
		case "1":
			$result = $crawler->search_for_by_name($profiles, $searchparameters);
			break;
		case "2":
			$result = $crawler->search_for_by_name($profiles, $searchparameters);
			break;
		
		case "3":
			$result = $crawler->get_friends_by_name($profiles);
			break;
	}
	
	$count = count($result);
	for ($i = 0; $i < $count; $i += 3){
		for ($x = 0; $x < 3; $x++){
			if (isset($result[$i+$x])){
				echo "<div class='col-sm-4'>
							<div class='panel panel-info facebook-user' data-facebookid='{$result[$i+$x]->id}'>
								<div class='panel-body'>
									<img src={$result[$i+$x]->picture->data->url} class='img-rounded' style='width: 100px; height: 100px'>
									<p>
										<span class='name'>{$result[$i+$x]->name}</span><br />
										{$result[$i+$x]->get_parameters_for_display()}<br />
									</p>
									<br style='clear: both;' />
								</div>
							</div>
						</div>";
			}
		}
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