import { Node } from './node.js'

export class LinkedList {
	constructor() {
		this.HEAD = null // First element of the list
		this.TAIL = null // Last element of the list
		this.length = 0 //  Size of the list
	}

	// Adds a new node containing value to the end of the list
	append(value) {
		const newNode = new Node(value)

		// If list is empty, set HEAD and TAIL, +1 length, and return
		if (this.ifEmpty(newNode)) return

		// Otherwise, add to the end
		this.TAIL.next = newNode
		this.TAIL = newNode
		this.length++
	}

	// Adds a new node containing value to the start of the list
	prepend(value) {
		const newNode = new Node(value)

		// If list is empty, set HEAD and TAIL, +1 length, and return
		if (this.ifEmpty(newNode)) return

		// Otherwise, add to the beginning
		newNode.next = this.HEAD
		this.HEAD = newNode
		this.length++
	}

	// Returns the total number of nodes in the list
	size() {
		return this.length
	}

	// Returns the first node in the list
	head() {
		return this.HEAD
	}

	// Returns the last node in the list
	tail() {
		return this.TAIL
	}

	// Returns the node at the given index
	at(index) {
		// Out of bounds check
		if (index < 0 || index >= this.length) return null

		// Traverse to the node at position "index"
		let current = this.HEAD
		for (let i = 0; i < index; i++) {
			current = current.next
		}

		return current
	}

	// Removes the last element from the list
	pop() {
		// If list is empty, do nothing
		if (!this.HEAD) return null

		// If there's only one node
		if (this.HEAD === this.TAIL) {
			this.HEAD = null
			this.TAIL = null
			this.length = 0
			return
		}

		// Find the second to last node
		let current = this.HEAD
		while (current.next !== this.TAIL) {
			current = current.next
		}

		// Remove the last node
		current.next = null
		this.TAIL = current
		this.length--
	}

	// Returns true if the passed in value is in the list and otherwise returns false.
	contains(value) {
		if (!this.HEAD) return false

		let current = this.HEAD
		while (current !== null) {
			if (value === current.value) return true
			current = current.next
		}

		return false
	}

	// Returns the index of the node containing value, or null if not found.
	find(value) {
		let index = 0

		let current = this.HEAD
		while (current !== null) {
			if (value === current.value) return index
			index++
			current = current.next
		}

		return null
	}

	// Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
	// The format should be: ( value ) -> ( value ) -> ( value ) -> null
	// return `LinkedList with ${this.size} nodes.`
	toString() {
		if (!this.HEAD) return `null`

		let str = ''
		let current = this.HEAD

		while (current !== null) {
			str += `( ${current.value} ) -> `
			current = current.next
		}

		// Append null to indicate the end of the list
		str += `null`

		return str
	}

	//
	//
	// EXTRA CREDIT:
	// EC Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

	// Insert a new node with the provided value at the given index.
	insertAt(value, index) {
		// Check if list is empty or out of bounds
		if (!this.HEAD || index < 0 || index > this.length) return

		// Prepend if user gives a 0 for index
		if (index === 0) {
			this.prepend(value)
			return
		}

		// Append if inserting at the end of the list
		if (index === this.length) {
			this.append(value)
			return
		}

		let newNode = new Node(value)

		let previousNode = this.at(index - 1) // Get node before insertion point
		let nextNode = previousNode.next // Save the node that will come after new node
		previousNode.next = newNode // Connect previous node to new node
		newNode.next = nextNode // Connect new node  to the next node

		this.length++
	}

	// Remove the node at the given index.
	removeAt(index) {
		if (!this.HEAD || index < 0 || index > this.length) return

		if (index === 0) {
			this.HEAD = this.HEAD.next

			if (this.length === 1) {
				this.TAIL = null // If removing only node, also update tail
			}

			this.length--
			return
		}

		let previousNode = this.at(index - 1) // Get node before target
		let nodeToRemove = previousNode.next // Target node
		let nextNode = nodeToRemove.next // New "next" linked node

		// Update links
		previousNode.next = nextNode

		// If removing the last node, update tail
		if (index === this.length - 1) {
			this.TAIL = previousNode
		}

		this.length--
	}

	// Checks if list is empty
	ifEmpty(newNode) {
		if (!this.HEAD) {
			this.HEAD = newNode
			this.TAIL = newNode
			this.length++ // Grow length of list
			return true // List was empty, node added
		}

		return false // List was not empty, nothing done
	}
}
