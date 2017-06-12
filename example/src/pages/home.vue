<template>
  <div class="home">
    <div class="home-header ly-row-flex flex-middle">
      <h1 class="header-name">vue-fullpage</h1>
    </div>
    <div class="home-content ly-row-flex flex-start">
      <div class="side-menu">
        <ul>
          <li>
            Installation
          </li>
          <li></li>
        </ul>
      </div>

      <div class="sub-content ly-row-flex flex-start">
        <div class="doc-desc">
          <h3>Installation</h3>
          <div class="installation-code" v-html="markedCode(markdownString.installation)">
          </div>
          <h3>Import</h3>
          <div class="installation-code" v-html="markedCode(markdownString.installation)">
          </div>
          <div ref="code">
            <pre><code class="lang-js">npm <span class="hljs-keyword">install</span>vue-fullpage<span class="hljs-comment">--save</span></code></pre>
          </div>
        </div>
        <div class="demo-wrapper">
          <div class="fullpage-container">
            <div class="fullpage-wp" v-fullpage>
              <div class="page-1 page">
                <p class="part-1" v-animate="'bounceInLeft'">{{msg}}</p>
              </div>
  
              <div class="page-2 page">
                <p class="part-2" v-animate="'bounceInRight'">{{msg}}</p>
              </div>
  
              <div class="page-3 page">
                <p class="part-3" v-animate="'fadeInDownBig'">{{msg}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'home',
  data() {
    return {
      msg: 'vue-fullpage',
      markdownString: {
        installation: '```js\nnpm install vue-fullpage --save\n```',
        import: ''
      }
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
    },
    evtLogCode() {
      let markedStr = this.markedCode(this.$refs.code.innerHTML)
      console.log(markedStr)
    }
  },
  created() {
    this.highlightCode()
    this.$nextTick(() => {
      this.evtLogCode()
    })
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
