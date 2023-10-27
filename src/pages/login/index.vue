<script setup lang="ts">
const { Login, userInfo, getToken, loginFrom, rules } = useAuth();
const customStyle = reactive({
  color: "red",
  border: "none",
});
const list = ref<any[]>([
  {
    name: "综合",
    value: 1,
  },
  {
    name: "销量",
    value: 2,
  },
  {
    name: "价格",
    value: 12,
    sort: true,
    iconSize: 8,
    activeColor: "",
  },
]);
const downMeun = (e) => {
  console.log("🍭[e]:", e);
};
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
  <view style="width: 20px">
    <up-button
      type="primary"
      :plain="true"
      :hairline="true"
      text="细边"
      :customStyle="customStyle"
    ></up-button>
  </view>
  <downMenuLIst :list="list" @tab="downMeun" />
</template>
<style></style>
