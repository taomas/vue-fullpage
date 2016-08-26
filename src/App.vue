<template>
  <div id="app">
    <div class="page-container">
      <div v-page="123" class="page-wp">
        <div class="page1">
          1
        </div>
        <div class="page2">
          2
        </div>
        <div class="page3">
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
  transform: translate3d(0,0,0);
  transition: all 500ms ease-out 0s;
}

.fullPage-page {
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  color: #000;
  overflow: hidden;
  transition: all 500ms ease-out 0s;
}

.fullPage-wp .active {
  height: 100%;
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
