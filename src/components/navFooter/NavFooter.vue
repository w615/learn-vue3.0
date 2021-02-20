<template>
  <div class="container">
    <div>已完成：{{ isComplete }} / 全部：{{ all }}</div>
    <div class="delFinish" v-if="isComplete > 0">
      <button @click="clearFinish">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "NavFooter",
  setup() {
    let isComplete = ref(1);
    let clearFinish = () => {
      console.log("clear");
    };
    let all = ref(3);
    return {
      isComplete,
      all,
      clearFinish,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.delFinish {
  cursor: pointer;
  margin-left: 10px;
}
</style>
