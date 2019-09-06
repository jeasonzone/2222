<template>
  <i-form :model="formInline" :rules="ruleInline" class="login-Box">
    <Form-item prop="user">
      <i-input type="text" :value.sync="formInline.user" placeholder="用户名">
        <Icon type="ios-person" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item prop="password">
      <i-input type="password" :value.sync="formInline.password" placeholder="密码">
        <Icon type="ios-unlock" slot="prepend"></Icon>
      </i-input>
    </Form-item>
    <Form-item>
      <i-button type="primary" shape="circle" size="large">登录</i-button>
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
        password: ""
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
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
        }
      });
    }
  }
};
</script>

<style scoped>
.login-Box {
  padding:0 72px;
  text-align: center;
}
</style>
