<?php
	require_once("includes/facebooksdk/autoload.php");

	$page = 'search';
?>
<html>
    <?php include('includes/includes_top.php'); ?>
    <body>
        <?php include('includes/header.php'); ?>
        <div class="container">
            <div class="row">
                <form id="mainform" action="api/handlesearch.php" method="post">
                    <div class="input-group">
                        <input id="search-field" type="text" class="form-control" name="q" placeholder="Search for..." value="<?php
							if (isset($_GET['search'])) {
								echo($_GET['search']);
							}
							?>">
                        <span class="input-group-btn">
                            <button class="submit btn btn-default" type="submit" id="search">Search</button>
                        </span>
                    </div>
                </form>
                <img id='loading' src='images/loading.gif' alt='' style="display: none;" />
                <div id='result' class="row">

                </div>
            </div>
        </div>
        <?php include('includes/footer.php'); ?>
        <?php include('includes/includes_bottom.php'); ?>
    </body>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#mainform").submit(function (e) {
                e.preventDefault();
                var form = $(this);

                $("#loading").show();

                $.ajax({
                    url: form.attr('action'),
                    type: form.attr('method'),
                    data: form.serialize(),
                    success: function (response) {
                        $("#loading").hide();
                        $("#result").html(response);

                        $('.picture').click(function () {
                            // window.open("http://facebook.com/" + $(this).data("facebookid"));
                            window.open("data/profile/?id=" + $(this).data("facebookid"));
                        });
						
						$('.photos-search').click(function(){
							$("#search-field").val("photos of user with id " + $(this).data("facebookid"));
							$("#mainform").submit();
						});
						
						$('.friends-search').click(function(){
							$("#search-field").val("friends of user with id " + $(this).data("facebookid"));
							$("#mainform").submit();
						});
						
						// Temp fix for photos search returning bugged images
						$('.photo-result').each(function(){
							if ($(this).attr('src') == "alt=''/"){
								$(this).hide();
							}
						});
                    }
                });

                return false;
            });
        });
    </script>
</html>