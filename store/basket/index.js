export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, payload) {
    state.list.push(payload)
  },
  remove(state, { item }) {
    state.list.splice(state.list.indexOf(item), 1)
  },
}
