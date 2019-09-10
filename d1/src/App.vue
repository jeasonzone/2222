<template>
  <div id="app">
     <Affix>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <router-link to="/">
        <Icon type="ios-aperture" />个人中心
        </router-link>
      </MenuItem>
      <MenuItem name="2">
        <router-link to="about">
          <Icon type="ios-heart" />独家收藏
        </router-link>
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-ionic" />个人博客
        </template>
        <MenuGroup title="子目录1">
          <MenuItem name="3-1">待1</MenuItem>
          <MenuItem name="3-2">待2</MenuItem>
          <MenuItem name="3-3">待3</MenuItem>
        </MenuGroup>
        <MenuGroup title="子目录2">
          <MenuItem name="3-4">待1</MenuItem>
          <MenuItem name="3-5">待2</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-code-working"/>相关说明
      </MenuItem>
    </Menu>
    <div class="loginBox">
      <Button type="info" @click="open">登录</Button>
      <Modal :visible.sync="modal" title="亲~  请登录" v-model="modal" :loading="loading" @on-ok="ok" :closable="false">
        <Tabs size="small" class="layout-assistant">
          <Tab-pane label="登录">
            <Login />
          </Tab-pane>
          <Tab-pane label="注册">
            <Register />
          </Tab-pane>
        </Tabs>
        <div slot="footer"></div>
      </Modal>
    </div>
 </Affix>
    <router-view />
    <Back-top @click="backTop()">
      <img src="./assets/backToTop.png" />
    </Back-top>
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
export default {
  components: {
    Login,Register
  },
  data() {
    return {
      modal: false,
      theme1: "light",
      value1: 0,
      loading: true
    };
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    open() {
      this.modal = true;
    },
    ok() {
      setTimeout(() => {
        this.modal = false;
      }, 2000);
      this.$Message.info("噢耶~");
    },
    description(){
      alert(222)
    }
  }
};
</script>
<style scoped>
.loginBox {
  position: absolute;
  float: right;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px;
}
button {
  margin: 5px;
}
</style>
