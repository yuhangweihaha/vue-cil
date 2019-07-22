<template>
  <div id="login">
    <header ref="rightBars">
       <div class="w1200">
        <div class="logo f1">
          <div class="BlogTitle">
            <a href="www.bianer.我爱你"></a>
          </div>
        </div>
         <nav class="fr">
           <div class="rightheader">
             <ul>
               <li v-for="init in list" :class="isname === init.name ? 'active' : '' " @click="ClickList(init.name, init.link)">{{init.name}}</li>
             </ul>
           </div>
         </nav>
       </div>
    </header>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
  </div>

</template>

<script>
  export default {
    name: '',
    props: {
     /* visibilityHeight: {
        type: Number,
        default: 400
      },*/
    },
    data() {
      return {
        isname:'首页',
        list:[
          {
            name:'首页',
            link:'LoveYiYi'
          },
          {
            name:'前端教程',
            link:'Tutorials'
          },
          {
            name:'个人日志',
            link:'PersonalLog'
          },
          {
            name:'关于我',
            link:'AboutMe'
          },
          {
            name:'留言板',
            link:'MessageBoard'
          },
          {
            name:'时间轴',
            link:'timeAxis',
          },
          {
            name:'文章精选',
            link:'FriendshipLinks'
          },
          {
            name:'祎祎相册',
            link:'yiyiAlbum',
          },
        ]
      }
    },
    methods: {
      ClickList(data, link){
        let links = link;
        this.isname = data;
        this.$router.push({
          path: '/' + links
        });
      },
    /*  scrollFunc(e) {
          e = e || window.event;
          if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
              console.log("滑轮向上滚动");
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
              console.log("滑轮向下滚动");
            }
          } else if (e.detail) { //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
              console.log("滑轮向上滚动");
            }
            if (e.detail< 0) { //当滑轮向下滚动时
              console.log("滑轮向下滚动");
            }
          }
        },*/
      scrollToTop(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
         console.log(scrollTop);
        if(scrollTop >= 100){
          this.$refs.rightBars.style.transform = 'translateY(-0.9rem)';
        }
        e = e || window.event;
        if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件
          if (e.wheelDelta > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
            this.$refs.rightBars.style.transform = 'translateY(0)';
          }
          if (e.wheelDelta < 0) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
          }
        }
      },
    },
    mounted() {
      //给页面绑定滑轮滚动事件
      if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', this.scrollToTop);
      }
      //滚动滑轮触发scrollFunc方法 //ie 谷歌
      window.onmousewheel = document.onmousewheel = this.scrollToTop;
      // window.addEventListener('scroll', )
      switch (this.$route.path.replace('/', '')) {
        case  "LoveYiYi":
          this.isname = '首页';
          break;
        case  "Tutorials":
          this.isname = '前端教程';
          break;
        case  "PersonalLog":
          this.isname = '个人日志';
          break;
        case  "AboutMe":
          this.isname = '关于我';
          break;
        case  "MessageBoard":
          this.isname = '留言板';
          break;
        case  "DataManagement":
          this.isname = '数据管理';
          break;
        case  "timeAxis":
          this.isname = '时间轴';
          break;
        case  "FriendshipLinks":
          this.isname = '文章精选';
          break;
        case  "yiyiAlbum":
          this.isname = '祎祎相册';
          break;
      }
    },
    updated(){
      switch (this.$route.path.replace('/', '')) {
        case  "LoveYiYi":
          this.isname = '首页';
          break;
        case  "Tutorials":
          this.isname = '前端教程';
          break;
        case  "PersonalLog":
          this.isname = '个人日志';
          break;
        case  "AboutMe":
          this.isname = '关于我';
          break;
        case  "MessageBoard":
          this.isname = '留言板';
          break;
        case  "DataManagement":
          this.isname = '数据管理';
          break;
        case  "timeAxis":
          this.isname = '时间轴';
          break;
        case  "FriendshipLinks":
          this.isname = '文章精选';
          break;
        case  "yiyiAlbum":
          this.isname = '祎祎相册';
          break;
      }
    }

  }

</script>

<style lang="less" scoped>
  #login {
    width: 100%;
    height: 2000px;
    overflow-y: auto;
    background-size: 100%;
    font-family: 'Open Sans', Arial, sans-serif;
    background-color: #fff;
    font-size: 0.16rem;
    header {
      width: 100%;
      height: 0.9rem;
      background-color: rgba(0,0,0,0.8);
      transform: translateY(0);
      /*transform: translateX(0%);*/
      transition: transform .75s ease;
      position: fixed;
      top: 0;
      .w1200{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        .f1{
          float: left;
          .BlogTitle a{
            display: block;
            width: 240px;
            height: 90px;
            background: url("../../icon/laoyu.png")no-repeat;
            background-size: 100% 100%;
          }
        }
        .fr{float: right}
        .rightheader{
          ul{
            width: 100%;
            height: 100%;
            li{
              float: left;
              list-style: none;
              cursor: pointer;
              color: #fff;
              padding-right: 0.22rem;
              padding-left: 0.22rem;
              font-size: 0.16rem;
              line-height: 0.9rem;
            }
          }
        }
      }
    }
    main{
      width: 100%;
      height: calc(100% - 0.9rem);
      margin-top: 0.9rem;
    }
    .active{
      background-color: #0a76a4;
    }
  }
</style>
