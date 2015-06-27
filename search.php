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
            <!-- <div class="row">
                <span id="search-helper-toggle" class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
            </div>
            <div class="container">
                <div id="search-helper" class="row">
                    <div class="col-sm-3">
                        <h4>Show me the</h4>
                        <div class="checkbox">
                            <label>
                                <input class="search-helper-value" value="Location" type="checkbox"> Location
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input class="search-helper-value" value="Birthplace" type="checkbox"> Birthplace
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input class="search-helper-value" value="Birthdate" type="checkbox"> Birthdate
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input class="search-helper-value" value="Education" type="checkbox"> Education
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <h4>Of</h4>
                        <label>
                            <input class="search-helper-value" type="radio" name="of" value="people" checked="checked" /> People
                        </label> 
                        <label>
                            <input class="search-helper-value" type="radio" name="of" value="places" /> Places
                        </label>
                    </div>
                    <div class="col-sm-6">
                        <h4>Who/Which</h4>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="name">Are Named:</label>
                            <div class="col-sm-10">          
                                <input type="name" class="form-control" id="name" placeholder="Name ..." onChange="javascript:attachText();">
                            </div>
                            <div class="row"><br></div>
                            <div class="row"><br></div>

                            <label class="control-label col-sm-2" for="liveIn">Live In:</label>
                            <div class="col-sm-10">          
                                <input type="liveIn" class="form-control" id="liveIn" placeholder="Live In ..." onChange="javascript:attachText();">
                            </div>

                            <div class="row"><br></div>
                            <div class="row"><br></div>

                            <label class="control-label col-sm-2" for="aged">Are Aged:</label>
                            <div class="col-sm-10">          
                                <input type="aged" class="form-control" id="aged" placeholder="Aged ..." onChange="javascript:attachText();">
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
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
						
						$('.friends-search').click(function(){
							$("#search-field").val("friends of user with id " + $(this).data("facebookid"));
							$("#mainform").submit();
						});
                    }
                });

                return false;
            });

            $("#search-helper-toggle").click(function () {
                if ($("#search-helper").is(":visible")) {
                    $("#search-helper").fadeOut();
                }
                else {
                    $("#search-helper").fadeIn();
                }
            });

            $(".search-helper-value").change(function () {
                var text = "";
                var of = "of ";
                $(".search-helper-value:checked").each(function () {
                    if ($(this).is(":radio")) {
                        text += of;
                        text += $(this).val() + " ";
                    }
                    else if($(this).is(":checkbox")) {
                        text += $(this).val() + ", ";
                    } 
					else {
                        text += document.getElementById('name').value;
                    }
                });

                $("#search-field").val(text);

            });
        });
    </script>

    <script language="JavaScript" type="text/javascript">
        function attachText()
        {
            document.getElementById('search-field').value += (document.getElementById('name').value);
        }
    </script>

</html>