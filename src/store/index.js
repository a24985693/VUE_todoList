import { createStore } from 'vuex';
import todoList from './todoList';
import status from './status';

const store = createStore({
  modules: {
    todoList,
    status,
  },
});
export default store;
