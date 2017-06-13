<template>
  <div class="markdown">
    <div v-html="markedHtml"></div>
    <slot>
    </slot>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'mark',
  data() {
    return {
      isShowMarkStr: false,
      markedHtml: ''
    }
  },
  methods: {
    htmlDeCode(str) {
      const div = document.createElement('div')
      div.innerHTML = str
      return div.innerText || div.textContent
    },
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
    markdown() {
      let markStr = this.htmlDeCode(this.$el.getElementsByClassName('mark-text')[0].innerHTML)
      this.markedHtml = this.markedCode(markStr)
    }
  },
  created() {
    this.highlightCode()
    this.$nextTick(() => {
      this.markdown()
    })
  }
}
</script>

<style lang='postcss' scoped>
.mark-text {
  display: none;
  margin: 0;
  padding: 0;
}
</style>
