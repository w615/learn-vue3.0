<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="main">
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button class="del" @click="del(item, index)">删除</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  name: "NavMain",
  props: {},
  setup() {
    let del = (item, index) => {
      console.log(item);
      console.log(index);
    };
    let list = ref([
      {
        title: "足球",
        complete: false,
      },
      {
        title: "篮球",
        complete: false,
      },
      {
        title: "羽毛球",
        complete: false,
      },
    ]);
    return {
      list,
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  cursor: pointer;
  width: 400px;
  line-height: 35px;
  height: 35px;
  margin: 0 auto;
  position: relative;
  .del {
    display: none;
  }
  &:hover {
    background: #ddd;
    .del {
      position: absolute;
      right: 10px;
      top: 10px;
      display: inline-block;
    }
  }
}
</style>
