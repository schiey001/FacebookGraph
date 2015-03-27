<?php
	define('FACEBOOK_SDK_V4_SRC_DIR', '/home/miguel/public_html/Facebook/');
	require_once( '../Facebook/autoload.php' );
	
	use Facebook\HttpClients\FacebookHttpable;
	use Facebook\HttpClients\FacebookCurl;
	use Facebook\HttpClients\FacebookCurlHttpClient;
	use Facebook\Entities\AccessToken;
	use Facebook\Entities\SignedRequest;
	use Facebook\FacebookSession;
	use Facebook\FacebookRedirectLoginHelper;
	use Facebook\FacebookJavaScriptLoginHelper;
	use Facebook\FacebookRequest;
	use Facebook\FacebookResponse;
	use Facebook\FacebookSDKException;
	use Facebook\FacebookRequestException;
	use Facebook\FacebookOtherException;
	use Facebook\FacebookAuthorizationException;
	use Facebook\GraphObject;
	use Facebook\GraphSessionInfo;
	use Facebook\GraphUser;
	
	session_start();
	FacebookSession::setDefaultApplication('1390279027954274', 'c927900255811339fbd98b9aa18f113b');
	
	$helper = new FacebookJavaScriptLoginHelper();
	
	try {
	  $session = $helper->getSession();
	} 
	catch(FacebookRequestException $ex) {
	  // When Facebook returns an error
	} 
	catch(\Exception $ex) {
	  // When validation fails or other local issues
	}
	
	if($session) {
		try {
			$request = new FacebookRequest( $session, 'GET','/search?q='.$_POST['search'].'&type=user&fields=id,name,picture.width(100).height(100)&limit=30');
			$response = $request->execute();
			$graphObject = $response->getGraphObject()->asArray();
			
			$count = count($graphObject["data"]);
			for ($i = 0; $i < $count; $i += 2){
				for ($x = 0; $x < 2; $x++){
					if (isset($graphObject["data"][$i+$x])){
						echo "<div class='col-sm-6'>
									<div class='panel panel-info facebook-user' data-facebookid='{$graphObject["data"][$i+$x]->id}'>
										<div class='panel-heading'>
											{$graphObject["data"][$i+$x]->name}
										</div>
										<div class='panel-body'>
											<div class='row'>
												<div class='col-sm-3'>
													<img src={$graphObject["data"][$i+$x]->picture->data->url} class='img-rounded' style='width: 100px; height: 100px'>
												</div>
												<div class='col-sm-3'>
													W.I.P
												</div>
											</div>
										</div>
									</div>
								</div>";
					}
				}
			}
		} 
		catch(FacebookRequestException $e) {
			echo "Exception occured, code: " . $e->getCode();
			echo " with message: " . $e->getMessage();
		}   
	}
?>