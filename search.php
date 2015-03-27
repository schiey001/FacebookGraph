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
			<form action="search.php">
				<div class="input-group ">
					<input type="text" class="form-control" name="search" placeholder="Search for..." value="<?php if(isset($_GET['search'])){echo($_GET['search']);};?>">
					<span class="input-group-btn">
						<button class="submit btn btn-default" type="submit" id="search">Search</button>
					</span>
				</div>
			</form>
			<?php
				if(isset($_GET["search"]) && !empty($_GET["search"])) {
					echo "<img id='loading' src='images/loading.gif' alt="" />
							<div id='result'>
							</div>
							<br />";
				}
			?>
        </div>
        <?php include('includes/footer.php'); ?>
        <?php include('includes/includes_bot.php'); ?>
    </body>
	<script type="text/javascript">
		$(document).ready(function() {
			$("#result").load("result.php",function() {
				$("#loading").hide();
			});
		});
	</script>
</html>

