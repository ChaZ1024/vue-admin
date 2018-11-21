<template>
<div class="main">
  <homeTopNav ref="topNav" />
  <div class="main-left">
    <homeLeftNav :style="{height:winHeight}" class="left-nav" ref="leftNav"  />


    <iframe :style="{width:winWidth,height:winHeight}" class="content" src="/404"></iframe>
  </div>
</div>
</template>

<script>
import homeTopNav from "../components/homeTopNav"
import homeLeftNav from "../components/homeLeftNav"
export default {
  components: {
    homeTopNav,
    homeLeftNav
  },
  name: 'home',
  data() {
    return {
      isCollapse: false,
      winHeight: "200px",
          winWidth: "200px",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted: function() {
    document.getElementsByTagName("body")[0].className = "home_bg";
    let topNavHeight = this.$refs.topNav.$el.clientHeight
    let leftNavWidth = this.$refs.leftNav.$el.clientWidth
    let winHeight = document.documentElement.clientHeight
    let winWidth = document.documentElement.clientWidth
    this.winHeight = (winHeight - topNavHeight) + "px"
    this.winWidth = (winWidth - leftNavWidth) + "px"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.left-nav {
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 300px;

}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.home_bg {
  overflow: hidden;
}
.main-left{
  display: flex;
  flex-direction: row;
}
.content {
  width: 200px;
  height: 200px;
  background: #ffffff;
  border: none;

}
</style>
