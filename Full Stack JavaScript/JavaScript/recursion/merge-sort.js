function mergeSort(arr) {
	if (arr.length <= 1) return arr

	// Split array into halves
	const mid = Math.floor(arr.length / 2)
	const L = arr.slice(0, mid)
	const R = arr.slice(mid)

	// Recursively sort both halves
	const left = mergeSort(L)
	const right = mergeSort(R)

	// Merge both sorted halves
	return merge(left, right)
}

function merge(left, right) {
	const res = []
	let i = 0 // Left index
	let j = 0 // Right index

	// Check both Left and Right
	while (i < left.length && j < right.length) {
		// Get lowest value
		if (left[i] < right[j]) {
			// Push into res
			res.push(left[i])
			// Increment +1
			i++
		} else {
			res.push(right[j])
			j++
		}
	}

	// As long as there's still a value left
	while (i < left.length) {
		// Push it into res
		res.push(left[i])
		// Increment +1
		i++
	}

	while (j < right.length) {
		res.push(right[j])
		j++
	}

	return res
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
