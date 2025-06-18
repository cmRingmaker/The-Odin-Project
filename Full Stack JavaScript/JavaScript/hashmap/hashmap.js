class HashMap {
	constructor(capacity = 16, loadFactor = 0.75) {
		this.capacity = capacity
		this.loadFactor = loadFactor
		this.buckets = new Array(capacity)
		this.size = 0 // Keep track of number of [key, value] pairs stored
	}

	hash(key) {
		let hashCode = 0

		const primeNumber = 31
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i)
		}

		return hashCode % this.capacity
	}

	set(key, value) {
		let index = this.hash(key)
		let bucket = this.buckets[index]

		// Add a bucket if there is none
		if (!bucket) {
			this.buckets[index] = []
			bucket = this.buckets[index]
		}

		// If key already exists, update value
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				bucket[i].value = value
				return
			}
		}

		// If there is no key, add it and its value
		bucket.push({ key, value })
		this.size++

		// Double buckets if it reaches the loadFactor % of the capacity
		if (this.size >= this.loadFactor * this.capacity) {
			let oldItems = this._getAllItems() // Save existing data

			// Double the buckets double the fun
			this.capacity *= 2
			this.buckets = new Array(this.capacity)
			this.size = 0 // Reset for doubling

			// Fill new buckets with old data
			for (let i = 0; i < oldItems.length; i++) {
				this.set(oldItems[i].key, oldItems[i].value)
			}
		}
	}

	// Return value for key if found, null otherwise
	get(key) {
		let index = this.hash(key)
		let bucket = this.buckets[index]

		if (!bucket) return null

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				return bucket[i].value
			}
		}

		return null
	}

	// Check if key exists in the hashmap
	has(key) {
		return this.get(key) !== null
	}

	// Remove key-value pair, return true if found, false otherwise
	remove(key) {
		let index = this.hash(key)
		let bucket = this.buckets[index]

		if (!bucket) return false

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				bucket.splice(i, 1)
				this.size--
				return true
			}
		}
		return false
	}

	length() {
		return this.size
	}

	// Remove all entries in the hashmap
	clear() {
		this.buckets = new Array(this.capacity)
		this.size = 0
	}

	keys() {
		return this._getAllItems().map((item) => item.key)
	}

	values() {
		return this._getAllItems().map((item) => item.value)
	}

	// Helper method to get all keys and values
	_getAllItems() {
		const items = []
		for (let i = 0; i < this.buckets.length; i++) {
			if (this.buckets[i]) {
				for (let j = 0; j < this.buckets[i].length; j++) {
					items.push(this.buckets[i][j])
				}
			}
		}

		return items
	}

	// Returns array of [key, value] pairs
	entries() {
		return this._getAllItems().map((item) => [item.key, item.value])
	}
}
