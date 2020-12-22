<template>
  <div>{{age}}</div>
</template>

<script>

import axios from 'axios'
// import jsonp from 'jsonp'
export default {
  name: "APP",
  compomemts: {
    
  },
  data() {
    return {
      age: 20
    }
  },
  mounted() {
    let url = "https://live.imooc.com/project/livedetaillist?actionType=online"
    axios.get(url).then(()=> {

    })
    // jsonp
  }
}
</script>

<style>

</style>