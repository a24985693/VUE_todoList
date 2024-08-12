<template>
  <div class="toast-container position-fixed end-0 pe-3"
  style="top: 75px;">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg">
    </Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Toast,
  },
  computed: {
    ...mapState({
      messages: (state) => state.status.messages,
    }),
  },
};
</script>
