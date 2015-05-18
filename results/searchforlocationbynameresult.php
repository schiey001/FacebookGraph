<?php
	include("../includes/php/classes/crawler.php");
	include("../includes/php/classes/searchresult.php");
	
	$profilebaseurl = "http://145.92.7.240/~miguel/data/profiles/";
	$apibaseurl = "http://145.92.7.240/~miguel/data/api/search.php";
	$crawler = new Crawler();
	
	$q = $_POST["q"];
	
	$searchurl = $apibaseurl."?q=".$q;
	
	$profiles = json_decode(file_get_contents($searchurl), true);
	
	// echotext(count($profileids));
	
	$result = $crawler->searchforbyname($profiles, array(array("type" => "location")));
	// echotext(count($result));
	
	// print_r($result);
	
	//for ($i = 0; $i < count($profileids); $i++){
	//	
	//}
	
	$count = count($result);
	for ($i = 0; $i < $count; $i += 3){
		for ($x = 0; $x < 3; $x++){
			if (isset($result[$i+$x])){
				echo "<div class='col-sm-4'>
							<div class='panel panel-info facebook-user' data-facebookid='{$result[$i+$x]->id}'>
								<div class='panel-heading'>
									{$result[$i+$x]->name}
								</div>
								<div class='panel-body'>
									<img src={$result[$i+$x]->picture->data->url} class='img-rounded' style='width: 100px; height: 100px'>
									<p>{$result[$i+$x]->getparametersfordisplay()}</p>
								</div>
							</div>
						</div>";
			}
		}
	}	

	function echotext($text){
		echo $text ."<br />";
	}
?>