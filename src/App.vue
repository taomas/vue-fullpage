<template>
  <div id="app">
    <div class="page-container">
      <div v-page="123" class="fullPage-wp">
        <div class="page page1">
          1
        </div>
        <div class="page page2">
          2
        </div>
        <div class="page page3">
          3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.page-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fullPage-wp {
  width: 100%;
  height: 100%;
  transform: translate3d(0,0,0);
  transition: all 500ms ease-out 0s;
}

.page {
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  color: #000;
}

.fullPage-wp {
  transform: translate3d(0,0,0);
  transition: all 500ms ease-out 0s;
}

.fullPage-page {
  display: block;
  overflow: hidden;
}

.page1 {
  background: rgb(75, 191, 195);
}

.page2 {
  background: rgb(123, 170, 190);
}

.page3 {
  background: rgb(27, 188, 155);
}

</style>
