<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <div class="container">
        <Nuxt keep-alive />
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: { TheHeader },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Raleway', sans-serif;
}

.main-content {
  margin-top: 90px;
}

.container {
  margin: 0 auto;
  @apply px-4;
}
</style>
