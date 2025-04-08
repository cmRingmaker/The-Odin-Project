// Fibonacci using an iterative approach

function fibs(num) {
	if (num <= 0) return 'Input must be a positive integer.'
	if (num === 1) return [0]
	const arr = [0, 1]

	for (let i = 1; i < num - 1; i++) {
		arr.push(arr[i] + arr[i - 1])
	}

	console.log(arr)
}

fibs(9)
fibs(12)
fibs(20)

//
//
//

// Fibonacci using a recursive approach

function fibsRec(n) {
	if (n <= 0) return 'Input must be a positive integer.'
	if (n === 1) return [0]
	if (n === 2) return [0, 1]

	const arr = fibsRec(n - 1)
	arr.push(arr[arr.length - 1] + arr[arr.length - 2])

	return arr
}

console.log(fibsRec(9))
console.log(fibsRec(12))
console.log(fibsRec(20))
