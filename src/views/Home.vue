<template>
  <div class="home">
    <AppBar title="TODO" left="bars" right="search" @left="openSideBar" />
    <AppSideBar v-if="visibleSidebar" @close="visibleSidebar = false" />
    <Avatar />
    <Gradient />
    <TodoList />
    <TodoDetail />
    <TodoEditing />
    <FloatingButton />
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import AppSideBar from '@/components/AppSideBar.vue'
import Avatar from '@/components/Avatar.vue'
import Gradient from '@/components/Gradient.vue'
import FloatingButton from '@/components/FloatingButton.vue'
import TodoList from '@/components/TodoModule/TodoList.vue'
import TodoDetail from '@/components/TodoModule/TodoDetail.vue'
import TodoEditing from '@/components/TodoModule/TodoEditing.vue'
export default {
  name: 'Home',
  components: {
    AppBar,
    AppSideBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton
  },
  data() {
    return {
      visibleSidebar: false
    }
  },
  methods: {
    openSideBar() {
      console.log('open sidebar')
      this.visibleSidebar = true
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
}
</style>
