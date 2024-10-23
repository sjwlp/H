<script setup lang="ts">
//
const props = defineProps({
  picture: {},
})
function but(path: string) {
  console.log(path)
  uni.navigateTo({
    url: path,
    success: (success) => {
      console.log('跳转成功')
    },
    fail: (fail) => {
      console.log('跳转失败')
    },
  })
}
</script>
<template>
  <view:any class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in picture"
      :key="item.id"
    >
      <image
        class="icon"
        src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg"
        @click="but(item.path)"
      ></image>
      <text:any class="text">{{ item.title }}</text:any>
    </navigator>
  </view:any>
</template>

<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 200rpx;
  background-color: #f7f7f7;

  .category-item {
    width: 100rpx;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-left: 35px;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
