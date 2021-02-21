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
    <p><button @click="overTask(index)">点单完成</button></p>
    <p>{{overText}}</p>
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
onErrorCaptured,// 捕获来自子孙组件异常的时候激活
onActivated, 
onDeactivated,
onRenderTracked,
onRenderTriggered,
watch,

} from 'vue'
export default defineComponent ({
  name:'Entry',
  // 组件创建之前执行的
  setup(){
    let overTask = (index)=>{
      overText.value= `点单完成 | ${overText.value} --${data.selectWaiter}`
      // overText.value = ''
      console.log('点餐结束');}


    console.log('1,开始创建组件---setup');
   
    // const waiter = ref(['陌陌' ,'探探','灵魂者']);
    // const selectWaiter =ref('');
    // const selectWaiterFun = (index)=>{
    //   selectWaiter.value= waiter.value[index]
    // }
   
    const data = reactive({
        waiter :['翠花' ,'二狗','大壮'],
        selectWaiter:'',
        selectWaiterFun: (index)=>{
          data.selectWaiter = data.waiter[index]
        }
    });
     let overText = ref('怡红院')
     
    let val = watch([overText,()=>data.selectWaiter],(newValue,oldValue)=>{
      console.log(`${newValue}--${oldValue}`);
    })
    onBeforeMount(()=>{
      console.log('2,组件挂载到页面之前执行------onBeforeMount');
    })
    onMounted(()=>{console.log('3,组件挂载到页面之后执行------onMount')})
    onBeforeUpdate(()=>console.log("4,组件数据更新之前执行------onBeforeUpdate"))
    onUpdated(()=>{console.log("5,组件数据更新之后执行------onUpdate")})
    onBeforeUnmount(()=>{console.log("6,组件数据更新之后执行------onBeforeUnmount")})
    onUnmounted(()=>{console.log("7,组件数据更新之后执行-----onUnmounted")})
    onErrorCaptured(()=>console.log("8,组件数据更新之后执行-----onErrorCaptured"))
    // onRenderTracked((event)=>{
    //   console.log(event,'状态跟踪钩子函数event');
    // })
    onRenderTriggered((event)=>{console.log(event);})
    return{
      // waiter,
      // selectWaiter,
      // selectWaiterFun
      // toRefs(data),
      data,
      overTask,
      overText,val,
    }
  }
  
})
</script>
<style lang="scss" scoped>
.redRoma{
  text-align: center;
}

</style>
