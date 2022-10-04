<script setup>
import { ref } from 'vue'
const data = ref()

const callback = (response) => {
  data.value = response
}
</script>

<template>
  <div>
    <!-- 使用 Google 渲染預設按鈕 -->
    <!-- <GoogleLogin :callback="callback" /> -->

    <!-- 使用 Google 渲染預設按鈕及 One Tap prompt -->
    <GoogleLogin :callback="callback" prompt />

    <!-- 使用 Google 渲染預設按鈕及 One Tap prompt 並自動登入 -->
    <!-- <GoogleLogin :callback="callback" prompt auto-login/> -->

    <p>
      {{ data }}
    </p>
  </div>
</template>

<style scoped>
p {
  margin-top: 12px;
  word-break: break-all;
}
</style>