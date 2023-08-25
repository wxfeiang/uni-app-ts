<script setup lang="ts">
const { navOption, conunt, allList, constant } = useTax();
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
        :border="index != conunt.length - 1"
        :titleStyle="item.titleStyle"
      ></u-cell>
    </u-cell-group>
  </view>

  <view class="dy_body list_warp list_box" v-for="(item, index) in allList" :key="index">
    <!--  多个list -->
    <u-cell-group :border="false">
      <u-cell :title="constant.title" :border="false" :titleStyle="constant.titleStyle">
        <template #right-icon>
          <view class="right_time">{{ item.time }}</view>
        </template>
      </u-cell>
      <u-cell
        :border="false"
        :title="constant.smTitle + item.smTitle"
        :titleStyle="constant.titelOthStyle"
        class="dy_cell"
      >
      </u-cell>
      <u-cell
        :border="false"
        :title="constant.company + item.company"
        :isLink="true"
        arrow-direction="right"
        :titleStyle="constant.titelOthStyle"
        class="dy_cell"
      >
      </u-cell>
      <u-cell
        :border="false"
        :title="constant.income + item.income + constant.unit"
        :titleStyle="constant.titelOthStyle"
        class="dy_cell"
      >
      </u-cell>
      <u-cell
        :border="false"
        :title="constant.declaredTaxAmount + item.declaredTaxAmount + constant.unit"
        :titleStyle="constant.titelOthStyle"
        class="dy_cell"
      >
      </u-cell>
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
  margin-top: 12px;
  background-color: #fff;
}
::v-deep .u-cell__body {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.list_box {
  padding: 5px 20px 20px;
}
.dy_cell ::v-deep .u-cell__body {
  padding-top: 2px !important;
  padding-bottom: 0px !important;
}
.right_time {
  color: #333;
  padding-right: 30px;
  font-size: 16px;
  font-weight: 500;
}
</style>
