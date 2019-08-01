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
      <div style="width: 0.5rem;height: 0.5rem;position: absolute;right: 100px;bottom:100px;">
        <!-- 赞赏按钮 -->
        <h3 class="tp_dashang_but" id="exceptional" title="感谢客官对我的支持，您的支持是我最大的动力">打赏</h3>
        <!-- 遮罩层 -->
        <div class="tp_dashang_zhezhao" id="mask"></div>
        <div class="tp_dashang_content" id="dashangCon">
          <strong id="ShutDown">关闭</strong>
          <!-- 头像 -->
          <img class="tp_dashang_touxiang" src="../icon/dashang/touxiang.png" alt="">
          <h4>原创不易，感谢支持！</h4>
          <!-- 二维码部分 -->
          <div class="tp_dashang_con">
            <!-- 支付宝 -->
            <div class="tp_dashang_erweima">
              <div>
                <img src="../icon/dashang/zfb.png" alt="">
              </div>
              <h2>支付宝打赏</h2>
            </div>
            <!-- 微信 -->
            <div class="tp_dashang_erweima">
              <div>
                <img src="../icon/dashang/wx.png" alt="">
              </div>
              <h2>微信打赏</h2>
            </div>
          </div>
          <p class="tp_dashang_tixing">扫码打赏，建议金额1-10元<br/>提醒：打赏金额将直接进入对方账号，无法退款，请您谨慎操作。<br/><a href="http://www.bianer.我爱你" style="text-decoration:none; color:#d1d1d1;" target="_blank">YU到边</a></p>
        </div>
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
          auto(){
            var exceptional = document.getElementById('exceptional');
            var mask = document.getElementById('mask');
            var dashangCon = document.getElementById('dashangCon');
            var ShutDown = document.getElementById('ShutDown');
            exceptional.onclick=function(){
              mask.style.display = "block";
              dashangCon.style.display = "block";
            };
            mask.onclick=function(){
              mask.style.display = "none";
              dashangCon.style.display = "none";
            };
            ShutDown.onclick=function(){
              mask.style.display = "none";
              dashangCon.style.display = "none";
            };
          }
        },
        created() {
        },
        mounted() {
          this.auto();
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
    position: relative;
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
  .dashang{

  }
  .tp_dashang_but{
    color: #5a3822;
    font-size: 18px;
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border-radius: 50%;
    background: #af8601;
    text-align: center;
    margin: 5px auto;
    cursor: pointer;
  }
  .tp_dashang_but:hover{
    transition: all .5s;
    background: #e74851;
  }
  /*遮罩层*/
  .tp_dashang_zhezhao{
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9988;
  }
  .tp_dashang_content{
    display: none;
    width: 550px;
    height: 550px;
    border-radius: 10px;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -275px;
    margin-top: -275px;
    z-index: 9999;
  }
  .tp_dashang_content strong{
    color: #000;
    font-size: 14px;
    position: absolute;
    top: 4px;
    right: 8px;
    cursor:pointer;
  }
  /*头像*/
  .tp_dashang_touxiang{
    display: block;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 20px auto;
    border: 5px dashed #e74851;
  }
  .tp_dashang_content h4{
    color: #555;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
  }
  /*二维码部分*/
  .tp_dashang_con{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .tp_dashang_erweima{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tp_dashang_erweima div{
    width: 220px;
    height: 220px;
    border-radius: 10px;
    border: 4px solid #ec6102;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .tp_dashang_erweima img{
    width: 200px;
    height: 200px;
    display: block;
  }
  .tp_dashang_erweima h2{
    color: #04c4fb;
    font-size: 15px;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
  }
  .tp_dashang_tixing{
    color: #a7a6a6;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
  }
  /*简单做了点响应式*/
  @media only screen and (max-width: 1100px){
    .tp_dashang_content{
      width: 370px;
      margin-left: -185px;
    }
    .tp_dashang_erweima div{
      width: 165px;
      height: 165px;
    }
    .tp_dashang_erweima img{
      width: 150px;
      height: 150px;
      display: block;
    }
    .tp_dashang_tixing{
      font-size: 12px;
    }
  }
</style>
