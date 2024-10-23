<template>
  <scroll-view refresher-enabled @scrolltolower="onsSrolltolower" refresher-triggered="false">
    <HCustomNavbar />
    <HSwiper />
    <HCaetgoryPanel :picture="picture" />
  </scroll-view>
</template>

<script setup>
const picture = [
  {
    id: '1',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg',
    title: '树洞广场',
    path: '/pages/index/pages/树洞广场/index',
  },
  {
    id: '2',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png',
    title: '活动大赏',
    path: '/pages/index/pages/活动大赏/index',
  },
  {
    id: '3',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png',
    title: '知识普及',
    path: '/pages/index/pages/活动大赏/index',
  },
  {
    id: '4',
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png',
    title: '树洞日记',
    path: '/pages/index/pages/树洞日记/index',
  },
]
</script>

<style lang="scss" scoped>
image {
  width: 400px;
  height: 150px;
}
</style>
