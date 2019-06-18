<template>
  <hooper   :autoPlay="true" :playSpeed="2000">
    <slide>
      Buy1
    </slide>
    <slide>
      Buy2
    </slide>
    <slide>
      Buy3
    </slide>
    <hooper-progress slot="hooper-addons"></hooper-progress>
  </hooper>
</template>

<script>
import { Hooper, Slide, Progress as HooperProgress } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'App',
  components: {
    Hooper,
    HooperProgress,
    Slide
  }
}
</script>

<style scoped>
.hooper-slide {
 background-color:#62caaa;
 padding:20px;
 display:flex;
 justify-content:center;
 align-items:center;
 color:#fff;
 border:2px solid #fff;
 font-size:30px;
 border-radius:10px;
}
.is-active {
 background-color:#47da7f;
}
</style>
