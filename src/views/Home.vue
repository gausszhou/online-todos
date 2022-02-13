<template>
  <div class="home">
    <AppBar title="TODO" left="bars" right="search" />
    <Avatar />
    <Gradient />
    <TodoList />
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Avatar from "@/components/Avatar.vue";
import Gradient from "@/components/Gradient.vue";
import TodoList from "@/components/TodoList.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #353443;
  overflow: hidden;
}
</style>
