<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p v-if="!userName">
            <!-- <a href="###">登录</a> -->
            <router-link to="/login">登录</router-link>
            <!-- <a href="###" class="register">免费注册</a> -->
            <router-link to="/register" class="register">注册</router-link>
          </p>
          <p v-else>
            <a>{{ userName }}</a>
            <a class="register" @click="loginOut">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <!-- <a href="###">我的购物车</a> -->

          <router-link to="/goodscar">我的购物车</router-link>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch()">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  mounted() {
    this.$bus.$on('clearKeyword', () => {
      this.keyword = ''
    })
  },
  methods: {
    // 点击按钮 跳转搜索页面
    goSearch() {
      
      if (this.$route.query) {
        const location = {
          name: 'search',
          params: { keyword: this.keyword || undefined }
        }
        location.query = this.$route.query
        this.$router.push(location)
      }
      this.keyword = ''
    },
    // 退出登录
    async loginOut() {
      try {
        await this.$store.dispatch('getLoginOut')
        this.$router.push('/')
      } catch (error) {
        alert(error.message)
      }
    }
  },
  computed: {
    // 计算映射出用户姓名
    userName() {
      return this.$store.state.loginANdregister.userInfo.name
    }
  }
}
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #c5e9fa;
    height: 50px;
    line-height: 50px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: right;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 222px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #c5e9fa;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #c5e9fa;
          border: none;
          color: black;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
