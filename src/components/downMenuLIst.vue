<script setup lang="ts">
const emit = defineEmits(["tab"]);
const props = defineProps({
  active: {
    default: "#1890ff",
    type: String,
  },
  list: {
    default: [],
    type: Array,
  },
});

const currentlist = ref<any>([]);

currentlist.value = JSON.parse(JSON.stringify(props.list)).map((i: any) => {
  return { ...i, current: i.sort ? 0 : null };
});

const currentIndex = ref<number>();
const tagClick = (item: any, index: number) => {
  currentIndex.value = index;
  currentlist.value[index].current++;
  if (item.current > 2) {
    currentlist.value[index].current = 0;
  }
  emit("tab", currentlist.value[index]);
};
</script>
<template>
  <view class="warp" v-if="currentlist?.length > 0">
    <view
      class="item_box"
      v-for="(item, index) in currentlist"
      :key="index"
      @click="tagClick(item, index)"
      :style="{ color: currentIndex === index ? props.active : '' }"
    >
      <view class="left">{{ item.name }}</view>
      <view class="right" v-if="item.sort">
        <u-icon
          name="arrow-up-fill"
          :size="item.iconSize"
          :color="item.current == 1 ? item.activeColor || props.active : ''"
        ></u-icon>

        <u-icon
          name="arrow-down-fill"
          :size="item.iconSize"
          :color="item.current == 2 ? item.activeColor || props.active : ''"
        >
        </u-icon>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.warp_box {
  margin: 50upx auto;
}
.warp {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: "#fff";
  border: 1px solid #eee;
  padding: 10px;

  .item_box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    &.active {
      color: #1890ff;
    }
    .left {
      font-size: 16px;
    }
    .right {
      margin-left: 4px;
      color: #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
