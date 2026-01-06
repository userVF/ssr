<template>
  
  <div class="header-contaiter">
    <Header />
  </div>

  <main>
    <component :is="view" />
  </main>

  <div class="footer-contaiter">
    <Footer />
  </div>
  
</template>

<script setup>

  import { inject, computed, onMounted, onUnmounted } from 'vue'

  import Header from '@/header/view/Header.vue'
  import Home from '@/pages/home/view/Home.vue'
  import About from '@/pages/about/view/About.vue'
  import Contacts from '@/pages/contacts/view/Contacts.vue'  
  import Footer from '@/footer/view/Footer.vue'

  const router = inject('router')

  const views = { Home, About, Contacts }
  const view = computed(() => views[router.view])

  const onPopstate = () => {
    location.reload()
  }
  onMounted(() => {
    addEventListener('popstate', onPopstate) 
  })
  onUnmounted(() => {
    removeEventListener('popstate', onPopstate)
  })

</script>