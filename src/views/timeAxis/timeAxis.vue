<template>
  <div id="timeAxis">
<div class="banner">
<h2>时间轴</h2>
</div>
    <div class="main">
      <span class="mian-shanshui"></span>
      <div class="tops">
        往期内容
      </div>
      <div class="main_left">
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item><el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>

          </el-timeline>
        </div>
      </div>

    </div>
    <getup  @listenToChildEvent="showMsgFromChild"></getup>
   <foot></foot>
  </div>
</template>

<script>
  import foot from "../../common/footer";
  import getup from "../../components/BackToTop/index";
  export default {
    data() {
      return {};

    },
    methods: {

    },
    created() {
    },
    mounted() {

    },
    components:{
      foot,
      getup
    },
  }

</script>

<style scoped lang="less">
  #timeAxis {
    width: 100%;
    height: 100%;
    .banner{
      width: 100%;
      height: 4rem;
      position: absolute;
      top: 0;
      background: radial-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9)), url(../../icon/banner/cases.jpg) no-repeat fixed center top;
      background-size: 100%,100%;
      h2{
        position: relative;
        top: 50%;
        text-align: center;
        color: #fff;
        font-size: 0.45rem;
      }
    }
    .main{
      width: 1200px;
      max-height: 13rem;
      margin: 0 auto;
      margin-top: 3.3rem;
      margin-bottom: 0.2rem;
      box-sizing: border-box;
      border:2px dashed  #ccc;
      border-radius: 5px;
      padding: 0.15rem;
      position: relative;
      .tops{
        width: 100%;
        height: 0.4rem;
        margin-bottom: 0.2rem;
        line-height: 0.4rem;
        border-bottom:1px solid #ccc;
        font-size: 0.17rem;
        font-weight: 800;
      }
      .main_left{
        width: 70%;
        height: 100%;
        background-color: #edffef;;
        box-shadow: 9px 7px 5px #cccccc;
        padding: 0.1rem;
      }
      .mian-shanshui{
        width: 1.7rem;
        height: 2.37rem;
        background:url("../../icon/abbg.png");
        background-size: 100% 100%;
        position: absolute;
        right: -0.02rem;
        top: 0;
      }
    }
  }
</style>
