// Set our margins
var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 60
},
width = 700 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

// Our X scale
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

// Our Y scale
var y = d3.scale.linear()
    .rangeRound([height, 0]);

// Our color bands
var color = d3.scale.ordinal()
    .range(["#308fef", "#5fa9f3", "#1176db"]);

// Use our X scale to set a bottom axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

// Same for our left axis
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".2s"));

console.log("Margins");