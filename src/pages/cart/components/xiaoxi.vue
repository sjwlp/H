<template>
  <view>
    <uni-list>
      <uni-list :border="true">
        <!-- 显示圆形头像 -->
        <uni-list-chat
          :avatar-circle="true"
          title="智能健康小助手"
          avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
          note="你好，我是您的健康小助手"
          time="2020-02-02 20:20"
        ></uni-list-chat>
        <uni-list-chat
          :avatar-circle="true"
          title="小智老师"
          avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
          note="你好，我是小丽老师"
          time="2020-02-02 20:20"
        ></uni-list-chat>
        <uni-list-chat
          :avatar-circle="true"
          title="小丽老师"
          avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
          note="你好，我是小刚老师"
          time="2020-02-02 20:20"
        ></uni-list-chat>
        <uni-list-chat
          :avatar-circle="true"
          title="小刚老师"
          avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
          note="你好，我是小智老师"
          time="2020-02-02 20:20"
        ></uni-list-chat>

        <!-- 右侧带角标 -->
      </uni-list>
    </uni-list>
  </view>
</template>

<script setup></script>

<style lang="scss" scoped></style>
