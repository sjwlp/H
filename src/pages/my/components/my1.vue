<script setup lang="ts">
import HmHeadPortraitCard from './hm-head-portrait-card/index.vue'

const item1 = [
  {
    id: '1',
    title: '个人资料',
    url: '',
  },
  { id: '2', title: '我的测试', url: '' },
  { id: '6', title: '我的咨询师', url: '' },
  { id: '3', title: '特殊用户认证', url: '' },
  { id: '4', title: '心里专业学生认证', url: '' },
  { id: '5', title: '心理咨询师忍认证', url: '' },
]
</script>
<template>
  <view class="main">
    <view class="my-h">
      <HmHeadPortraitCard />
    </view>
    <view class="my-m">
      <HCaetgoryPanel />
    </view>
    <view class="my-b">
      <uni-list v-for="item in item1" :key="item.id" :border="false">
        <div>
          <uni-list-item
            :title="item.title"
            :border="false"
            link="redirectTo"
            :to="item.url"
            @click="onClick"
            class="list"
          />
        </div>
      </uni-list>
    </view>
  </view>
</template>
<style lang="scss">
.my-h {
  height: 550rpx;
  width: 100%;
  background-color: aqua;
}
.my-m {
  height: 200rpx;
  width: 100%;
  background-color: red;
  margin-bottom: 60rpx;
}
.my-b {
  height: 600rpx;
  width: 100%;
  background-color: #dedede;
}
.list {
  height: 40rpx;
  width: 100%;
  line-height: 30rpx;
  margin-top: -5rpx;
}
uni-list {
  margin-top: 20rpx;
  display: block;
}
.main {
  background-color: #dedede;
}
</style>
