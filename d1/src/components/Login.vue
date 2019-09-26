<template>
  <i-form :model="formInline" :rules="ruleInline" class="login-Box">
    <Form-item prop="user">
      <i-input type="text" :value.sync="formInline.user" placeholder="用户名" v-model="userId">
        <Icon type="ios-person" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="password">
      <i-input type="password" :value.sync="formInline.password" placeholder="密码" v-model="pwd">
        <Icon type="ios-unlock" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item>
      <i-button type="primary" shape="circle" size="large" @click="check_login">登录</i-button>
    </Form-item>
  </i-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        user: "",
        userId: "",
        pwd: "",
        password: "",
        users:[]
      },
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted: function() {
    this.axios
      .get("http://192.168.8.12:8012/login")
      .then(response => {
        this.users=response.data.data
      })
      .catch();
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    },
    check_login() {
      var temp=this.users.find(item=>{
        return item.name==this.userId
      })
      if(!temp){
        alert("该用户不存在")
      }
      else{
        if(this.pwd===temp.pwd){alert("登录成功！")}else{
          alert("密码出错")
        }
      }
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
