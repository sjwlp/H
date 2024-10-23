<script setup lang="ts">
const picture = [
  {
    id: '1',
    url: '../',
    title: '在线咨询',
    path: '',
  },
  {
    id: '2',
    url: '../',
    title: '心理测试',
    path: '',
  },
  {
    id: '3',
    url: '../',
    title: '心理课程',
    path: '',
  },
  {
    id: '4',
    url: '../',
    title: '心理FM',
    path: '',
  },
  {
    id: '5',
    url: '../',
    title: '心理阅读',
    path: '',
  },
  {
    id: '6',
    url: '../',
    title: '商城',
    path: '',
  },
]
</script>

<template>
  <image src="" mode="scaleToFill" class="img" />
  <HCaetgoryPanel :picture="picture" />
  <h1>心理咨询师</h1>
  <view class="xlzxs"> </view>
</template>

<style lang="scss">
//
.img {
  width: 800rpx;
  height: 400rpx;
  background-color: aqua;
}
.xlzxs {
  width: 800rpx;
  height: 400rpx;
  background-color: aqua;
}
</style>
