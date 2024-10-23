<template>
  <div class="hm-head-portrait-card">
    <div class="box">
      <div class="bd">
        <image class="actionBg" src="./images/img_25814_0_0.png" />
        <image class="avator" src="./images/img_25814_0_1.png" />
        <div class="wrap">
          <text class="name">{{ user.name }}</text>
          <text class="info">{{ user.info }}</text>
        </div>
      </div>
      <div class="ft">
        <text class="num">{{ user.num }}</text>
        <text class="num2">{{ user.num2 }}</text>
        <text class="num3">{{ user.num3 }}</text>
      </div>
      <text class="fans">{{ user.fans }}</text>
      <text class="article">{{ user.article }}</text>
      <text class="attention">{{ user.attention }}</text>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataId: {
      type: String,
      default: 'hm-head-portrait-card',
    },
    user: {
      type: Object,
      default: function () {
        return {
          actionBg: './images/img_25814_0_0.png',
          avator: './images/img_25814_0_1.png',
          name: '心理小助手',
          info: '港湾号：0000000',
          num: '1570',
          num2: '2570',
          num3: '230',
          fans: '收藏',
          article: '粉丝',
          attention: '关注',
        }
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style>
@import './index.response.css';
</style>
