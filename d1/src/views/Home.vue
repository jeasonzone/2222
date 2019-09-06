<template>
  <div class="home">
    <Carousel v-model="value1" loop class="carBox home-img" autoplay>
      <CarouselItem>
        <div class="demo-carousel">
          <img alt="Vue logo" src="../assets/p1.png" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img alt="Vue logo" src="../assets/p2.png" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img alt="Vue logo" src="../assets/p3.png" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img alt="Vue logo" src="../assets/p4.png" />
        </div>
      </CarouselItem>
    </Carousel>
    <Photos />
    <Footer />
  </div>
</template>

<script>
import Photos from "@/components/Photos.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Photos,Footer
  },
  data() {
    return {
      value1: 0
    };
  }
};
</script>
<style>
.carBox {
  height: 764px;
}
.home-img img {
  width: 100%;
  height: 100vh;
}
</style>