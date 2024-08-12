<template>
  <div class="bg-primary">
    <div class="container">
      <div class="vh-100 row flex-column flex-md-row align-items-center
        justify-content-center gx-4">
        <div class="col-5 d-none d-md-flex flex-column text-center">
          <h2 class="fw-bold mb-5 text-info">
            <i class="fa-regular fa-circle-check"></i>
            TODO LIST
          </h2>
          <img src="../assets/images/logo.svg" alt="logo圖"
            class="w-100">
        </div>
        <div class="col-12 d-md-none">
          <h2 class="fw-bold mb-5 text-info">
            <i class="fa-regular fa-circle-check"></i>
            TODO LIST
          </h2>
        </div>
        <div class="col-12 col-md-5">
          <h4 class="fw-bold mb-4">註冊帳號</h4>
          <Form v-slot="{ errors }" @submit="signUp">
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email</label>
              <Field id="email" name="email" type="email"
                class="form-control" :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="user.email"/>
              <error-message name="email" class="invalid-feedback"/>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label fw-bold">暱稱</label>
              <Field id="pasnamesword" name="暱稱" type="text"
                class="form-control" :class="{ 'is-invalid': errors['暱稱'] }"
                placeholder="請輸入您的暱稱" rules="required"
                v-model="user.nickname"/>
              <error-message name="暱稱" class="invalid-feedback"/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label fw-bold">密碼</label>
              <Field id="password" name="密碼" type="password"
                class="form-control" :class="{ 'is-invalid': errors['密碼'] }"
                placeholder="請輸入密碼" rules="required"
                v-model="user.password"/>
              <error-message name="密碼" class="invalid-feedback"/>
            </div>
            <p v-if="msg" class="text-success mb-3 fw-bold">
              註冊成功，請前往登入
            </p>
            <div class="mb-4 text-center">
              <button class="btn btn-secondary py-2 px-4 fw-semibold" type="submit">
                註冊
              </button>
            </div>
            <div class="text-center">
              <router-link to="/" class="text-decoration-none text-dark fw-bold">
                登入
              </router-link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <ToastMessages/>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    ToastMessages,
  },
  data() {
    return {
      user: {
        email: '',
        nickname: '',
        password: '',
      },
      msg: '',
    };
  },
  methods: {
    signUp() {
      const url = `${process.env.VUE_APP_API}users`;
      this.$http.post(url, { user: this.user })
        .then(() => {
          this.msg = '註冊成功，請前往登入';
        })
        .catch((err) => {
          this.msg = '';
          const array = err.response.data.error;
          array.forEach((item) => {
            const messageTitle = '註冊失敗';
            this.$store.dispatch('pushMessage', {
              style: 'danger',
              title: messageTitle,
              content: item,
            });
          });
        });
    },
  },
  created() {
    this.$store.commit('clearMessages');
  },
};
</script>
