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

    <div class="relative flex items-center">
      <nuxt-link to="/basket" class="nav-link block pr-6">Basket</nuxt-link>
      <button class="dropdown-btn" @click="toggleDropdown">
        Products: {{ products.length }}
      </button>
      <div v-if="dropdownOpened" class="dropdown text-gray-900">
        <ul v-if="products.length > 0">
          <li
            v-for="product in products"
            :key="product.id"
            class="product-item mt-8"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="product-img"
            />
            <h3 class="text-lg font-medium">{{ product.title }}</h3>
            <div>
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                @click="removeFromBasket(product)"
              >
                x
              </button>
            </div>
          </li>
        </ul>
        <h3 v-else class="text-lg">Your basket is empty</h3>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpened: false,
    }
  },
  computed: {
    products() {
      return this.$store.state.basket.list
    },
  },

  methods: {
    toggleDropdown() {
      this.dropdownOpened = !this.dropdownOpened
    },
    removeFromBasket(product) {
      this.$store.commit('basket/remove', product)
    },
  },
}
</script>

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

.dropdown-btn {
  background: #77fc9f;
  color: #444;
  padding: 10px;
  margin: -10px;
  right: 10px;
}
.dropdown {
  position: absolute;
  @apply shadow-lg;
  z-index: 1;
  top: 50px;
  right: 0;
  height: 300px;
  width: 300px;
  background: white;
  overflow-y: auto;
  @apply p-4;
}
.product-item {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  grid-column-gap: 10px;
}
.product-img {
  object-fit: cover;
  object-position: center;
}
</style>
