<template>
  <div class="todo" :class="{ 'todo-selected': selected }">
    <div class="todo-head" @click="handleClick">
      <div class="todo-icon" :style="{ color }">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo-menu"><i class="fa fa-ellipsis-v"></i></div>
    </div>
    <div class="todo-body">
      <p class="todo-tips"></p>
      <h3 class="todo-title"></h3>
      <div class="todo-progress">
        <span class="todo-progress-line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
        </span>
        <span class="todo-progress-num">{{ progress }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { today, tomorrow } from "@/shared";
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
    },
  },
  computed: {
    color() {
      return this.todo.colors[0];
    },
    progress() {
      const totalCount = this.todo.tasks.filter((task) => !task.deleted).length;
      const doneCount = this.todo.tasks.filter(
        (task) => !task.deleted && task.donw
      ).length;
      return `${Math.round((doneCount / totalCount) * 100)}%`;
    },
  },
};
</script>

<style></style>
