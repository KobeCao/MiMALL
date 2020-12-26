<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: "APP",
  compomemts: {
  },
  data() {
    return {
      res:{}
    }
  },
  mounted() {
    // 1.本地加载请求静态资源json文件的形式。
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // })
    // 2.通过easy-mock平台实现数据Mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    // 3.本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  }
}
</script>

<style>

</style>