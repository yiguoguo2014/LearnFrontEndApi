Vue.component('todo-item', {
  props: ['todo'],
  template: `<li>{{todo.text}}</li>`
})

let app = new Vue({
  el: '#lear1',
  data: {
    msg: 'Hello Vue',
    seen: true,
    msg1: 'see you seen',
    todos: [
      { text: 'html' },
      { text: 'js' },
      { text: 'css' },
      { text: 'vue' }
    ],
    todoItem: [
      { id: 0, text: 'vuejs' },
      { id: 1, text: 'reactjs' },
      { id: 2, text: 'angularjs' }
    ]
  },
  methods: {
    reverseMsg () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
})

// app.seen = false
app.todos.push({ text: 'new text' })
