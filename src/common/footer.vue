<template>
    <div class="footer">
      <div class="gundongtiao"></div>
      <div class="main">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <h3>关于本站</h3>
            <div class="head">
              老于头杂货铺博客是一个原创前端学习交流、知识交流、休闲娱乐的个人网站。同时搜集整理前端相关资料、奇闻趣事、学习与工作心得等。欢迎志同道合的朋友交流留言。
            </div>
            <span id="share_time" style="position: absolute;top: 0;left: 500px;display: inline-block;width: 300px;height: 50px; color: red; font-weight: bold;"></span>
          </el-col>
          <el-col :span="8">
            <h3 class="content">扫一扫,加我好友吧</h3>
            <div class="foote" title="欢迎欢迎热烈欢迎">
             <span class="footes"></span>
            </div>
          </el-col>
          <el-col :span="8">
            <h3 class="rights">版权声明</h3>
             <div class="conright">
               <span style="text-align: right"> &nbsp;&nbsp; Friendship Links : www.bianer.我爱你</span>
               <span style="text-align: right">theme by 老于头杂货铺</span>
               <span style="text-align: right">Copyright www.yuhangwei.com.All Rights Reserved.</span>
               <span style="text-align: right">备案号 : 京ICP备19032262号-1</span>
             </div>
          </el-col>
        </el-row>
      </div>
      <div class="gundongtiao"></div>
    </div>
</template>

<script>
    //import  from " ";
    export default {

        data() {
            return {

            };
//页面加载完执行下方函数
          share_data_time();
          function share_data_time() {
            //每秒执行一次
            window.setTimeout("share_data_time()", 1000);
            //网站建立时间
            BirthDay = new Date("5/11/2018 00:00:00");
            //获取当前时间
            today = new Date();
            //总豪秒数
            timeold = (today.getTime() - BirthDay.getTime());
            //总秒数
            secondsold = Math.floor(timeold / 1000);
            e_daysold = timeold / (24 * 60 * 60 * 1000);
            //相差天数
            daysold = Math.floor(e_daysold);
            e_hrsold = (e_daysold - daysold) * 24;
            //相差小时数
            hrsold = Math.floor(e_hrsold);
            e_minsold = (e_hrsold - hrsold) * 60;
            //相差分钟数
            minsold= Math.floor(e_minsold);
            //相差秒数
            seconds = Math.floor((e_minsold - minsold) * 60);
            //将所获取的时间拼接到一起，再把值显示到页面
            share_time.innerHTML = "已共享:" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
          }
        },
        methods: {
        },
        created() {
        },
        mounted() {
        }
    }

</script>

<style scoped lang="less">
  .footer{
    width: 100%;
    height: 2rem;
    background-color: #282828;
    color: #666;
    font-size: 0.16rem;
    .main{
      width: 12rem;
      height: calc(100% - 2px);
      margin: 0 auto;
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    min-height: 2rem;
   h3{
     width: 100%;
     height: 0.4rem;
     line-height: 0.5rem;
     text-indent: 0.1rem;
   }
    .content{
     text-align: center!important;
    }
    .rights{
      text-align: right;
    }
    .conright{
      width: 100%;
      height: 2rem;
      font-size: 0.16rem;
      margin-left: 0.1rem;
      float: right;
      margin-top: 0.1rem;
      span{
        display: inline-block;
        width: 100%;
        height: 14%;
      }
    }
    .head{
      width: 70%;
      height: 2rem;
      font-size: 0.16rem;
      line-height: 0.23rem;
      margin-left: 0.1rem;
      margin-top: 0.1rem;
    }
    .foote{
      width: 38%;
      height: 55%;
      margin: 2% auto;
      background: url("../icon/ss.png");
      background-size: 100% 100%;
      cursor: pointer;
      .footes{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.3;
      }
      .footes:hover{
        opacity: 0;
      }
    }
  }
  .gundongtiao{
    animation: gundongtiao 1s infinite linear;
    height:1px;
  /*  bottom:0;
    left:0;
    position: fixed;*/
    width:100%;
    z-index:9999;
  }
  @keyframes gundongtiao{
    0%{
      background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    }
    20%{
      background: #000 linear-gradient(to left, #ff2d55,#4cd964, #5ac8fa, #007aff, #34aadc,#5856d6);
    }
    40%{
      background: #000 linear-gradient(to left, #5856d6,#ff2d55,#4cd964, #5ac8fa, #007aff, #34aadc);
    }
    60%{
      background: #000 linear-gradient(to left, #34aadc,#5856d6,#ff2d55,#4cd964, #5ac8fa, #007aff);
    }
    80%{
      background: #000 linear-gradient(to left, #007aff,#34aadc,#5856d6,#ff2d55,#4cd964, #5ac8fa);
    }
    100%{
      background: #000 linear-gradient(to left, #5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55,#4cd964);
    }
  }
</style>
