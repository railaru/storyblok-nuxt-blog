<template>
  <header class="main-header p-4">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="mr-4"
          ><a class="nav-link">All posts</a></nuxt-link
        >
        <nuxt-link to="/about" tag="li" class="mr-4"
          ><a class="nav-link">About</a></nuxt-link
        >
        <nuxt-link to="/products" tag="li" class="mr-4"
          ><a class="nav-link">Products</a></nuxt-link
        >
      </ul>
    </nav>
    <nuxt-link class="nav-link" to="/basket">Basket: 0</nuxt-link>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
