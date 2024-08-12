const status = {
  state: () => ({
    isLoading: false,
    messages: [],
  }),
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    clearMessages(state) {
      state.messages = [];
    },
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit('setLoading', isLoading);
    },
    pushMessage({ state }, data) {
      const { style, title, content } = data;
      state.messages.push({ style, title, content });
      console.log(state.messages);
    },
  },
};

export default status;
