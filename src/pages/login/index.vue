<script setup lang="ts">
// 小程序需要导入 要不然不显示===
import Down from "@/components /down/down.vue";
const { Login, userInfo, getToken, loginFrom, rules } = useAuth();
</script>
<template>
  <div class="warp_box">
    <u-form labelPosition="left" :model="loginFrom" :rules="rules" ref="loginRules">
      <u-form-item label="姓名" prop="username" borderBottom>
        <u-input v-model="loginFrom.username" border="none"></u-input>
      </u-form-item>
      <u-form-item label="密码" prop="password" borderBottom>
        <u-input v-model="loginFrom.password" border="none"></u-input>
      </u-form-item>
    </u-form>
  </div>
  <up-button type="primary" text="测试登录" @click="Login"></up-button>

  <up-button type="primary" :plain="true" text="测试token" @click="getToken"></up-button>
  <div>div 应用组件 显示==</div>
  <Down />
</template>
<style>
.warp_box {
  margin: 50upx auto;
}
</style>
