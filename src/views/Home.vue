<template>
  <div class="home">
    <!-- {{ arr }}
    {{ time }}
    <div>{{ num }} <button @click="numCount">增加num</button></div>
    <div>{{ num1 }} <button @click="numCount1(100)">增加num1</button></div> -->
    <!-- {{ num }}
    {{ name }}
    {{ arr.slice(3) }}
    {{ obj }}
    {{ ...toRefs(data)}} 
    
    <p>{{ family.wife }}</p>-->
    <!-- num:{{ num }}---num1:{{ num1 }} ---num+num1:{{ addNum }}
    <button @click="addnumAll">num 和 num1 ++</button> -->
    <!-- {{ list }} -->
    <button @click="goto">跳转路由</button>
    <NavHeader @sendData="sendData" />
    <NavMain />
    <NavFooter />
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader/NavHeader.vue";
import NavMain from "@/components/navMain/NavMain.vue";
import NavFooter from "@/components/navFooter/NavFooter.vue";

import { defineComponent, ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
// @ is an alias to /src
// ref 定义单个数据 return   出来
// reactive  定义多个数据   通过toRefs解构  return 出来

export default defineComponent({
  name: "Home",
  props: {
    count: {
      type: String,
      default: "string",
    },
  },
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup(props, ctx) {
    let router = useRouter();
    let route = useRoute();
    console.log(route.params, 54);
    let goto = () => {
      router.push({
        path: "/about",
        query: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj),
        },
      });
    };
    let store = useStore();
    console.log(store, 48);
    // 必须有返回值 比如做购物车总价的监听
    let list = computed(() => {
      return store.state.list;
    });
    // let addNum = computed(() => {
    //   return num.value + num1.value;
    // });
    let sendData = (value) => {
      console.log("接收到了", value, 45);
      arr.value.push(value);
      data.list1[0].title = value;
      console.log(data.list1[0].title);
    };
    let numCount = () => {
      console.log(num.value);
    };
    let numCount1 = (val) => {
      console.log(val);
      console.log(num1.value);
      console.log(data.time, 51);
    };
    // let addnumAll = () => {
    //   num.value++;
    //   num1.value++;
    // };
    let num = ref(10);
    let num1 = ref(20);

    let name = ref("w615");
    let arr = ref(["a", "b", "c", "d"]);
    let obj = ref({
      age: 20,
    });
    let data = reactive({
      time: "203",
      brother: "chong",
      family: {
        wife: "xue",
      },
      list1: [
        {
          title: "",
          bool: false,
        },
      ],
    });
    console.log(props.count, 77);
    // console.log(ctx);
    return {
      num,
      num1,
      name,
      arr,
      obj,
      ...toRefs(data),
      sendData,
      numCount,
      numCount1,
      // addNum,
      // addnumAll,
      list,
      goto,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  margin: 0 auto;
  text-align: center;
}
</style>
