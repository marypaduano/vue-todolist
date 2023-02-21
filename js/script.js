

const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Comprare il pomodoro',
                    done: '',
                },
                {
                    text: 'Preparare la lasagna',
                    done: '',
                },
                {
                    text: 'Comprare vino rosso',
                    done: '',
                },
                {
                    text: 'Friggere le chiacchiere',
                    done: '',
                },
                {
                    text: 'Lanciare i coriandoli',
                    done: '',
                },
            ],
            newTaskText: ''
        }
    },
    methods: {
        addTask(taskText) {
            const newTask = {
                text: taskText,
                done: false,
            }
            this.tasks.push(newTask)
        },

        doneTask(task) {
            task.done = true
        },

        deleteTask(task) {
            const index = this.tasks.indexOf(task)
            this.tasks.splice(index, 1)
        }
    }
}
).mount('#app')