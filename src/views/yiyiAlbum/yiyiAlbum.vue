<template>
  <div id="timeAxis">
    <div class="banner">
      <!--<div class="banners"></div>-->
      <h2>祎祎相册</h2>
    </div>
    <div class="main">
      <span class="mian-shanshui"></span>
      <div class="tops">
        祎祎相册
      </div>
      <div class="main_left">
      </div>

    </div>
    <getup @listenToChildEvent="showMsgFromChild"></getup>
    <foot></foot>
  </div>
</template>

<script>
  import foot from "../../common/footer";
  import getup from "../../components/BackToTop/index";


  export default {
    data() {
      return {
      };

    },
    methods: {
      times(data) {
        console.log(data);
        if (data.id) {
          this.$router.push({path:data.path});
        }
      },
    },
    created() {
    },
    mounted() {
    },
    components: {
      foot,
      getup
    },
  }

</script>

<style scoped lang="less">
  #timeAxis {
    width: 100%;
    height: 100%;
    .banner {
      width: 100%;
      height: 4rem;
      position: absolute;
      top: 0;
      /*background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(../../icon/banner/cases.jpg) no-repeat fixed center top;*/
      background: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.4)),url(../../icon/banner/6.png) no-repeat fixed center top;
      background-size: 100%, 100%;
      background-position: 100% -94%;
      .banners{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
      }
      h2 {
        position: relative;
        top: 50%;
        text-align: center;
        color: #7f8187;
        font-size: 0.45rem;
      }
    }
    .main {
      width: 1200px;
      max-height: 13rem;
      margin: 0 auto;
      margin-top: 3.3rem;
      margin-bottom: 0.2rem;
      box-sizing: border-box;
      border: 2px dashed #ccc;
      border-radius: 5px;
      padding: 0.15rem;
      position: relative;
      .tops {
        width: 100%;
        height: 0.4rem;
        margin-bottom: 0.2rem;
        line-height: 0.4rem;
        border-bottom: 1px solid #ccc;
        font-size: 0.17rem;
        font-weight: 800;
      }
      .main_left {
        width: 70%;
        min-height: 5rem;
        padding: 0.1rem;
      }
      .mian-shanshui {
        width: 1.7rem;
        height: 2.37rem;
        background: url("../../icon/abbg.png");
        background-size: 100% 100%;
        position: absolute;
        right: -0.02rem;
        top: 0;
      }
    }
  }
</style>
<style>
  .el-card__body {
    cursor: pointer;
    text-decoration: underline;
    text-decoration: none

  }

  .el-timeline-item__content a {
    text-decoration: none
  }
</style>
