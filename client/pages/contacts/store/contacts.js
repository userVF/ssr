import { reactive } from 'vue'

const states = {
  IDLE: 'idle',
  LOADING: 'loading',
  DONE: 'done',
  ERROR: 'error'
}

const initData = {}

export default data => {

  return reactive({
    head: initData,
    data: data ? data : initData,
    state: states.IDLE,
    async load(lang) {
      this.state = states.LOADING
      try {
        const response = await fetch(`/${lang}/api/contacts`)
        const { headData, contactsData } = await response.json()
        this.head = headData
        this.data = contactsData
        this.state = states.DONE
      } catch (error) {
        this.state = states.ERROR
      }
    },
    isEmpty() {
      return Object.keys(this.data).length == 0
    },
    reset(){
      this.head = initData
      this.data = initData
      this.state = states.IDLE
    },
  })

}