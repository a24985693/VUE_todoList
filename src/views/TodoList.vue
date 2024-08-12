<template>
  <Loading :active="isLoading"/>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <div class="row my-5 align-items-center">
        <div class="col-8">
          <h2 class="fw-bold text-info">
            <i class="fa-regular fa-circle-check"></i>
            TODO LIST
          </h2>
        </div>
        <div class="col-4 text-end">
          <button class="btn btn-outline-gray"
            @click="signOut">
            登出
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-8 mb-3">
      <div class="position-relative">
        <input type="text" class="form-control lh-lg border-1 border-dark py-2 ps-3"
          placeholder="新增代辦事項" v-model="todo">
          <button class="btn btn-secondary position-absolute top-50 translate-middle"
            style="right:-5px"
            @click="addTodos">
            <i class="fa-solid fa-plus fw-bold fs-5"></i>
          </button>
        </div>
    </div>
    <div class="col-12 col-md-8">
      <div class="bg-white border rounded border-dark border-1">
        <div class="head">
          <ul class="nav nav-tabs fw-bold" @click="updateLink">
            <li class="nav-item" style="width: 33.33%;">
              <button class="nav-link py-3 w-100"
                :class="{ active: category === '全部' }">
                全部
              </button>
            </li>
            <li class="nav-item" style="width: 33.33%;">
              <button class="nav-link py-3 w-100"
                :class="{ active: category === '未完成' }">
                未完成
              </button>
            </li>
            <li class="nav-item" style="width: 33.33%;">
              <button class="nav-link py-3 w-100"
                :class="{ active: category === '已完成' }">
                已完成
              </button>
            </li>
          </ul>
        </div>
        <div class="body">
          <ul class="list-unstyled p-3 mb-0">
            <li v-for="(item, i) in catogaryTodos" :key="item.id"
              class="py-3 px-1 border-bottom"
              @click="toggleTodo(item.id)">
              <input type="checkbox" class="check"
                :checked="item.completed_at" ref="checkInput">
              <input type="text" class="editTodoInput d-none" ref="editTodoInput"
                placeholder="輸入修改代辦事項" v-model="editContent" :data-num="item.id"
                @click.stop="">
              <span>
                {{ item.content }}
              </span>
              <i class="fa-solid fa-pen-to-square"
                @click.stop="editTodo(item.id, i)"/>
              <i class="fa-solid fa-xmark"
                @click.stop="deleteTodo(item)"/>
            </li>
          </ul>
        </div>
        <div class="footer px-3 pb-4 pt-2">
          共{{ todos.length }}個代辦事項
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  inject: ['emitter'],
  methods: {
    ...mapActions(['getTodo']),
    updateLink(e) {
      const target = e.target.textContent.trim();
      this.$store.commit('updateLink', target);
      this.$store.commit('catogaryTodo', target);
    },
    addTodos() {
      this.$store.dispatch('addTodo');
    },
    editTodo(id, i) {
      const editArr = this.$refs.editTodoInput;
      const checkInputArr = this.$refs.checkInput;
      const obj = {
        id,
        i,
        editArr,
        checkInputArr,
      };
      this.$store.dispatch('editTodo', obj);
    },
    toggleTodo(id) {
      this.$store.dispatch('toggleTodo', id);
    },
    deleteTodo(item) {
      this.$store.dispatch('deleteTodo', item);
    },
    signOut() {
      this.$store.dispatch('signOut');
    },
  },
  computed: {
    ...mapState({
      todos: (state) => state.todoList.todos,
      catogaryTodos: (state) => state.todoList.catogaryTodos,
      category: (state) => state.todoList.category,
      isLoading: (state) => state.status.isLoading,
    }),
    ...mapState(['editContent'], ['todo']),
    editContent: {
      get() {
        return this.$store.state.todoList.editContent;
      },
      set(value) {
        this.$store.commit('updateEditContent', value);
      },
    },
    todo: {
      get() {
        return this.$store.state.todoList.todo;
      },
      set(value) {
        this.$store.commit('updateTodo', value);
      },
    },
  },
  mounted() {
    this.getTodo();
  },
  created() {
    this.$store.commit('clearMessages');
  },
};
</script>
