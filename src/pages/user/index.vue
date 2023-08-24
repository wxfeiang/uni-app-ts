<script setup lang="ts">
const { indexList, goDetil } = useUser();
</script>
<template>
  <view class="u-page">
    <u-list>
      <u-list-item v-for="(item, index) in indexList" :key="index">
        <u-cell :title="item.title" @click="goDetil(item.url)">
          <template #icon>
            <u-avatar
              shape="square"
              size="35"
              :src="item.img"
              customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
          </template>
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
