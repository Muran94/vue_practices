app.component('todo-list', {
  props: {
    todos: {
      type: Array,
      required: true,
    }
  },
  template:
  /* html */
  `
  <div class="panel todo-list">
    <div class="todo-item" :class="{ 'todo-item--checked': todo.isDone }" v-for="todo in todos" :key="todo.id" @click="checkTodo(todo.id)">
      <div class="todo-checkbox"></div>
      <div class="todo-name">{{ todo.name }}</div>
    </div> 
  </div>
  `,
  methods: {
    checkTodo(id) {
      this.$emit('todo-checked', id)
    }
  }
})
