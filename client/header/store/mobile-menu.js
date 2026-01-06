import { reactive } from 'vue'

export default reactive({
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen
  }
})