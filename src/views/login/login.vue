<template>
  <div id="login">
    <!--<img src="@/assets/images/pic_3.gif" alt="">-->
    <!--<img src="@/../static/slider/pic_3.gif" alt="">-->
    <div class="LoginSignIn">
      <!--logo-->
      <div class="logins">
        智慧云图
      </div>
      <!--登录input按钮-->
      <div class="LeftLo">
        <div class="borders"></div>
        <el-form :model="loginForm" :rules="loginRule" ref="loginForm">
          <el-form-item prop="username">
            <el-input type="username" placeholder="请输入用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input placeholder="请输入密码" type="password" @keyup.enter.native="loginIn('loginForm')"
                      v-model="loginForm.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginIn('loginForm')" class="submitBtn">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-input type="hidden" name="grant_type" value="password"></el-input>
          </el-form-item>

        </el-form>
        <div class="check">
          <el-tooltip class="item" effect="dark" content="欢迎来到智慧云图" placement="right-end">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-tooltip>
        </div>

        <!--用户选择-->
        <div class="CloudRight-div" @click="CloudRightClick">
          <span class="CloudRight-span" style="position: absolute;left:14px">租户管理员</span>
          <span class="CloudRight-span" style="position: absolute;right:18px">普通用户</span>
          <span class="toggle-span faster-animation" ref="Handover">{{DataHandover}}</span>
        </div>
        <!--.......-->
      </div>

    </div>
  </div>
</template>
<script>
  // import {mapGetters} from 'vuex';
  export function checkSpecificKey(str) {
    let specialKey = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、-？]‘'";
    for (let i = 0; i < str.length; i++) {
      if (specialKey.indexOf(str.substr(i, 1)) != -1) {
        return false;
      }
    }
    return true;
  };
  export default {
    name: '',
    data() {
      let checkAge = (rule, value, callback) => {

        if (!checkSpecificKey(value)) {
          return callback(new Error('不能输入特殊字符（可以是数字、字母）'));
        } else {
          callback();
        }
      };
      return {
        DataHandover: "租户管理员",
        DataSwitch: true,
        CloudRight: true,
        loginForm: {
          username: '',
          pwd: '',
        },
        loginRule: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
            {
              min: 3,
              max: 10,
              message: '长度在 3 到 10 个字符',
              trigger: 'blur'
            },
            {
              validator: checkAge,
              trigger: 'blur'
            },
          ],
          pwd: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
            {
              min: 3,
              max: 8,
              message: '长度在 3 到 8 个字符',
              trigger: 'blur'
            },
          ]
        },
        checked: false
      }
    },

    methods: {
      CloudRightClick() {
        if (this.DataSwitch) {
          this.$refs.Handover.style.left = 82 + "px";
          this.DataSwitch = false;
          this.DataHandover = "普通用户";
          this.CloudRight = false;
        } else {
          this.$refs.Handover.style.left = 0 + "px";
          this.DataSwitch = true;
          this.DataHandover = "租户管理员";
          this.CloudRight = true;
        }
      },
      // 登录
      loginIn(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$router.push({
              path: '/LoveYiYi'
            });
            // 登录进入
          /*  if (this.DataHandover === '租户管理员') {
              this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
                this.$router.push({
                  path: '/homepage'
                });
              }).catch(() => { //用户名不存在
                this.loading = false;
                	this.$message({
                        message: '用户名或密码错误',
                        type: 'warning'
                    });
              })
            } else if(this.DataHandover === '普通用户') {
              this.$store.dispatch('LoginByUser', this.loginForm).then(() => {
                this.$router.push({
                  path: '/homepage'
                });
              }).catch(() => { //用户名不存在
                this.loading = false;
                	this.$message({
                        message: '用户名或密码错误',
                        type: 'warning'
                    });
              })
            }*/
          } else {
            return false
          }
        })

      },
      //设置cookie
      setCookie(c_name, c_pwd, c_check, exdays) {
        let exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "ZhengyuanWisdomCityUserName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "ZhengyuanWisdomCityuserPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "ZhengyuanWisdomCitychecked" + "=" + c_check + ";path=/;expires=" + exdate.toGMTString();
      },
      //读取cookie
      getCookie: function () {
        const _this = this;
        if (document.cookie.length > 0) {

          let arr = document.cookie.split('; ');
          for (let i = 0; i < arr.length; i++) {
            let arr2 = arr[i].split('=');
            //判断查找相对应的值

            if (arr2[0] == 'ZhengyuanWisdomCityUserName') {
              this.loginForm.username = arr2[1]; //保存到保存数据的地方
            } else if (arr2[0] == 'ZhengyuanWisdomCityuserPwd') {
              this.loginForm.password = arr2[1];
            } else if (arr2[0] == 'ZhengyuanWisdomCitychecked') {
              _this.checked = !!arr2[1]; //保存记住密码的状态
            }
          }
        } else {
          // debugger
        }
      },
      //清除cookie
      clearCookie: function () {
        this.setCookie("", "", "", -1); //修改2值都为空，天数为负1天
      }
    },
    created() {
      localStorage.clear();
    },
    mounted() {
      this.getCookie();
      console.log(this.omg, 'sdjksaj');
      //待测试
      if (this.omg) {
        this.setCookie();
      }
    },
    computed: {}
  }
</script>

