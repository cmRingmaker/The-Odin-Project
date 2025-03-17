export default class TODO {
	static createTask(taskContent, taskPriority, projectName, taskDate) {
		// Create new Task
		const div = document.createElement('div')
		div.classList.add('task')
		// div.innerText = taskContent

		const taskCheckbox = document.createElement('input')
		taskCheckbox.type = 'checkbox'

		const taskContentText = document.createElement('span')
		taskContentText.innerText = taskContent
		taskContentText.classList.add('task-content')

		// Create a fake ::before with a span to change colors to indicate priority
		const priority = document.createElement('span')
		priority.classList.add('priority', taskPriority)

		// Create Project Header inside Task div
		const project = document.createElement('div')
		project.classList.add('project')
		project.innerText = projectName || 'All Projects'

		const editTask = document.createElement('div')
		editTask.classList.add('edit')
		editTask.innerText = 'EDIT'

		editTask.addEventListener('click', () => {
			console.log('EDIT ME!')
			const newContent = prompt('Enter new task content:', taskContent)
			if (newContent !== null) {
				taskContentText.innerText = newContent
				// Update the task in localStorage
				const tasks = JSON.parse(localStorage.getItem('tasks')) || []
				const taskIndex = tasks.findIndex(
					(task) =>
						task.content === taskContent &&
						task.priority === taskPriority &&
						task.project === projectName &&
						task.time === taskDate
				)
				if (taskIndex !== -1) {
					tasks[taskIndex].content = newContent
					localStorage.setItem('tasks', JSON.stringify(tasks))
				}
			}
		})

		const delTask = document.createElement('div')
		delTask.classList.add('delete')
		delTask.innerText = 'DELETE'

		delTask.addEventListener('click', () => {
			const confirmed = confirm('Are you sure you want to delete this task?')
			if (confirmed) {
				div.remove()
				// Remove the task from localStorage
				const tasks = JSON.parse(localStorage.getItem('tasks')) || []
				const taskIndex = tasks.findIndex(
					(task) =>
						task.content === taskContent &&
						task.priority === taskPriority &&
						task.project === projectName &&
						task.time === taskDate
				)
				if (taskIndex !== -1) {
					tasks.splice(taskIndex, 1)
					localStorage.setItem('tasks', JSON.stringify(tasks))
				}
			}
		})

		div.addEventListener('click', (e) => {
			if (!e.target.matches('.edit, .delete')) {
				taskCheckbox.checked = !taskCheckbox.checked

				console.log('CHECK MEEEEEEEEEEE')
				// Save the checkbox state to localStorage
				const tasks = JSON.parse(localStorage.getItem('tasks')) || []
				const taskIndex = tasks.findIndex(
					(task) =>
						task.content === taskContent &&
						task.priority === taskPriority &&
						task.project === projectName &&
						task.time === taskDate
				)

				if (taskIndex !== -1) {
					tasks[taskIndex].checked = taskCheckbox.checked
					localStorage.setItem('tasks', JSON.stringify(tasks))
				}
			}
		})

		const time = document.createElement('div')
		time.classList.add('taskTime')
		time.innerText = taskDate || ''

		div.append(
			priority,
			taskCheckbox,
			taskContentText,
			project,
			time,
			editTask,
			delTask
		)
		return div
	}
}
