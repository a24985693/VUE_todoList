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
          <h4 class="fw-bold mb-4">登入</h4>
          <Form v-slot="{ errors }" @submit="signIn">
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email</label>
              <Field id="email" name="email" type="email"
                class="form-control" :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="user.email"/>
              <error-message name="email" class="invalid-feedback"/>
            </div>
            <div class="mb-4">
              <label for="password" class="form-label fw-bold">密碼</label>
              <Field id="password" name="密碼" type="password"
                class="form-control" :class="{ 'is-invalid': errors['密碼'] }"
                placeholder="請輸入密碼" rules="required"
                v-model="user.password"/>
              <error-message name="密碼" class="invalid-feedback"/>
            </div>
            <p v-if="warning" class="text-danger mb-3 fw-bold">
              {{ warning }}
            </p>
            <div class="mb-4 text-center">
              <button class="btn btn-secondary py-2 px-4 fw-semibold">
                登入
              </button>
            </div>
            <div class="text-center">
              <router-link to="/register" class="text-decoration-none text-dark fw-bold">
                註冊帳號
              </router-link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      warning: '',
    };
  },
  methods: {
    signIn() {
      this.$http.defaults.headers.common.Authorization = '';
      const url = `${process.env.VUE_APP_API}users/sign_in`;
      this.$http.post(url, { user: this.user })
        .then((res) => {
          const token = res.headers.authorization;
          document.cookie = `todoToken=${token};`;
          this.$http.defaults.headers.common.Authorization = token;
          this.$router.push('/todolist');
        })
        .catch(() => {
          this.warning = '信箱或密碼有誤，請重新輸入';
        });
    },
  },
  created() {
    this.$store.commit('clearMessages');
  },
};
</script>
