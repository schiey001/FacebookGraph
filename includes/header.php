<script src="includes/js/fbinitialize.js"></script> 
<script src="includes/js/fblogin.js"></script> 
<div class="navbar navbar-fixed-top">
	<div class="container">
	
	<button class="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	</button>
	
	<a class="navbar-brand" href="#"><img src="images/logo.png" alt="Your Logo"></a>
	
	<div class="nav-collapse collapse navbar-responsive-collapse">
		<ul class="nav navbar-nav">
			<li class="<?php if($page == 'index'){echo 'active';} ?>">
			<a href="index.php">Home</a>
			</li>
			<li class="<?php if($page == 'search'){echo 'active';} ?>">
			<a href="search.php">Search</a>
			</li>
			<li>
			<div class="fbbutton">
				<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
				</fb:login-button>
			</div>
			</li>
			<li>
			<div class="fb-status" id="status">
			</div>
			</li> 
		</ul> <!-- end nav -->
		
		<form class="navbar-form pull-right">
		<input type="text" class="form-control" placeholder="Zoek deze site ..." id="searchInput">
		<button type="submit" class ="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
		</form>
	</div> <!-- end navcollapse -->
	</div> <!-- end container -->
</div> <!-- end navbar -->
<!-- ----------------------------End Navbar ---------------------------------------------- -->       
