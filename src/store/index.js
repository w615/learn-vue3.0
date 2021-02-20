import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
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
        complete: true,
      },
    ],
    city: "xue",
  },
  // 第一个参数 是 state  对象 第二个是传入的值
  mutations: {
    // 添加任务
    addToDo(state, payload) {
      state.list.push(payload);
    },
    // 删除任务的下表个数
    delTask(state, payload) {
      state.list.splice(payload, 1);
    },
    // 清除已完成
    clear(state, payload) {
      // 把过滤之后的数组传进来 已完成的
      state.list = payload;
    },
    setCity(state, payload) {
      state.city = payload;
    },
  },
  //异步提交mutations
  // 第一个参数 是 store  对象 第二个是修改的值
  actions: {
    asyncSetCity({ commit }, params) {
      setTimeout(() => {
        commit("setCity", params);
      }, 1000);
    },
  },
  // 模块化
  modules: {},
});
