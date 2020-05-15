export default {
  namespaced: true,

  state: localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {
    refreshToken: '',
    accessToken: '',
    uid: '',
    userName: '',
    uuid: '5vn7SohnZ7P0kXdtYnK6sjpJ6ufCpzvs',

  },

  mutations: {
  
    setAccessToken(state, data) {
      state.accessToken = data;
    },
    setRefreshToken(state, data) {
      state.refreshToken = data;
    },
    removeAccessToken(state, data) {
      state.accessToken = '';
    },
    removeRefreshToken(state, data) {
      state.refreshToken = '';
    },
    removeUid(state, data) {
      state.uid = '';
    },
    removeUserName(state, data) {
      state.userName = '';
    },
    setUid(state, data) {
      state.uid = data;
    },
    setUserName(state, data) {
      state.userName = data;
    },
   
  },
  actions:{},

  getters: {}
}