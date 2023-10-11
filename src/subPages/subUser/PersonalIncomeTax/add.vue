<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
const { userInfo } = useAuthStore();
const http = uni.$u.http;
interface From {
  name?: string;
  type: string;
  company: string;
  deduct: number;
  revenue: number;
  date: string;
}
const form = ref<From>({
  // name: "ceshi",
  type: "53",
  company: "",
  deduct: 54,
  revenue: 38,
  date: "1975-10-10",
});
const rules = {
  company: [
    {
      required: true,
      message: "请输入",
      trigger: ["blur", "change"],
    },
  ],
  type: [
    {
      required: true,
      message: "请输入",
      trigger: ["blur", "change"],
    },
  ],
  deduct: [
    {
      type: "number",
      required: true,
      message: "请输入",
      trigger: ["blur", "change"],
    },
  ],
  revenue: [
    {
      type: "number",
      required: true,
      message: "请输入",
      trigger: ["blur", "change"],
    },
  ],
  date: [
    {
      required: true,
      message: "请输入",
      trigger: ["blur", "change"],
    },
  ],
};
const uForm = ref(null);
console.log("🥘[uForm]:", uForm);
function submit() {
  uForm.value
    .validate()
    .then(async (res) => {
      console.log("🍩[res]:", res);
      uni.$u.toast("校验通过");
      try {
        const config = {
          custom: { auth: true, toast: true },
        };
        const data = {
          ...form.value,
          name: "sdsd",
          eId: userInfo.id,
        };
        const rul = await http.post("/individualtaxes", data, config);
        console.log("🥩[res]:", rul);
      } catch {
        console.log("🍨");
      }
    })
    .catch((errors) => {
      uni.$u.toast("校验失败");
    });
}
</script>
<template>
  <u-navbar title="添加" autoBack :placeholder="true" fixed> </u-navbar>

  <view class="">
    <u--form :model="form" ref="uForm" :rules="rules">
      <u-form-item label="公司" prop="company">
        <u-input v-model="form.company" />
      </u-form-item>
      <u-form-item label="类别" prop="type">
        <u-input v-model="form.type" />
      </u-form-item>
      <u-form-item label="扣除" prop="deduct">
        <u-input v-model="form.deduct" />
      </u-form-item>
      <u-form-item label="收入" prop="revenue">
        <u-input v-model="form.revenue" />
      </u-form-item>
      <u-form-item label="年月" prop="date">
        <u-input v-model="form.date" />
      </u-form-item>
    </u--form>
    <u-button @click="submit">提交</u-button>
  </view>
</template>
<style lang="scss" scoped></style>
