<script setup>
import { ref } from 'vue'
import { googleTokenLogin, googleAuthCodeLogin } from 'vue3-google-login'

const GOOGLE_CLIENT_ID = '這邊放上你的 Google Client ID'

const data = ref()

const handleGoogleAccessTokenLogin = () => {
  googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    data.value = response
  })
}

const handleGoogleAuthCodeLogin = () => {
  googleAuthCodeLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((response) => {
    data.value = response
  })
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
    <!-- <GoogleLogin :callback="callback">
      <button>使用 Google 進行登入</button>
    </GoogleLogin> -->

    <!-- 使用自定義按鈕登入後回傳 Access Token -->
    <button
      type="button"
      @click="handleGoogleAccessTokenLogin"
    >使用 Google 進行登入</button>

    <!-- 使用自定義按鈕登入後回傳 Auth Code -->
    <!-- <button
      type="button"
      @click="handleGoogleAuthCodeLogin"
    >使用 Google 進行登入</button> -->

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