//BAM-d3-cloud.js
//creates a cloud for BAM

var d3ConfigHolder = bamConfigJson.bamD3Config;
var d3NetworksNodeConfigHolder = d3ConfigHolder.nodesConfig;

var chartDiv = document.getElementById(bamConfigJson.bamD3Config.chartDiv);


$("#left-btn-slide-toggle").trigger("click");

drawWordCloud();


function drawWordCloud() {

    var word_count = {};

    //word count is a simple key:count pair, with each key being a separate word

   // var svg_location = "#d3MainChart";
    var width = $(document).width();
    var height = $(document).height();
	//color from the config file
    var fill = d3.scaleOrdinal(bamConfigJson.bamColorPalette);
    
    var sortable = [];

//change this to read the desired tag
//actually, make this a drop down of possibilites. Default to In-degree
//the possibilities are a config file, so we can leave out ones if we want

var d3NetworksGraph = d3.json(bamConfigJson.bamD3Config.cloudData, function(error, graph) {

//load the nodes


console.log(d3NetworksNodeConfigHolder.cloudAttributes);
//d3NetworksNodeConfigHolder.cloudAttributes

    for (var i = 0; i < graph.nodes.length; i++) {
    	var title = getD3AttributeValueFromConfig(graph.nodes[i], d3NetworksNodeConfigHolder.programAttributes.label);
    	//need to ge the attribute determined by the config file
    	//getD3AttributeValueFromConfig(d, d3NetworksNodeConfigHolder.toolTipTitle)
        sortable.push([title, parseFloat((getD3AttributeValueFromConfig(graph.nodes[i], d3NetworksNodeConfigHolder.programAttributes.cloudSizeAttribute)))]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    console.log(sortable);
    
	//+1 due to the numbering of arrays
    var finalTextArray = sortable.slice(0, (d3NetworksNodeConfigHolder.cloudCount + 1));
    var dictionary = {};

    finalTextArray.forEach(function(item, index) {
        dictionary[item[0]] = finalTextArray[index][1];
    });

    var word_entries = d3.entries(dictionary);

    //MAKECONFIG
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(word_entries, function(d) {
            return d.value;
        })])
        .range([d3NetworksNodeConfigHolder.cloudMinText, d3NetworksNodeConfigHolder.cloudMaxText]);

    d3.layout.cloud().size([width, height])
        //MAKECONFIG
        .timeInterval(20)
        .words(word_entries)
        .fontSize(function(d) {
            return xScale(+d.value);
        })
        .text(function(d) {
            return d.key;
        })
        //forces the text to only go vertical or horizontal
            //MAKECONFIG
        .rotate(function() {
            return ~~(Math.random() * 2) * 90;
        })
            //MAKECONFIG
        .font("Impact")
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select(chartDiv).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + [width >> 1, height >> 1] + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) {
                return xScale(d.value) + "px";
            })
                //MAKECONFIG
            .style("font-family", "Impact")
            .style("fill", function(d, i) {
                return fill(i);
            })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) {
                return d.key;
            })
            .on("click", function(d) {
                console.log(d);
            });
    }
    d3.layout.cloud().stop();
    });
}