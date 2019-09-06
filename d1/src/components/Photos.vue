<template>
  <Row type="flex" justify="center" class="code-row-bg foot-height">
        <i-col span="4" class="i-col"><img alt="Vue logo" src="../assets/s1.png" @mouseenter="enter(1)"  :class="[ { animated:1==current },{ pulse:1==current }]"/></i-col>
        <i-col span="4" class="i-col"><img alt="Vue logo" src="../assets/s1.png" @mouseenter="enter(2)" :class="[ { animated:2==current },{ pulse:2==current }]"/></i-col>
        <i-col span="4" class="i-col"><img alt="Vue logo" src="../assets/s1.png" @mouseenter="enter(3)" :class="[ { animated:3==current },{ pulse:3==current }]"/></i-col>
        <i-col span="4" class="i-col"><img alt="Vue logo" src="../assets/s1.png" @mouseenter="enter(4)" :class="[ { animated:4==current },{ pulse:4==current }]"/></i-col>
    </Row>
</template>

<script>
export default {
  name: "Photos",
  data(){
    return{
      current:-1
    }
  },
   methods:{
     enter(index){
       this.current=index
     }
   }
};
</script>

<style scoped>
.i-col{
  margin: 20px;
  width: 300px;
  height: 500px;
}
</style>
