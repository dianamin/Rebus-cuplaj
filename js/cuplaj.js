var graph = [];
var words = [];
var result = [];

var a = [], b = [], visited = [];

var shuffle = function(a) {
	var l = a.length - 1;
	for (var i = l; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var aux = a[i];
		a[i] = a[j];
		a[j] = aux;
	}
	console.log(a);
	return a;
}

var buildGraph = function() {
	a = [];
	b = [];
	graph = [];
	visited = [];

	words = shuffle(words);

	var resultLength = result.length;
	var possibleWordsLength = words.length;
	var currentNodes = [];

	for (var i = 0; i < resultLength; i++) {
		var character = result[i];
		currentNodes = [];
		for (var j = 0; j < possibleWordsLength; j++) {
			var word = words[j].word;
			var wordLength = word.length;
			var done = false;
			for (var k = 0; k < wordLength && !done; k++) {
				if (word[k] == character) {
					done = true;
					currentNodes.push(j);
				}
			}
		}
		graph.push(currentNodes);
		b[i] = -1;
	}

	for (var i = 0; i < possibleWordsLength; i++) {
		a[i] = -1;
		visited[i] = false;
	}
}

var DFS = function(node) {
	if (visited[node]) {
		return false;
	}
	visited[node] = true;

	var length = graph[node].length;
	for (var i = 0; i < length; i++) {
		var son = graph[node][i];
		if (a[son] == -1) {
			a[son] = node;
			b[node] = son;
			return true;
		}
	}
	for (var i = 0; i < length; i++) {
		var son = graph[node][i];
		if (DFS(a[son])) {
			a[son] = node;
			b[node] = son;
			return true;
		}
	}

	return false;
}

var cuplaj = function() {
	var done = false;

	var resultLength = result.length;

	while (!done) {
		done = true;
		for (var i = 0; i < resultLength; i++) {
			visited[i] = false;
		}
		for (var i = 0; i < resultLength; i++) {
			if (b[i] == -1) {
				if (DFS(i)) {
					done = false;
				}
			}
		}
	}
}

var log = function() {
	buildGraph();
	cuplaj();
	var resultLength = result.length;
	for (var i = 0; i < resultLength; i++) {
		console.log(b[i]);
	}
}

var returnWords = function(words_array, result_word) {
	words = words_array;
	result = result_word;
	buildGraph();
	cuplaj();
	var crossWord = {
		"result": result,
		"words": []
	};

	var ok = true;

	var resultLength = result.length;
	console.log(b);
	for (var i = 0; i < resultLength && ok; i++) {
		if (b[i] == -1) {
			ok = false;
		}
		var position = -1;
		var letters = [];
		for (var j = 0; j < words[b[i]].word.length; j++) {
			if (words[b[i]].word[j] == result[i] && position == -1) position = j;
			letters.push({
				"letter": words[b[i]].word[j],
				"index": j
			});
		}
		crossWord.words.push({
			"value": words[b[i]].word,
			"position": position,
			"letters": letters,
			"index": i,
			"correct": false,
			"description": words[b[i]].description
		});
	}
	if (ok) return crossWord;
	return "Not possible";
}