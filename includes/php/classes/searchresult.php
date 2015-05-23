<?php
	class SearchResult {
		public $id;
		public $name;
		public $picture;
		public $matchingparameters;
		
		function __construct($id, $name, $pictureurl, $matchingparameters){
			$this->id = $id;
			$this->name = $name;
			// This is done on purpose to emulate the actual Facebook API
			$this->picture = (object) array("data" => (object) array("url" => $pictureurl));
			$this->matchingparameters = $matchingparameters;
		}
		
		function get_parameters_for_display(){
			$p = "";
			
			foreach ($this->matchingparameters as $matchingparameter){
				$p .= $matchingparameter ."<br />";
			}
			
			return $p;
		}
	}
?>