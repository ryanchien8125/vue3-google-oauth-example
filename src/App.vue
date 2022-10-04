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
    <!-- <GoogleLogin :callback="callback" prompt /> -->

    <!-- 使用 Google 渲染預設按鈕及 One Tap prompt 並自動登入 -->
    <!-- <GoogleLogin :callback="callback" prompt auto-login/> -->

    <!-- 使用 GoogleLogin 並在預設插槽內添加自定義按鈕 -->
    <GoogleLogin :callback="callback">
      <button>使用 Google 進行登入</button>
    </GoogleLogin>

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