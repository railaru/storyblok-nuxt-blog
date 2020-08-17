<template>
  <section id="about-page">
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
        version: 'draft',
      })
      .then((res) => {
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
        }
      })
  },
}
</script>

<style scoped>
p {
  white-space: pre-line;
}
</style>
