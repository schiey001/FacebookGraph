<?php
ini_set("display_errors", TRUE);
// Facebook PHP SDK v4.0.8
define('FACEBOOK_SDK_V4_SRC_DIR','/home/joost/public_html/Facebook/');
// path of these files have changes
require_once( 'Facebook/autoload.php' );


// path of these files have changes
use Facebook\HttpClients\FacebookHttpable;
use Facebook\HttpClients\FacebookCurl;
use Facebook\HttpClients\FacebookCurlHttpClient;

use Facebook\Entities\AccessToken;
use Facebook\Entities\SignedRequest;

// other files remain the same
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

// start session
session_start();

// init app with app id and secret
FacebookSession::setDefaultApplication( '1390279027954274','c927900255811339fbd98b9aa18f113b' );

// login helper with redirect_uri
$helper = new FacebookJavaScriptLoginHelper();
try {
  $session = $helper->getSession();
} catch(FacebookRequestException $ex) {
  // When Facebook returns an error
} catch(\Exception $ex) {
  // When validation fails or other local issues
}
if($session) {

  try {

	$request = new FacebookRequest( $session, 'GET','/search?q='.$_POST['search'].'&type=user&fields=id,name,picture.width(100).height(100)&limit=30');
	$response = $request->execute();
	// get response
	$graphObject = $response->getGraphObject()->asArray();
	for ($i = 0, $count = count($graphObject["data"]); $i < $count; $i = $i+2) {
		echo '	<div class="row">
					<div class="col-sm-6">
						<div class="panel panel-info ">
							<div class="panel-heading">
								'.$graphObject["data"][$i]->name.'
							</div>
							<div class="panel-body">
								<div class="row">
									<div class="col-sm-3">
										<img src="'.$graphObject["data"][$i]->picture->data->url.'" class="img-rounded" style="width: 100px; height: 100px">
									</div>
									<div class="col-sm-3">
										W.I.P
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="panel panel-info ">
							<div class="panel-heading">
								'.$graphObject["data"][$i+1]->name.'
							</div>
							<div class="panel-body">
								<div class="row">
									<div class="col-sm-3">
										<img src="'.$graphObject["data"][$i+1]->picture->data->url.'" class="img-rounded" style="width: 100px; height: 100px">
									</div>
									<div class="col-sm-3">
										W.I.P
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>';
	}	
  } catch(FacebookRequestException $e) {

    echo "Exception occured, code: " . $e->getCode();
    echo " with message: " . $e->getMessage();

  }   

}
echo ($_POST['search']);
?>