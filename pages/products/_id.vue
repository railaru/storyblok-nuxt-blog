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
      <h1 class="text-2xl font-medium">{{ product.title }}</h1>
      <p class="mt-3">{{ product.description }}></p>
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
}
</script>

<style></style>
