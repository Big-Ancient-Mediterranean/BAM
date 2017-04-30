//BAM-cleanup.js
//this file fires off any housekeeping we have - mostly to assign listener behavior to any panels, etc
//


//loop through our list of overlays, assign the same behavior to each one that is of the overlay class
for (var key in overlayPanelsList) {
    if (overlayPanelsList.hasOwnProperty(key)) {
    //make the panel draggable
    $('#' + key).draggable();
    //if you click on the x, the panel will close
    $('#' + key + 'Close').mousedown(function() {
        $('.nonMapOverlay').hide(); // hides everything, as that is the default for display anyway
        });
    }
}

//escape key closes the attribute pane and restores the network.
$(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode '27'
        //hide all panels which have the non-map overlay class
        $('.nonMapOverlay').hide(); // hides
    }
});


       //accordion layout

                var acc = document.getElementsByClassName("accordion");
                var i;

                for (i = 0; i < acc.length; i++) {
                    acc[i].onclick = function() {
                        this.classList.toggle("active");
                        if( this.nextElementSibling){
                        this.nextElementSibling.classList.toggle("show");
                        }
                    }
                }