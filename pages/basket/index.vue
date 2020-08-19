<template>
  <section>
    <h1 class="text-2xl">Basket</h1>
    <hr class="mt-5" />
    <ul v-if="products.length > 0" class="mt-5">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-item mt-8"
      >
        <img :src="product.image" :alt="product.title" class="product-img" />
        <div>
          <h3 class="text-lg font-medium">{{ product.title }}</h3>
          <p class="mt-3">{{ product.description }}</p>
        </div>
        <div>
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            @click="removeFromBasket(product)"
          >
            Remove
          </button>
        </div>
      </li>
    </ul>
    <h3 v-else class="text-lg font-medium mt-5">Basket is empty</h3>
  </section>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.basket.list
    },
  },
  methods: {
    removeFromBasket(product) {
      this.$store.commit('basket/remove', product)
    },
  },
}
</script>

<style scoped>
.product-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  grid-column-gap: 20px;
}
.product-img {
  object-fit: cover;
  object-position: center;
}
</style>
