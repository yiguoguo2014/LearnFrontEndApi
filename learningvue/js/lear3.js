const lear3 = new Vue({
  el: '#lear3',
  data: {
    msg: 'hello',
    lastMsg: 'Foo Bar'
  },
  computed: {
    comMsg () {
      return this.msg.split('').reverse().join('')
    },
    fullName: {
      set(newVal) {
        let names = newVal.split('')
        this.msg = names[0]
        this.lastMsg = names[names.length - 1]
      },
      get () {
        return this.msg + this.lastMsg
      }
    }
  }
})

lear3.fullName = 'joho don'
