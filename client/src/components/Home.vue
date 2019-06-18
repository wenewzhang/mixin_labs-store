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
