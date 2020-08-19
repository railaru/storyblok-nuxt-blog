export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, payload) {
    state.list.push(payload)
  },
  remove(state, product) {
    state.list.splice(state.list.indexOf(product), 1)
  },
}
