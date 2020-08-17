<template>
  <section>
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :preview-text="post.previewText"
      :thumbnail-url="post.thumbnailUrl"
    />
  </section>
</template>

<script>
import PostPreview from './../components/Blog/PostPreview'

export default {
  components: { PostPreview },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'blog/',
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail,
            }
          }),
        }
      })
      .catch((err) => {
        throw new Error(err)
      })
  },
}
</script>
