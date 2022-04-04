<template>
  <!-- 分页 -->
  <div class="page">
    <div class="page-context">
      <!-- 上 -->
      <button :disabled="pagNo==1" @click="$emit('getPageNo',pagNo-1)">上一页</button>
      <button v-if="startPage.start>1" @click="$emit('getPageNo',1)" :class="{active:pagNo==1}">1</button>
      <button v-if="startPage.start>2">...</button>
      <!-- 中间部分 -->
      <template v-for="page in startPage.end" >
          <button v-if="page>=startPage.start" :key="page.id" @click="$emit('getPageNo',page)" :class="{active:pagNo==page}">{{page}}</button>
      </template>
      <!-- 下 -->
      <button v-if="startPage.end<totalPage-1">...</button>
      <button v-if="startPage.end<totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pagNo==totalPage}">{{totalPage}}</button>
      <button :disabled="pagNo==totalPage" @click="$emit('getPageNo',pagNo+1)">下一页</button>
      <button class="allpage">共<span>{{total}}</span>条</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props:['pagNo','pageSize','total','continues'],
  computed:{
    //总共多少页
    totalPage(){
      //向上取整
      return Math.ceil(this.total/this.pageSize)
    },
    //计算出连续的页码起始数字和结束数字
    startPage(){
      //定义两个变量存起始值和结束值
      let start = 0, end = 0;
      const {continues,totalPage, pagNo}= this
/*    pageNo：当前第几页
      pageSize：每一页展示多少条数据
      total：一共展示多少数据
      continues：代表分页连续页码个数
      totalPag:一共有多少页
       */
      //不正常现象数据是连续5页，但没有5页的数据
      if(continues>totalPage){
        start= 1;
        end = totalPage
      }
      else{
        //正常现象,总页数大于连续页5
        //起始值
        start = pagNo - parseInt(continues/2)
        //结束值
        end = pagNo + parseInt(continues/2)
        //把不正常的开始页现象1，2页出现负数或0
        if(start<1){
          start = 1
          end = continues
        }
        //不正常的结束的页
        if(end>totalPage){
          end = totalPage
          start = totalPage - continues + 1
        }
      
      }
      return {start,end}
    }
  }
};
</script>

<style scoped>
.allpage {
  padding: 10px;
  margin: 10px;
}
.page-context button {
  padding: 10px;
  margin: 10px;
  border: 1px sobuttond #b3aeae;
}
.active{
  background: skyblue;
  color: white;
}
</style>