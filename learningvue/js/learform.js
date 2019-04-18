'use strict'
let learForm = new Vue({
  el: '#form',
  data () {
    return {
      input1: '',
      textarea1: '',
      input2: false,
      input3: [
        { id: '1', title: 'Jack' },
        { id: '2', title: 'John' },
        { id: '3', title: 'Mike' }
      ],
      checkedNames: [],
      input4: [
        { id: '4', name: 'one' },
        { id: '5', name: 'two' }
      ],
      radioNames: '',
      selectArr: [
        { id: 'a', title: 'A' },
        { id: 'b', title: 'B' },
        { id: 'c', title: 'C' }
      ],
      selectName: '',
      input5: '',
      input6: '',
      input7: ''
    }
  },
  methods: {

  }
})