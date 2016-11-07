WORDS = Object.keys(wordVecs);

function random(a, b) {
	return Math.floor(Math.random() * (b - a) + a);
}

function addVecs(a, b) {
	// add vectors
	var list = Word2VecUtils.composeN(11, a, b); // 11 is number of results
	var diff = Word2VecUtils.diffN(10, a, b); // subtraction
	diff = diff.map(function(x){ return x[0] })
	list = list.filter(function(x) { // filter a and b out of list
		return x[0] != a && x[0] != b && diff.indexOf(x[0]) == -1;
	});
	return list[0][0]; // return first word of list
}
