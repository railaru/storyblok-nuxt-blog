export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, payload) {
    const { title } = payload

    state.list.push({ title })
  },
  remove(state, { item }) {
    state.list.splice(state.list.indexOf(item), 1)
  },
}
