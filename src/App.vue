<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
  import LoveYiYi from '@/views/LoveYiYi/LoveYiYi';
  import bianer from '@/views/LoveYiYi/bianer';
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    methods: {

    },
    components:{
      LoveYiYi,
      bianer
    }
  }
</script>

<style>
  html,body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-right: 0px!important;
  }

  #app {
    width: 100%;
    height: 100%;
    font-family: Arial;
  }

  /*.anchorBL {
    display: none;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden!important;
  }*/
</style>
