Vue.component('todo-item', {
  props: ['title'],
  template: `<li>{{title}}<button @click="$emit('remove')">remove</button></li>`
})
let learIs = new Vue({
  el: '#learIs',
  data () {
    return {
      newTodoText: '',
      todos: [
        { id: 1, title: 'Do the dishes' },
        { id: 2, title: 'Take out the trash' },
        { id: 3, title: 'Mow the lawn' }
      ]
    }
  },
  created () {},
  methods: {
    addNewTodo () {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
