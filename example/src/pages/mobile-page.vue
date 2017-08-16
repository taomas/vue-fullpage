<template>
  <div class="mobile">
    <vue-phone></vue-phone>
  </div>
</template>

<script>
import Phone from '../components/phone.vue'
export default {
  components: {
    'vue-phone': Phone
  }
}
</script>


<style>
.mobile {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
