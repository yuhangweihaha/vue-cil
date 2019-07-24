<template>
  <div id="timeAxis">
    <div class="banner">
      <!--<div class="banners"></div>-->
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
            <el-timeline-item v-for="init in data" :timestamp="init.time" :title="init.title" placement="top">
              <!--<a :href="init.Jump">-->
              <div @click="times(init)">
                <el-card>
                  <h4>{{init.theme}}</h4>
                  <p>{{init.describe}}</p>

                </el-card>
              </div>
              <!--</a>-->
            </el-timeline-item>
          </el-timeline>

        </div>
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
        data: [
          {
            time: '2019/7/1',
            theme: '准备写个人网站',
            describe: '小白一枚开始查资料问同事需要准备什么',
            id: 0, //id为1可以跳转
            Jump: '#', //跳转a标签#为不可以跳
            title: '次标签不可跳转',
          },
          {
            time: '2019/7/5',
            theme: '购买服务器域名',
            describe: '服务器我选择的是阿里云。买的时候正好有活动团购服务器,二百多一年,第一次弄先练练手。此时的想法做一个家庭相册，来记录女儿的成长...',
            id: 1, //id为1可以跳转
            Jump: 'http://www.bianer.xn--6qq986b3xl/#/timeAxis', //跳转a标签#为不可以跳
            title: '点击查看《新手建站前期准备手册》',
            path:'/FriendshipLinks/Construction',
          },
          {
            time: '2019/7/25',
            theme: '备案成功准备开写',
            describe: '本人是一名前端攻城狮，最近在写vue的项目所以说这个网站也打算用vue。但是问题来了没有后端，同事们最近都很忙不好意思用人家。没办法打算自己写node.js了好长时间不写了先熟悉熟悉再说。',
            id: 1, //id为1可以跳转
            Jump: '#', //跳转a标签#为不可以跳
            title: '次标签不可跳转',
            path:'/FriendshipLinks/Construction',
          },
          {
            time: '2019/7/1',
            theme: '准备写个人网站',
            describe: '小白一枚开始查资料问同事需要准备什么',
            id: 0, //id为1可以跳转
            Jump: '#', //跳转a标签#为不可以跳
            title: '次标签不可跳转',
          },

        ]
      };

    },
    methods: {
      times(data) {
        console.log(data);
        if (data.id) {
          this.$router.push({path:data.path});
        }
      }
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
     background: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6)),url(../../icon/banner/cases.jpg) no-repeat fixed center top;

      background-size: 100%, 100%;
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
        color: #fff;
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
        height: 100%;
        background-color: #edffef;
        box-shadow: 9px 7px 5px #cccccc;
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
