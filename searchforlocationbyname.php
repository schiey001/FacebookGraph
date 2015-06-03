<?php
require_once("includes/facebooksdk/autoload.php");

$page = 'search';
?>
<html>
    <?php include('includes/includes_top.php'); ?>
    <body>
        <?php include('includes/header.php'); ?>
        <div class="container">
            <form id="mainform" action="results/searchforlocationbynameresult.php" method="post">
                <div class="input-group">
                    <input type="text" class="form-control" name="q" id="searchBar" placeholder="Search for..." value="<?php
                    if (isset($_GET['search'])) {
                        echo($_GET['search']);
                    };
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

        <div class="container" type="searchfields">

            <div class="col-12"><br></div>
            <div class="row">
                <span id="search-helper-toggle" class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
            </div>
            <div id="search-helper" class="row">
                <div class="form-group">
                    <label class="control-label col-1" for="name">Name:</label>
                    <div class="col-5">          
                        <input type="name" class="form-control" id="name" placeholder="Name ..." onChange="javascript:attachText();">
                        <script>
                            $('.myElements').each(function () {
                                var elem = $(this);

                                // Save current value of element
                                elem.data('oldVal', elem.val());

                                // Look for changes in the value
                                elem.bind("propertychange change click keyup input paste", function (event) {
                                    // If value has changed...
                                    if (elem.data('oldVal') != elem.val()) {
                                        // Updated stored value
                                        elem.data('oldVal', elem.val());



                                    }
                                });
                            });
                        </script>
                    </div>

                    <label class="control-label col-1" for="location">Location:</label>
                    <div class="col-5">          
                        <input type="location" class="form-control" id="location" placeholder="Location ..." onChange="javascript:attachText();">
                    </div>
                </div>

                <div class="col-12"><br></div>

                <div class="form-group">
                    <label class="control-label col-1" for="birthplace">Birthplace:</label>
                    <div class="col-5">          
                        <input type="birthplace" class="form-control" id="birthplace" placeholder="Birthplace ..." onChange="javascript:attachText();">
                    </div>

                    <label class="control-label col-1" for="birthdate">Birthdate:</label>
                    <div class="col-5">          
                        <input type="birthdate" class="form-control" id="birthdate" placeholder="Birthdate ..." onChange="javascript:attachText();">
                    </div>
                </div>

                <div class="col-12"><br></div>

                <div class="form-group">
                    <label class="control-label col-1" for="study">Study:</label>
                    <div class="col-5">          
                        <input type="study" class="form-control" id="study" placeholder="Study ..." onChange="javascript:attachText();">
                    </div>

                    <label class="control-label col-1" for="work">Work:</label>
                    <div class="col-5">          
                        <input type="work" class="form-control" id="work" placeholder="Work ..." onChange="javascript:attachText();">
                    </div>
                </div>

            </div>
            </div>

            <?php include('includes/footer.php'); ?>
            <?php include('includes/includes_bottom.php'); ?>
    </body>
    <script type="text/javascript">
        $(document).ready(function () {
            
            			$("#search-helper-toggle").click(function(){
				if($("#search-helper").is(":visible")){
					$("#search-helper").fadeOut();
				}
				else {
					$("#search-helper").fadeIn();
				}
			});

            
            $("#mainform").submit(function (e) {
                e.preventDefault();
                var form = $(this);

                $("#loading").show();

                $.ajax({
                    url: form.attr('action'),
                    type: form.attr('method'),
                    data: form.serialize(), // data to be submitted
                    success: function (response) {
                        $("#loading").hide();
                        $("#result").append(response); // do what you like with the response

                        $('.facebook-user').click(function () {
                            // window.open("http://facebook.com/" + $(this).data("facebookid"));
                            window.open("data/profiles/" + $(this).data("facebookid"));
                        });
                    }
                });

                return false;
            });
        });
    </script>

    <script language="JavaScript" type="text/javascript">
        function attachText()
        {
            document.getElementById('searchBar').value = (document.getElementById('name').value + " " + document.getElementById('location').value + " " + document.getElementById('birthplace').value + " " + document.getElementById('birthdate').value + " " + document.getElementById('study').value + " " + document.getElementById('work').value);
        }
    </script>
</html>