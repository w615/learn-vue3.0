<template>
  <div class="navHeader">
    <input
      type="text"
      placeholder="请输入任务"
      v-model="value"
      @keydown.enter="enter"
    />
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "NavHeader",
  props: {},
  setup(props, ctx) {
    let value = ref("");
    let enter = () => {
      ctx.emit("sendData", value.value);
      console.log(value.value, 16);
      value.value = "";
    };
    return {
      value,
      enter,
    };
  },
});
</script>

<style lang="scss" scoped>
.navHeader input {
  width: 400px;
  height: 30px;
  padding-left: 10px;
}
</style>
