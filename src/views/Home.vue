<template>
  <div class="home">
    <AppBar title="TODO" left="bars" right="search" />
    <Avatar />
    <Gradient />
    <TodoList />
    <TodoDetail />
    <TodoEditing />
    <FloatingButton />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Avatar from "@/components/Avatar.vue";
import Gradient from "@/components/Gradient.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import TodoList from "@/components/TodoModule/TodoList.vue";
import TodoDetail from "@/components/TodoModule/TodoDetail.vue";
import TodoEditing from "@/components/TodoModule/TodoEditing.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
}
</style>
