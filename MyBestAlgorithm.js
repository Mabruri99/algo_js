function processData(input) {
	var result = []
	for (var word of input) {
		var arr = word.split(';')
		if (arr[0] === 'S') {
			var str = spaceString(arr[arr.length - 1])

			if (arr[1] === 'V') {
				result.push(camelCaseLow(str))
			}
			if (arr[1] === 'M') {
				if (str[str.length - 1] === ')') {
					result.push(camelCaseLow(str).replace('()', ''))
				} else {
					result.push(camelMethod(str))
				}
			}
			if (arr[1] === 'C') {
				if (str === camelCaseUp(str)) {
					result.push(camelCaseLow(str))
				} else {
					result.push(camelCaseUp(str))
				}
			}
		}
		if (arr[0] === 'C') {
			var string = arr[arr.length - 1]
			if (arr[1] === 'V') {
				var low = camelCaseLow(string)
				result.push(combineString(low))
			}
			if (arr[1] === 'M') {
				var method = camelMethod(string)
				result.push(combineString(method))
			}
			if (arr[1] === 'C') {
				var up = camelCaseUp(string)
				result.push(combineString(up))
			}
		}
	}

	for (var nice of result) {
		console.log(nice)
		console.log('')
	}
}

function spaceString(str) {
	var result = ''
	for (var i = 0; i < str.length; i++) {
		if (str[i] == str[i].toUpperCase()) {
			if (i !== 0 && str[i] !== '(' && str[i] !== ')') {
				result += ' '
			}
		}
		result += str[i]
	}
	return result
}

function combineString(str) {
	var result = ''
	for (var i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			result += str[i]
		}
	}
	return result
}

function camelCaseUp(str) {
	var arr = str.split(' ')
	var result = []
	for (var word of arr) {
		result.push(word[0].toUpperCase() + word.slice(1))
	}
	return result.join(' ')
}

function camelCaseLow(str) {
	var arr = str.split(' ')
	var result = []
	for (var word of arr) {
		result.push(word[0].toLowerCase() + word.slice(1))
	}
	return result.join(' ')
}

function camelMethod(str) {
	var arr = str.split(' ')
	var result = []
	for (var i = 0; i < arr.length; i++) {
		if (i > 0) {
			result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
		} else {
			result.push(arr[i])
		}
	}
	return result.join(' ') + '()'
}

processData([ 'S;V;iPad', 'C;M;mouse pad', 'C;C;code swarm', 'S;C;OrangeHighlighter' ])
