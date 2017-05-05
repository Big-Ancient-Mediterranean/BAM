//this script block contains all core functionality for BAM that we need regardless of module choice
//first thing: Load the config. If there is no config, there is no application
//this section sets up the html to correspond to our configuration file
//set the page title
$(document).prop('title', bamConfigJson.bamBaseInfo.pageTitle);

//set the page favicon if different from default
$('#favicon').attr('href', bamConfigJson.bamBaseInfo.favIocn);

//set the left title
$('#navbar-brand').html(bamConfigJson.bamNavigationPanel.panelTitle);

$('#appLicense').html(bamConfigJson.bamBaseInfo.applicationLicenseHtml);

$('#navbar-image').html(bamConfigJson.bamNavigationPanel.splashImage);

//holds the names of the overlay panels
var overlayPanelsList = {};

//for the side toggle panels    
var sideSlideToggle = true;
var informationToggle = false;


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

function getD3AttributeValueFromConfig(d, configParameter) {
    if (configParameter.holder == 'attributes') {
        return d.attributes[configParameter.attribute]
    } else {
        return d[configParameter.attribute];
    }
}

function makeDataTablesColumnsSearchable(table, tableLocation) {
    $('#' + tableLocation + ' thead th').each(function() {
        var title = $(this).text();
        $(this).append('<br /><input type="text" placeholder="Search ' + title + '" />');
    });

    table.columns().every(function() {
        var that = this;

        $('input', this.header()).on('keyup change', function() {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
}

function informationPaneToggle(toggle, pane, button) {
    if (toggle == false) {
        $('#' + pane).animate({
            right: "0",
        }, 500, function() {
            // Animation complete.
            $('#' + button).html('&#9654;');
        });
        toggle = true;
    } else {
        $('#' + pane).animate({
            right: "-25%",
        }, 500, function() {
            // Animation complete.
            $('#' + button).html('&#9664;');
        });
        toggle = false;
    }
    return toggle;
}


function populateBamDataTableFromNode(columns, node, holder) {
        var tableDataHolder = {};
        for (var entry in columns) {
            tableDataHolder[columns[entry].data] = getD3AttributeValueFromConfig(node, columns[entry].bamAttributes);
        }
        holder.push(tableDataHolder);
    }