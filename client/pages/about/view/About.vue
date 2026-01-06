<template>
  
  <section class="about">
    {{ about.data }}
  </section>
 
</template>

<script setup>

  import { onMounted, onUnmounted, inject } from 'vue'

  const router = inject('router')
  const about = inject('about') 

  onMounted(async () => {
    if(about.isEmpty()) {
      await about.load(router.lang)
      document.title = about.head.title
      document.querySelector('meta[name="description"]')
        .setAttribute('content', about.head.description)
    }
  })

  onUnmounted(() => {
    about.reset()
  })

</script>
