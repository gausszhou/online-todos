<template>
  <div
    class="login"
    :class="{ 'login-signin': isSignIn, 'login-signup': isSignUp }"
  >
    <LoginTabs @click.native="switchState" />
    <LoginForm />
  </div>
</template>

<script>
import LoginTabs from "@/components/LoginModule/LoginTabs";
import LoginForm from "@/components/LoginModule/LoginForm";

export default {
  name: "Login",
  components: {
    LoginTabs,
    LoginForm,
  },
  data() {
    return {
      state: 1,
    };
  },
  computed: {
    isSignIn() {
      return this.state === 1;
    },
    isSignUp() {
      return this.state === 2;
    },
  },
  methods: {
    switchState() {
      this.state = this.state == 1 ? 2 : 1;
    },
  },
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  background-color: #007dff;
  color: #fff;
  font-size: 14px;
}
</style>
