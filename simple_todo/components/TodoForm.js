app.component('todo-form', {
  template:
  /*html*/
  `
  <div class="panel todo-form">
    <div class="form">
      <div class="form-field">
        <div class="form-label">TODO名</div>
        <input type="text" v-model="todoName" class="form-input"/>
      </div>

      <div class="form-field">
        <div class="form-button" @click="addTodo">追加する</div>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      todoName: ''
    }
  },
  methods: {
    addTodo() {
      if (this.todoName === '') {
        alert('TODO名を入力してください。')
        return
      }

      const todo = {
        id:     Math.random().toString(32).substring(2),
        name:   this.todoName,
        isDone: false
      }

      this.$emit('todo-submitted', todo)

      this.todoName = ''
    }
  }
})
