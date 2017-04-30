//this script block contains all core functionality for BAM that we need regardless of module choice
      //first thing: Load the config. If there is no config, there is no application

            //this section sets up the html to correspond to our configuration file
            //set the page title
            $(document).prop('title', bamConfigJson.bamPageTitle);

            //set the page favicon if different from default
            $('#favicon').attr('href', bamConfigJson.bamFavIocn);

            //set the left title
            $('#navbar-brand').html(bamConfigJson.bamLeftPanelTitleHtml);

            $('#appLicense').html(bamConfigJson.bamApplicationLicenseHtml);

            $('#navbar-image').html(bamConfigJson.bamNavBarImageHtml);
            
//holds the names of the overlay panels
var overlayPanelsList = {};

            //for the side toggle panel     
            var sideSlideToggle = true;
            var rightsideSlideToggle = false;


            $("#left-btn-slide-toggle").click(function() {
                if (sideSlideToggle == true) {
                    $("#left-side-panel").animate({
                        left: "-300",
                    }, 500, function() {
                        // Animation complete.
                        sideSlideToggle = false;
                        //change arrow
                        $("#left-btn-slide-toggle").html('&#9654;');
                    });
                } else {
                    $("#left-side-panel").animate({
                        left: "0",
                    }, 500, function() {
                        // Animation complete.
                        sideSlideToggle = true;
                        $("#left-btn-slide-toggle").html('&#9664;');
                    });
                }
            });
            
            
                $("#right-btn-slide-toggle").click(function() {
                if (rightsideSlideToggle == true) {
                    $("#right-side-panel").animate({
                        right: "-25%",
                    }, 500, function() {
                        // Animation complete.
                        rightsideSlideToggle = false;
                        //change arrow
                        $("#right-btn-slide-toggle").html('&#9664;');
                    });
                } else {
                    $("#right-side-panel").animate({
                        right: "0",
                    }, 500, function() {
                        // Animation complete.
                        rightsideSlideToggle = true;
                        $("#right-btn-slide-toggle").html('&#9654;');
                    });
                }
            });

 //functions
            function inArray(needle, haystack) {
                for (var i = 0; i < haystack.length; i++) {
                    if (haystack[i].properties.id == needle)

                    {
                        haystack[i].properties.count++;
                        return true;
                    }
                }
                return false;
            }