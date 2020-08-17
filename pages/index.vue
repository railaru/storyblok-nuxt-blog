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
  data() {
    return {
      posts: [
        {
          id: 'a-new-beginning',
          title: 'A new beginning',
          previewText: "This will be awesome don't miss it",
          thumbnailUrl:
            'https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 'a-second-beginning',
          title: 'A second beginning',
          previewText: "This will be awesome don't miss it",
          thumbnailUrl:
            'https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
      ],
    }
  },
}
</script>
