<template>

  <section class="contacts">
    {{ contacts.data }}
  </section>
 
</template>

<script setup>

  import { onMounted, onUnmounted, inject } from 'vue'

  const router = inject('router')
  const contacts = inject('contacts') 

  onMounted(async () => {
    if(contacts.isEmpty()) {
      await contacts.load(router.lang)
      document.title = contacts.head.title
      document.querySelector('meta[name="description"]')
        .setAttribute('content', contacts.head.description)
    }
  })

  onUnmounted(() => {
    contacts.reset()
  })

</script>