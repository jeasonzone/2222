<template>
  <Card class="footBox">
    <div style="text-align:center">
      <img src="../assets/footerimg.png" @click="description" />
      <h3>尾部文字</h3>
      <Small Head style="display:inline">I'm run for</Small>-
      <Main Head style="display:inline">{{dayCount}}</Main>-days
    </div>
    <Modal :visible.sync="modal1" v-model="modal1" :closable="false">
      <Card style="width:100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>关于本站
        </p>
        <div>
          <h3 class="card-h3">本站作者：{{author}}</h3>
          <h3 class="card-h3">创作时间：{{createTime}}</h3>
          <h3 class="card-h3">版本类型：{{version}}</h3>
          <h3 class="card-h3">相关描述：{{descriptions}}</h3>
        </div>
      </Card>
    </Modal>
  </Card>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      author: "",
      createTime:"",
      version:"",
      descriptions:"",
      modal1: false,
      dayCount: 0,
      loading: true
    };
  },
  mounted: function() {
    this.getDay();
    this.axios
      .get("https://www.easy-mock.com/mock/5cd4c55af513805bcc0f8570/example/")
      .then(response => {
        this.author = response.data.data.author;
        this.createTime=response.data.data.createTime;
        this.version=response.data.data.version;
        this.descriptions=response.data.data.description;
              })
      .catch();
  },
  methods: {
    getDay: function() {
      var sdate = new Date("Mon Sep 02 2019 10:00:00 GMT+0800 (中国标准时间)");
      var now = new Date();
      var days = now.getTime() - sdate.getTime();
      var day = parseInt(days / (1000 * 60 * 60 * 24));
      this.dayCount = day;
    },
    description: function() {
      this.modal1 = true;
    }
  }
};
</script>

<style scoped>
.footBox {
  text-align: center;
  width: 100%;
}
.card-h3 {
  text-align: center;
}
</style>
