<script setup lang="ts">
import { log } from 'console'
import HmHeadPortraitCard from './hm-head-portrait-card/index.vue'
function onClick(path) {
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
const item1 = [
  {
    id: '1',
    title: '个人资料',
    url: '',
  },
  { id: '2', title: '我的测试', url: '/pages/my/pages/我的测试/index' },
  { id: '6', title: '我的咨询师', url: '/pages/my/pages/我的咨询师/index' },
  { id: '3', title: '特殊用户认证', url: '/pages/my/pages/特殊用户认证/index' },
  { id: '4', title: '心理专业学生认证', url: '/pages/my/pages/心理专业学生认证/index' },
  { id: '5', title: '心理咨询师证', url: '/pages/my/pages/心理咨询师认证/index' },
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
            @click="onClick(item.url)"
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
