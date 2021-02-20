<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "Start",
  setup() {
    let num = ref(10);
    let num1 = ref(20);

    let name = ref("w615");
    let arr = ref(["a", "b", "c", "d"]);
    let obj = ref({
      age: 20,
    });
    let router = useRouter();
    let back = () => {
      router.back();
    };
    let start = () => {
      // query 传参 可以用path  和 name
      // params 传参只能用 name
      router.push({
        // path: "/home",
        // query: {
        //   name: name.value,
        //   num: num.value,
        //   obj: JSON.stringify(obj),
        // },
        name: "Home",
        params: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value),
        },
      });
    };
    return {
      back,
      start,
      name,
      arr,
      obj,
      num1,
    };
  },
});
</script>

<style lang="scss" scoped></style>