<style lang="less" scoped>
  .faster-animation {
    transition: all 0.5s ease;
  }

  .CloudRight-div {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    width: 164px;
    height: 28px;
    left: 134px;
    bottom: -34.5%;
    border-radius: 50px;
    line-height: 28px;
    text-align: center;
    color: #90c6e0;
    cursor: pointer;
    font-size: 12px;
  }

  .toggle-span {
    width: 80px;
    height: 24px;
    background-color: #3e8ad8;
    position: absolute;
    border-radius: 50px;
    left: 2px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    margin-top: 2px;
  }

  #login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*background-image: url('../assets/images/pic_logins.jpg');*/
    /*background-repeat: repeat-y;*/
    img {
      width: 100%;
      height: 100%;
    }
  }

  .LoginSignIn {
    width: 450px;
    height: 286px;
    position: absolute;
    bottom: 50%;
    left: 38%;
    .check {
      width: 80px;
      height: 20px;
      position: absolute;
      left: 0;
      bottom: -33.5%;
      color: #fff;
    }
  }

  .LeftLo {
    width: 300px;
    height: 150px;
    margin-top: 25px;
    margin-left: 17%;
    position: relative;
    .borders {
      width: 500px;
      height: 500px;
      border: 1px solid #fff;
      position: absolute;
    }
  }

  #login {
    img {
      height: 110%;
    }
  }

  /* @media (min-width: 1280px) {
     .logins .loginw{
       width: 315px;
       margin-right: 59px;
     }
     .logins .login{
      width: 75px;
      height: 75px;
    }
   }*/

  @media (min-width: 1360px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 22.5%;
      left: 33%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        right: 65%;
        bottom: 1%;
      }
    }

    .LeftLo {
      width: 300px;
      height: 150px;
      margin-top: 25px;
      margin-left: 17%;
    }

    #login {
      img {
        height: 110%;
      }
    }
  }

  @media (min-width: 1400px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 26.5%;
      left: 34%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        right: 65%;
        bottom: 1%;
      }
    }
  }

  @media (min-width: 1440px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 24.5%;
      left: 34%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        right: 65%;
        bottom: 1%;
      }
    }
  }

  @media (min-width: 1600px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 42.5%;
      left: 36%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        left: 0%;
        bottom: -30%;
      }
    }

    .LeftLo {
      width: 300px;
      height: 150px;
      margin-top: 31px;
      margin-left: 17%;
      .borders {
        width: 383px;
        height: 330px;
        border: 1px dashed #fff;
        position: absolute;
        left: -44px;
        bottom: -73px;
        border-radius: 7px;
      }
    }

    #login {
      img {
        height: 110%;
      }
    }
  }

/*  @media (min-width: 1680px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 29%;
      left: 36.6%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        right: 65%;
        bottom: -10%;
      }
    }

    .LeftLo {
      width: 300px;
      height: 150px;
      margin-top: 55px;
      margin-left: 17%;
      .borders {
        width: 383px;
        height: 330px;
        border: 1px dashed #fff;
        position: absolute;
        left: -44px;
        bottom: -67px;
        border-radius: 7px;
      }
    }
  }*/
  @media (min-width: 1680px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 50%;
      left: 38%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        left: 0;
        bottom: -33.5%;
        color: #fff;
      }
    }

    .LeftLo {
      width: 300px;
      height: 150px;
      margin-top: 31px;
      margin-left: 17%;
      .borders {
        width: 383px;
        height: 330px;
        border: 1px dashed #fff;
        position: absolute;
        left: -44px;
        bottom: -73px;
        border-radius: 7px;
      }
    }
  }
  @media (min-width: 1920px) {
    .LoginSignIn {
      width: 450px;
      height: 286px;
      position: absolute;
      bottom: 50%;
      left: 38%;
      .check {
        width: 80px;
        height: 20px;
        position: absolute;
        left: 0;
        bottom: -33.5%;
        color: #fff;
      }
    }

    .LeftLo {
      width: 300px;
      height: 150px;
      margin-top: 31px;
      margin-left: 17%;
      .borders {
        width: 383px;
        height: 330px;
        border: 1px dashed #fff;
        position: absolute;
        left: -44px;
        bottom: -73px;
        border-radius: 7px;
      }
    }
  }
  .lo {
    width: 297px;
    height: 38px;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 14px;
    input {
      width: 100%;
      height: 100%;
      text-indent: 25px;
      border: 0;
    }
  }

  .logins {
    width: 449px;
    height: 85px;
    font-size: 44px;
    text-align: center;
    color: #fff;
    line-height: 103px;
    font-weight: 500;
    font-family: STHupo;
    .login {
      width: 85px;
      height: 85px;
      float: left;
    }
    .loginw {
      width: 362px;
      height: 56px;
      float: right;
      margin-left: 2px;
      margin-top: 11px;
    }
  }

  .LoginSignInLeft {
    left: 5%;
  }

  .LoginSignInRight {
    left: 46%;
  }

  /*  .LoginSignInLeft input {
    background-image: url('../assets/images/login/zy_user.png');
    background-repeat: no-repeat;
  }

  .LoginSignInRight input {
    background-image: url('../assets/images/login/zy_password.png');
    background-repeat: no-repeat;
  }*/

  .LoginSignInBut {
    width: 297px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    background: #0B90E6;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 59px;
  }
</style>
<style>
  .LeftLo .el-button--medium {
    font-size: 18px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 600;
  }

  .LeftLo .el-button--primary {
    width: 297px;
    height: 40px;
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 10px;
  }

  .el-input__prefix {
    color: #409EFF;
  }

  .LeftLo .el-checkbox__label {
    color: #fff;
  }
  .LeftLo .el-button{
   line-height: 0;
  }
</style>
