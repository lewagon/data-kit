// Scale

var x = d3.scale.linear()
    .domain(d3.extent(data, function(d) { return d.x; }))
    .range([0, width - margin.left - margin.right]);

var y = d3.scale.linear()
    .domain(d3.extent(data, function(d) { return d.y; }))
    .range([height - margin.top - margin.bottom, 0]);