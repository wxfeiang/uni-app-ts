<script setup lang="ts">
const { navOption, conunt } = useTax();
</script>
<template>
  <view>
    <u-navbar
      :leftText="navOption.leftText"
      :leftIconColor="navOption.textColor"
      :title="navOption.title"
      :safeAreaInsetTop="false"
      autoBack
      :placeholder="navOption.title"
      fixed
    >
      <template #right>
        <view :style="`color:${navOption.textColor}`">
          {{ navOption.rightText }}
        </view>
      </template>
    </u-navbar>
  </view>
  <view class="list_warp">
    <u-cell-group :border="false">
      <u-cell
        v-for="(item, index) in conunt"
        :key="index"
        :title="item.title"
        :value="`${item.value}${item.unit}`"
      ></u-cell>
    </u-cell-group>
  </view>
</template>
<style lang="scss" scoped>
page,
body {
  background: #f5f6fa;
}
.layout {
  padding: 0 20px;
}
.list_warp {
  margin-top: 14px;
  padding: 0px 20px 0;
  background-color: #fff;
}
::deep .u-cell__body {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
