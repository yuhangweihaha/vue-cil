<template>
    <div class="footer">
      <div class="main">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="8">
            <h3>关于本站</h3>
            <div class="head">
              老于头杂货铺博客是一个原创前端学习交流、知识交流、休闲娱乐的个人网站。同时搜集整理前端相关资料、奇闻趣事、学习与工作心得等。欢迎志同道合的朋友交流留言。
            </div>
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
    </div>
</template>

<script>
    //import  from " ";
    export default {
        data() {
            return {};

        },

        methods: {},
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
      height: 100%;
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
    }
    .foote{
      width: 42%;
      height: 60%;
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
</style>
