<template>  

  <section class="home">
    {{ home.data }}
  </section>
 
</template>

<script setup>

  import { onMounted, onUnmounted, inject } from 'vue'

  const router = inject('router')
  const home = inject('home') 

  onMounted(async () => {
    if(home.isEmpty()) {
      await home.load(router.lang)
      document.title = home.head.title
      document.querySelector('meta[name="description"]')
        .setAttribute('content', home.head.description)
    }
  })

  onUnmounted(() => {
    home.reset()
  })

</script>