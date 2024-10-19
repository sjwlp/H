<script setup lang="ts">
//
const picture = [
  {
    id: '1',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg',
    title: '树洞广场',
  },
  {
    id: '2',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png',
    title: '活动大赏',
  },
  {
    id: '3',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png',
    title: '知识普及',
  },
  {
    id: '4',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png',
    title: '树洞日记',
  },
]
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
