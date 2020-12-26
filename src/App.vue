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
    // 本地加载请求静态资源json文件的形式。
    this.axios.get('/mock/user/login.json').then((res)=>{
      this.res = res;
    })
  }
}
</script>

<style>

</style>