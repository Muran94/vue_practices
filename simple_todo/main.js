const app = Vue.createApp({
  data() {
    return {
      todos: [
        { id: 1, name: "Timecloud登録", isDone: false },
        { id: 2, name: "稼働登録", isDone: false },
        { id: 3, name: "Slack起動 & テンプレ貼り付け", isDone: false },
      ],
      todoName: '',
    }
  },
  methods: {
    checkTodo(id) {
      const todoIndex = this.todos.findIndex(todo => { return todo.id === id })
      const todo      = this.todos[todoIndex]

      todo.isDone = !todo.isDone
      this.todos.splice()
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
})
