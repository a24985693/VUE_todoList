<template>
  <div class="vh-100 bg-primary">
    <div class="container">
      <router-view/>
    </div>
  </div>
  <ToastMessages/>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)todoToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const url = `${process.env.VUE_APP_API}check`;
    this.$http.get(url, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.request.status === 200) {
          this.$router.push('/todolist');
        }
      })
      .catch((err) => {
        if (err.request.status === 401) {
          this.$router.push('/login');
        }
      });
  },
};
</script>
