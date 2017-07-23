//Bam-timeline.js
//timeline functionality for BAM

//start the timeline collapsed 
//$('#timelineHolder').attr('style','top: -251px');


            //now for the timeline
            var timeDomElement = "#timeline";
	            //should make this a config
            var sourceFile = "data/iclaw-base.csv";

    d3.csv(sourceFile, function(dataset) {
    
    
                timeline(timeDomElement)
                    .data(dataset)
                    .band("naviBand", .9)
                    .tooltips("naviBand")
                    .xAxis("naviBand")
                    .brush("naviBand")
                    .redraw();
                    
                    var topSlideToggle = true;
                    
                    $( "#timelineHolder" ).append('<div id="btn-top-toggle"><img src="../BAM/images/open-iconic/clock.svg" class="topToggle" alt="clock"></div>');


$("#btn-top-toggle").click(function() {
                if (topSlideToggle == true) {
                    $("#timelineHolder").animate({
                        top: "-245",
                    }, 500, function() {
                        // Animation complete.
                        topSlideToggle = false;
                    });
                } else {
                    $("#timelineHolder").animate({
                        top: "0",
                    }, 500, function() {
                        // Animation complete.
                        topSlideToggle = true;
                    });
                }
            });
            });
            
            