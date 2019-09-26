<template>
  <i-form :model="formInline"  class="login-Box">
    <Form-item prop="user">
      <i-input type="text" :value.sync="formInline.user" placeholder="用户名" v-model="name">
        <Icon type="ios-person" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="password">
      <i-input type="password" :value.sync="formInline.password" placeholder="密码" v-model="pwd">
        <Icon type="ios-unlock" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="email">
      <i-input type="text" :value.sync="formInline.email" placeholder="邮箱" v-model="email">
        <Icon type="ios-mail" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="sex">
      <RadioGroup v-model="sex">
        <Radio v-for="item in workOrderList" :label="item.label" :key="item.value"></Radio>
      </RadioGroup>
    </Form-item>
    <Form-item>
      <i-button type="primary" shape="circle" size="large" @click="doRegister">注册</i-button>
    </Form-item>
  </i-form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name:'',
      pwd:'',
      email:'',
      sex:'',
      formInline: {
        user: "",
        password: ""
      },
      workOrderList: [
        {
          label: "男",
          value: "男"
        },
        {
          label: "女",
          value: "女"
        }
      ]
    };
  },
  methods: {
    doRegister(){
      var _url="http://192.168.8.12:8012/register?name="+this.name+"&pwd="+this.pwd+"&sex="+this.sex+"&email="+this.email;
      this.axios
      .get(_url)
      .then(() => {
        alert('注册成功');
        this.$router.go(0);
      })
      .catch();
    }
  }
};
</script>

<style scoped>
.login-Box {
  padding: 0 72px;
  text-align: center;
}
</style>
