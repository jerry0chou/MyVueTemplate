<template>
  <div id="home">
    <h1>先要添加代理</h1>
    {{this.$store.state.count}}
    <p>{{responseData}}</p>
    <button @click="sendGet">sendGet</button>
    <button @click="sendPost">sendPost</button>
  </div>
</template>
<script>
  import http from '@/api/http'

  export default {
    name: 'home',
    data()
    {
      return {
        responseData: ''
      }
    },
    mounted()
    {
    },
    methods: {
      async sendGet()
      {
        let params = {}
        const res = await http.get('/hello', params)
        if (res.data)
        {
          this.responseData = res.data
        }
      },
      async sendPost()
      {
        let data = {
          username: "jerry",
          password: "123"
        }
        const res = await http.post('/postuser', data)
        if (res.data)
        {
          this.responseData = res.data
        }
      },
    }
  }
</script>
<style lang='stylus'>
  #home {
  }
</style>
