<script setup lang="ts">
const { navOption, conunt, allList } = useTax();
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
  <view class="dy_body list_warp">
    <u-cell-group :border="false">
      <u-cell
        v-for="(item, index) in conunt"
        :key="index"
        :title="item.title"
        :value="`${item.value}${item.unit}`"
      ></u-cell>
    </u-cell-group>
  </view>

  <view class="dy_body list_warp" v-for="(item, index) in allList" :key="index">
    <!--  多个list -->
    <u-cell-group :border="false">
      <u-cell
        v-for="(i, j) of item"
        :key="j"
        :title="item.title"
        :border="false"
      ></u-cell>
    </u-cell-group>
  </view>
</template>
<style lang="scss" scoped>
page,
body {
  background: #f5f6fa;
}
.dy_body {
  padding: 0px 20px;
}
.list_warp {
  margin-top: 14px;

  background-color: #fff;
}
::deep .u-cell__body {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
