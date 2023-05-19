<template>
  <div class="spec-preview">
    <img :src="skuImageList[curIndex].imgUrl" />
    <div class="event" @mousemove="handler" ref="parsent"></div>
    <div class="big">
      <img :src="skuImageList[curIndex].imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'ZOOM',
  props: ['skuImageList'],
  data() {
    return {
      curIndex: 0
    }
  },
  mounted() {
    this.$bus.$on('getindex', (index) => {
      this.curIndex = index
    })
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

 

 

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
