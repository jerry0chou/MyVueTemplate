<template>
  <div id="login">
    <div class="login-wrapper">
      <el-card class="box-card">
      <div class="title">my-vue-template</div>
      <el-form class="login-form" :model="form" @submit.native.prevent="verify">
        <el-form-item prop="username">
          <el-input v-model="form.username">
            <template slot="prepend">账号</template>
          </el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <el-input type="password" v-model="password" auto-complete="off">
            <template slot="prepend">密码</template>
          </el-input>
        </el-form-item>

        <el-form-item align="center">
          <el-button type="primary" round @click="submitForm">提交</el-button>
          <el-button type="warning" round @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
      </el-card>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'login',
    data()
    {
      return {
        form: {
          username: 'JerryChu',
          password: '123456'
        },
        pwdWatch: false
      }
    },
    methods: {
      verify()
      {
        if (!this.form.username)
        {
          this.$message.error('请输入账号')
        } else if (!this.form.password)
        {
          this.$message.error('请输入密码')
        } else
        {
          this.login()
        }
      },
      login()
      {
        // this.$store.dispatch('GET_LOGIN_DATA', this.form).then((res) =>
        // {
        //   //this.$message.success('登录成功')
        //   //this.$route.query.redirect ? this.$router.push(this.$route.query.redirect) : this.$router.push('/')
        // }).catch((err) =>
        // {
        //   console.log(err)
        //   this.$message.error('账号密码错误')
        // })
      }
    }
  }
</script>
<style lang='stylus'>
  #login {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    overflow: hidden;
    .login-wrapper {
      position: absolute;
      width: 520px;
      left: 0;
      right: 0;
      margin: 150px auto;
      padding: 30px;
      .title {
        display: block;
        font-size: 26px;
        font-weight: 400;
        color: #409eff;
        margin: 0px auto 50px;
        text-align: center;
        font-weight: bold;
      }
      .login-form {
        .el-input__inner {
          padding: 0 36px 0 40px;
          height: 44px;
          line-height: 44px;
        }
        .input-icon {
          position: absolute;
          top: 0;
          font-size: 16px;
          user-select: none;
          cursor: pointer;
          padding: 0 10px;
          text-align: center;
          height: 100%;
          display: flex;
          align-items: center;
          &.prepend-icon {
            left: 0;
          }
          &.append-icon {
            right: 0;
          }
        }
        .login_btn {
          input {
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }
          &:hover {
            input {
              color: $blackColor;
            }
          }
        }
      }
    }
  }
</style>
