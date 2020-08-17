<template>
  <nuxt-link :key="id" :to="id" class="block mt-10"
    ><article class="post-preview">
      <img
        :src="thumbnailUrl"
        class="object-contain object-center h-48 w-full"
      />
      <div class="post-text">
        <h2 class="text-xl font-medium">{{ title }}</h2>
        <p>
          {{ previewText }}
        </p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String,
      required: true,
    },
    previewText: {
      default: '',
      type: String,
      required: true,
    },
    thumbnailUrl: {
      default: '',
      type: String,
      required: true,
    },
    id: {
      default: '',
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.post-preview {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 30px;
}
</style>
