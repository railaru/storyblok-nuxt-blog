<template>
  <section>
    <h1 class="text-2xl">All products</h1>
    <div v-if="products.length > 0">
      <div class="grid mt-4">
        <nuxt-link
          v-for="product in products"
          :key="product.id"
          :to="/products/ + product.id"
          class="w-full rounded overflow-hidden block shadow-md hover:shadow-lg"
        >
          <img
            class="w-full h-48 object-center object-cover"
            :src="product.image"
            :alt="product.title"
          />
          <div class="px-6 py-4">
            <p class="text-gray-700 text-base font-medium">
              $ {{ product.price }}
            </p>
            <h3 class="font-bold text-xl mb-2">{{ product.title }}</h3>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-else>
      loading...
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    this.products = await this.$http.$get('https://fakestoreapi.com/products')
  },
  fetchOnServer: false,
  data() {
    return {
      products: [],
    }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 30px;
}
@media (min-width: 639px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1199px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
