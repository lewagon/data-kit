// Axis

var x = d3.scale.linear()
    .domain(d3.extent(data, function(d) { return d.x; }))
    .range([0, width - margin.left - margin.right]);

var y = d3.scale.linear()
    .domain(d3.extent(data, function(d) { return d.y; }))
    .range([height - margin.top - margin.bottom, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickPadding(8);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickPadding(8);
    
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y.range()[0] + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);