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
            <div class="row">
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
            </div>
            <!--				<div class="last col-sm-4">
                                                    <h4>Which</h4>
                                                    <div class="checkbox">
                                                            <label>
                                                                    <span>Are named</span><input class="search-helper-value" value="named" type="checkbox">
                                                            </label>
                                                    </div>
                                                    <div class="checkbox">
                                                            <label>
                                                                    <span>Live in</span><input class="search-helper-value" value="who live in" type="checkbox">
                                                            </label>
                                                    </div>
                                                    <div class="checkbox">
                                                            <label>
                                                                    <span>Are aged</span><input class="search-helper-value" value="who are aged" type="checkbox">
                                                            </label>
                                                    </div>
                                            </div>-->
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

                        $('.facebook-user').click(function () {
                            // window.open("http://facebook.com/" + $(this).data("facebookid"));
                            window.open("data/profiles/" + $(this).data("facebookid"));
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
                    else {
                        text += $(this).val() + ", ";
                    }
                });

                $("#search-field").val(text);

            });
        });
    </script>

    <script language="JavaScript" type="text/javascript">
        function attachText()
        {
            document.getElementById('search-Field').value = (document.getElementById('name').value);
        }
    </script>

</html>