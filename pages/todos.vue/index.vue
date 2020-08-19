<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input :checked="todo.done" type="checkbox" @change="toggle(todo)" />
      <span :class="{ done: todo.done }" class="ml-3">{{ todo.text }}</span>
      <button class="ml-3 text-red" @click="removeTodo(todo)">remove</button>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
    removeTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
