<template>
  <transition name="edit">
    <div class="todo-editing" v-if="!!editing">
      <AppBar title="New Tasks" left="close" right="" @left="toggleEditing" />
      <div class="todo-editing-head">
        <p>What tasks are you planning to perform?</p>
      </div>
      <div class="todo-editing-body">
        <textarea rows="3" v-model="editing.text"></textarea>
        <p class="todo-editing-meta">
          <i :class="['fa', `fa-${selected.todo.icon}`]"></i>
          {{ selected.todo.name }}
        </p>
        <p class="todo-editing-meta">
          <i class="fa fa-calendar"></i>
          Today
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import AppBar from "@/components/AppBar.vue";
export default {
  components: {
    AppBar,
  },
  computed: {
    ...mapState(["selected", "editing"]),
  },
  methods: {
    ...mapMutations(["toggleEditing"]),
  },
};
</script>

<style lang="scss">
.todo-editing {
  position: absolute;
  z-index: 998;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: white;
  color: #666;
  will-change: transform;
}
.todo-editing textarea {
  margin: 6px 0;
  border: none;
  outline: none;
  width: 100%;
  resize: none;
  // background: #eee;
  color: #666;
  font-size: 32px;
  line-height: 1.2em;
}
.todo-editing-head {
  padding: 40px 40px 0;
  color: #999;
}
.todo-editing-body {
  padding: 0 40px;
}
.todo-editing-meta {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid #eee;
  color: #999;
  i {
    padding-right: 10px;
  }
}
.edit-leave-to,
.edit-enter {
  transform: translateY(100%);
}
.edit-enter-to,
.edit-leave {
  transform: translateY(0);
}
.edit-enter-active {
  transition: all 0.5s ease;
}
.edit-leave-active {
  transition: all 0.5s ease;
}
</style>
