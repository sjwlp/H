<template>
  <div><HmHeadPortraitCard :user="user" /></div>
</template>

<script setup>
import HmHeadPortraitCard from './hm-head-portrait-card/index.vue'
const user = {
  actionBg: './images/img_25814_0_0.png',
  avator: './images/img_25814_0_1.png',
  name: '心理小助手',
  info: '港湾号:0000000',
  num: '1570',
  num2: '2570',
  num3: '230',
  fans: '收藏',
  article: '粉丝',
  attention: '关注',
}
</script>

<style lang="scss" scoped></style>
