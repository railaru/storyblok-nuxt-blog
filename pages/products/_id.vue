<template>
  <section>
    <div v-if="$fetchState.pending">
      Fetching product #{{ $route.params.id }}...
    </div>
    <div v-else>
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-64 object-contain object-center"
      />
      <h1 class="text-2xl font-medium mt-3">{{ product.title }}</h1>
      <h3 class="text-xl font-medium mt-3">${{ product.price }}</h3>
      <div class="mt-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to basket
        </button>
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Remove from basket
        </button>
      </div>

      <hr class="mt-5" />

      <p class="mt-5">{{ product.description }}</p>
      <p class="mt-3">
        <n-link to="/products" class="font-medium">Back to products</n-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    this.product = await this.$http.$get(
      `https://fakestoreapi.com/products/${this.$route.params.id}`
    )
  },
  data() {
    return {
      product: {},
    }
  },
  methods: {
    addTodo() {
      const { title, description, image, price } = this.product

      const payload = {
        title,
        description,
        image,
        price,
      }

      this.$store.commit('basket/add', payload)
    },
    removeTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
  },
}
</script>

<style></style>
