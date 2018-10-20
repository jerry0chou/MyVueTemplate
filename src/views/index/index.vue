<template>
  <div id="index">
    <el-container id="horContainer" direction="horizontal">
      <!-- side -->
      <vuescroll>
        <my-side></my-side>
      </vuescroll>
      <el-container id="verContainer" direction="vertical">
        <!-- header -->
        <my-header></my-header>
        <!-- main -->
        <el-main id="main">
          <transition name="el-fade-in-linear" mode="out-in">
            <vuescroll>
              <router-view></router-view>
            </vuescroll>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import myHeader from '@/layout/header'
  import mySide from '@/layout/side'

  export default {
    name: 'index',
    components: {myHeader, mySide}
  }
</script>
<style lang='stylus'>
  #index {
    position: relative;
    width: 100%;
    height: 100%;
    #horContainer {
      height: 100%;
    }
    #verContainer {
      position: relative;
      height: 100%;
    }
    #main {
      position: relative;
      width: 100%;
      background: #fff;
      overflow: inherit;
    }
  }
</style>
