<template>
  <div class="hello">
    <button @click="show" >点我</button>
    <div class="show" v-show="showText">
      {{content}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: '',
      showText: false
    }
  },
  methods: {
    show () {
      this.showText = !this.showText
    }
  },
  mounted () {
    this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.content = response.data.bpi
      })
      .catch()
  }
};
</script>