// variables utiles 

var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 960,
    height = 500;

// Container

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "dot chart")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");