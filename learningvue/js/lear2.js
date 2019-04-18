let data = {}
let attributename = 'href'
// Object.freeze(data)
let lear2 = new Vue({
  el: '#lear2',
  data: {
    msg: 'bar',
    rawHtml: `<span style="color: red;">红色的</span>`,
    attributename, // 2.6
    url: 'https://www.google.com', // 2.6
    someattr: 'blur' // 2.6
  },
  methods: {
    handleCustom (event) {
      console.log(event)
      this.msg = 'custom'
    }
  }
})

console.log(lear2.$data === data)
console.log(lear2.$el === document.getElementById('lear2'))
lear2.$watch('msg', function (newVal, oldVal) {
  console.log(newVal, oldVal)
})
