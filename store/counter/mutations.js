export default {
  incrementByMutation(state, payload) {
    state.lastAdded.push(payload);
    state.value += payload;
  }
};
