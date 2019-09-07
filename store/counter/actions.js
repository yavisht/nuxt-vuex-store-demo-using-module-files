export default {
  incrementByAction({ commit }, payload) {
    setTimeout(() => {
      commit("incrementByMutation", payload);
    }, 1000);
  }
};
