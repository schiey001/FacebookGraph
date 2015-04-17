<?php
	require_once("includes/facebooksdk/autoload.php");
	
	$page = 'search';
?>
<html>
    <?php include('includes/includes_top.php'); ?>
    <body>
        <?php include('includes/header.php'); ?>
        <br />
        <br />
        <br />
		<div class="container">
			<form id="mainform" action="results/searchbylocationandnameresult.php" method="post">
				<div class="input-group ">
					<input type="text" class="form-control" name="search" placeholder="Search for..." value="<?php if(isset($_GET['search'])){echo($_GET['search']);};?>">
					<span class="input-group-btn">
						<button class="submit btn btn-default" type="submit" id="search">Search</button>
					</span>
				</div>
			</form>
			<img id='loading' src='images/loading.gif' alt='' style="display: none;" />
			<div id='result'>
			</div>
        </div>
        <?php include('includes/footer.php'); ?>
        <?php include('includes/includes_bot.php'); ?>
    </body>
	<script type="text/javascript">
		$(document).ready(function() {
			//$("#result").load("results/searchbylocationandnameresult.php",function() {
		//		$("#loading").hide();
	//		});
			
			$("#mainform").submit(function(e){
				e.preventDefault();
				var form = $(this);
				
				$("#loading").show();
				
				$.ajax({ 
					 url   : form.attr('action'),
					 type  : form.attr('method'),
					 data  : form.serialize(), // data to be submitted
					 success: function(response){
						$("#loading").hide();
						$("#result").append(response); // do what you like with the response
			
						$('.facebook-user').click(function(){
							window.open("http://facebook.com/" + $(this).data("facebookid"));
						});
					 }
				});
				
				return false;
			});
			
			$('.facebook-user').click(function(){
				window.open("http://facebook.com/" + $(this).data("facebookid"));
			});
		});
	</script>
</html>