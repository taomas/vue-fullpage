<template>
  <div class="home">
    <div class="home-header ly-row-flex flex-middle">
      <h1 class="header-name">vue-fullpage</h1>
    </div>
    <div class="home-content ly-row-flex flex-start">
      <textarea name="" id="" cols="30" rows="10" v-model="value"></textarea>
      <div>{{markedCode(this.value)}}</div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'home',
  data() {
    return {
      value: '',
      markedCode: ''
    }
  },
  methods: {
    markedCode(markedStr) {
      return marked(markedStr)
    },
    highlightCode() {
      marked.setOptions({
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value
        }
      })
    }
  },
  created() {
    this.highlightCode()
  }
}
</script>

<style lang='postcss' scoped>
.home {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.home-header {
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  padding-left: 40px;
  color: #fff;
  border-bottom: 1px solid #eee;
  .header-name {
    color: #eee;
    font-size: 36px;
    margin: 0;
    text-shadow: 2px 3px 0 rgba(0,0,0,.2);
  }
}

.home-content {
  width: 100%;
  height: calc(100% - 90px);
  color: #eee;
  .side-menu {
    box-sizing: border-box;
    width: 25%;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .sub-content {
    position: relative;
    box-sizing: border-box;
    width: 75%;
    height: 100%;
    .doc-desc {
      box-sizing: border-box;
      width: calc(100% - 350px);
      height: auto;
      padding: 0 30px;
    }
    .demo-wrapper {
      box-sizing: border-box;
      position: relative;
      width: 300px;
      height: 556px;
      padding: 80px 20px;
      margin-top: 30px;
      background: url('../assets/image/phone_bg.png');
      background-size: 100% 100%;
    }
  }
}

.fullpage-container {
   position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  .fullpage-wp {
    .page {
      p {
        display: block;
        margin-top: 100px;
        text-align: center;
        font-size: 26px;
        color: #eee;
      }
    }
    .page-1 {
      background: #1bbc9b;
    }
    .page-2 {
      background: #000;
    }
    .page-3 {
      background: #abc;
    }
  }
}
</style>
