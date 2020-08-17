<template>
  <div class="post">
    <img :src="thumbnail" :alt="title" class="w-full h-64 object-cover" />
    <h1 class="text-2xl font-bold mt-4">{{ title }}</h1>
    <p class="mt-4">{{ content }}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: 'draft',
      })
      .then((res) => {
        const { thumbnail, title, content } = res.data.story.content

        return {
          thumbnail,
          title,
          content,
        }
      })
  },
}
</script>

<style></style>
