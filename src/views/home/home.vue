<template>
  <div id="login">
    <div class="ILoveYiYi">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!---->
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts';
  import 'echarts/map/js/china.js' // 引入中国地图数据
  // import { initOption as ioption } from 'liquidfillOptions.js'
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {


    },
    mounted() {

    }

  }

</script>

<style lang="less" scoped>
  #login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: repeat-y;
    background-size: 100%;
    z-index: 1000;
    font-family: 'Open Sans', Arial, sans-serif;
  }
  .ILoveYiYi {
    width: 100%;
    height: 100%;
  }
</style>
