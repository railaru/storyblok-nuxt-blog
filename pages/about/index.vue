<template>
  <section id="about-page" v-editable="blok">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p>
      {{ content }}
    </p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      })
      .then((res) => {
        return {
          blok: res.data.story.content,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
        }
      })
  },
  mounted() {
    this.$storybridge.on('change', () => {
      location.reload(true)
    })
  },
}
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
