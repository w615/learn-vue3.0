<template>
  <div class="redRoma">
    <h2>欢迎光临红浪漫 </h2>
    <button 
      v-for='(item,index) in data.waiter' 
      :key='index'
      @click='data.selectWaiterFun(index)'> 
      {{index}}:{{item}}
    </button>
    <p>您选择了:【{{data.selectWaiter}}】作为红浪漫服务</p>
  </div>
</template>
<script >
import {
defineComponent,
ref,
reactive,
toRefs,
onBeforeMount,
onMounted,
onBeforeUpdate,
onUpdated,
onBeforeUnmount,
onUnmounted,
onErrorCaptured
} from 'vue'
export default defineComponent ({
  name:'Entry',
  // 组件创建之前执行的
  setup(){
    console.log('1,开始创建组件---setup');
    // const waiter = ref(['陌陌' ,'探探','灵魂者']);
    // const selectWaiter =ref('');
    // const selectWaiterFun = (index)=>{
    //   selectWaiter.value= waiter.value[index]
    // }
    const data = reactive({
        waiter :['陌陌' ,'探探','灵魂者'],
        selectWaiter:'',
        selectWaiterFun: (index)=>{
          data.selectWaiter = data.waiter[index]
        }
    });
    onBeforeMount(()=>{
      console.log('2,组件挂载到页面之前执行------onBeforeMount');
    })
    onMounted(()=>{console.log('3,组件挂载到页面之后执行------onMount')})
    onBeforeUpdate(()=>console.log("4,组件数据更新之前执行------onBeforeUpdate"))
    onUpdated(()=>{console.log("5,组件数据更新之后执行------onUpdate")})
    onBeforeUnmount(()=>{console.log("6,组件数据更新之后执行------onBeforeUnmount")})
    onUnmounted(()=>{console.log("7,组件数据更新之后执行-----onUnmounted")})
    onErrorCaptured(()=>console.log("8,组件数据更新之后执行-----onUnmounted"))

    return{
      // waiter,
      // selectWaiter,
      // selectWaiterFun
      // toRefs(data),
      data,
    }
  }
  
})
</script>
<style lang="scss" scoped>
.redRoma{
  text-align: center;
}

</style>
