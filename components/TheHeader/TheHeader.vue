<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links p-4">
        <nuxt-link to="/" tag="li" class="mr-4"
          ><a class="nav-link">All posts</a></nuxt-link
        >
        <nuxt-link to="/about" tag="li" class="mr-4"
          ><a class="nav-link">About</a></nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #444;
  color: #fff;
}
.nav-links {
  display: flex;
}
.nav-link {
  display: block;
}
.nuxt-link-exact-active,
.nav-link:active,
.nav-link:hover,
.nav-link:focus {
  color: #77fc9f;
}
</style>
