import axios from 'axios';
import router from '@/router';

const todoList = {
  state: {
    todos: [],
    category: '全部',
    todo: '',
    catogaryTodos: [],
    editContent: '',
  },
  mutations: {
    pushTodo(state, arr) {
      state.todos = arr;
      state.catogaryTodos = arr;
    },
    catogaryTodo(state, category) {
      state.catogaryTodos = [];
      if (category === '全部') {
        state.catogaryTodos = state.todos;
      } else if (category === '未完成') {
        state.todos.forEach((item) => {
          if (item.completed_at === null) {
            state.catogaryTodos.push(item);
          }
        });
      } else {
        state.todos.forEach((item) => {
          if (item.completed_at !== null) {
            state.catogaryTodos.push(item);
          }
        });
      }
    },
    updateLink(state, e) {
      state.category = e;
    },
    updateEditContent(state, value) {
      state.editContent = value;
    },
    updateTodo(state, value) {
      state.todo = value;
    },
  },
  actions: {
    getTodo({ state, commit, dispatch }) {
      dispatch('setLoading', true);
      const url = `${process.env.VUE_APP_API}todos`;
      axios.get(url)
        .then((res) => {
          commit('pushTodo', res.data.todos);
          commit('catogaryTodo', state.category);
          dispatch('setLoading', false);
        })
        .catch(() => {
          dispatch('setLoading', false);
        });
    },
    addTodo({ state, commit, dispatch }) {
      dispatch('setLoading', true);
      const url = `${process.env.VUE_APP_API}todos`;
      const data = {
        content: state.todo,
      };
      axios.post(url, { todo: data })
        .then(() => {
          dispatch('getTodo');
          dispatch('setLoading', false);
          const messageTitle = '新增成功';
          dispatch('pushMessage', {
            style: 'success',
            title: messageTitle,
            content: `已新增 ${state.todo} 至代辦事項`,
          });
          commit('updateTodo', '');
        })
        .catch(() => {
        });
    },
    editTodo({ state, commit, dispatch }, obj) {
      let editItem = '';
      const {
        id, i, editArr, checkInputArr,
      } = obj;
      editArr.forEach((item) => {
        if (item.getAttribute('data-num') === id) {
          editItem = item;
        }
      });
      editItem.classList.remove('d-none');
      checkInputArr[i].setAttribute('disabled', true);
      if (state.editContent) {
        const url = `${process.env.VUE_APP_API}todos/${id}`;
        const data = {
          content: state.editContent,
        };
        axios.put(url, { todo: data })
          .then(() => {
            dispatch('setLoading', true);
            editItem.classList.add('d-none');
            checkInputArr[i].removeAttribute('disabled');
            commit('updateEditContent', '');
            dispatch('getTodo');
            dispatch('setLoading', false);
          })
          .catch(() => {
          });
      }
    },
    toggleTodo({ dispatch }, id) {
      dispatch('setLoading', true);
      const url = `${process.env.VUE_APP_API}todos/${id}/toggle`;
      axios.patch(url, {})
        .then(() => {
          dispatch('getTodo');
          dispatch('setLoading', false);
        })
        .catch(() => {
        });
    },
    deleteTodo({ dispatch }, item) {
      dispatch('setLoading', true);
      const url = `${process.env.VUE_APP_API}todos/${item.id}`;
      axios.delete(url)
        .then(() => {
          dispatch('getTodo');
          dispatch('setLoading', false);
          const messageTitle = '已刪除';
          dispatch('pushMessage', {
            style: 'danger',
            title: messageTitle,
            content: `已將 ${item.content} 刪除`,
          });
        })
        .catch(() => {
        });
    },
    signOut({ commit, dispatch }) {
      dispatch('setLoading', true);
      const url = `${process.env.VUE_APP_API}users/sign_out`;
      axios.delete(url)
        .then((res) => {
          if (res.request.status === 200) {
            router.push('/login');
            axios.defaults.headers.common.Authorization = '';
            dispatch('setLoading', false);
            commit('clearMessages');
          }
        })
        .catch(() => {
        });
    },
  },
};

export default todoList;
