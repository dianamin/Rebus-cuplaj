/*
	Algoritmul de cuplaj maxim în graf bipartit
	http://www.infoarena.ro/job_detail/1373102?action=view-source
*/

var graph = [];
var words = [];
var result = [];

var a = [], b = [], visited = [];

/*
	a[x] = numărul literei din cuvântul rezultat cu care poate fi cuplat cuvântul al x-lea din vectorul words
	b[x] = numărul cuvântului din vectorul words cu care poate fi cuplată litera a x-a din cuvântul rezultat
*/

var shuffle = function(a) {
	/*
		Funcție pentru amestecarea valorilor unui vector.
	*/
	var l = a.length - 1;
	for (var i = l; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var aux = a[i];
		a[i] = a[j];
		a[j] = aux;
	}
	return a;
}

var buildGraph = function() {
	a = [];
	b = [];
	graph = [];
	visited = [];

	/*
		Amestec cuvintele pentru a avea de fiecare dată un rezultat diferit.
	*/

	words = shuffle(words);


	var resultLength = result.length;
	var possibleWordsLength = words.length;
	var currentNodes = [];

	/*
		Construiesc graful bipartit.
		Nodurile din partea stânga a grafului vor reprezenta literele din cuvântul rezultat.
		Nodurile din partea dreaptă a grafului vor reprezenta cuvintele din vectorul word.
		Voi avea muchie între un nod din partea stângă și unul din partea dreaptă dacă litera asociată nodului din stânga se regăsește în cuvântul asociat nodului din dreapta.
	*/

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

	/*
		Încerc să cuplez nodul (litera) transmis ca parametru.
	*/

	if (visited[node]) {
		return false;
	}
	visited[node] = true;

	var length = graph[node].length;

	/*
		Mai întâi, verific dacă nodurile-cuvinte legate de nodul-literă sunt cuplate cu un alt nod literă.
		Dacă găsesc unul care nu e cuplat, atunci îl cuplez cu nodul-literă transmis ca parametru.
	*/

	for (var i = 0; i < length; i++) {
		var son = graph[node][i];
		if (a[son] == -1) {
			a[son] = node;
			b[node] = son;
			return true;
		}
	}

	/*
		Dacă toate nodurile-cuvinte sunt cuplate, atunci verific dacă există vreun nod-literă la care un nod-cuvânt este cuplat astfel încât să îl pot cupla cu alt cuvânt.
		Dacă există, atunci îl voi recupla, iar nodul-cuvânt rămas necuplat va fi cuplat cu nodul-literă transmis ca parametru.
	*/
	for (var i = 0; i < length; i++) {
		var son = graph[node][i];
		if (DFS(a[son])) {
			a[son] = node;
			b[node] = son;
			return true;
		}
	}

	/*
		Nu am reușit să cuplez nodul.
	*/

	return false;
}

var cuplaj = function() {
	/*
		Cuplez nodurile litere
	*/

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
	/*
		Dacă pot obține un rebus pentru result_word, îl returnez.
	*/

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