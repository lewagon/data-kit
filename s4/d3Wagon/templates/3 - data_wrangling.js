// Data Wrangling


// Boucler pour crééer un tableau data à partir d'un csv

var data =[];

csv.forEach(function(d, i) {

data.push({

x : parseFloat(d.x),
y: parseFloat(d.y),
type: d.type,
index: i

})
});

// Récupérer le maximum d'un tableau d'objet

d3.max(data,function(d, i) {return parseFloat(d.value);});

// Nester un tableau 

d3.nest().key(function(d) {return d.type;}).map(data);

// Nester un tableau et lui appliquer une fonction à chaque noeud, par exemple une moyenne

d3.nest().key(function(d) {return d.type;})
		 .rollup(function(e) {d3.mean(e, function(f) {f.value;})})
		 .map(data);
