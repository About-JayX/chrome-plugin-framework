<template>
  <div id="home-page">
    <div class="home-page-title">财务机器人（指标调剂）</div>
    <el-button type="primary" round @click="test">导入数据{{ testValue }}</el-button>
  </div>
</template>

<script setup>
import hotReload from "@/utils/hotReload";
import "../../styles/normalize.css";
import { ref } from "vue";
const testValue = ref(0)
const test = () => {
  console.log("触发test");
  console.log(testValue, "testValue");
  testValue.value = testValue.value + 1
}
hotReload();

</script>
<style lang="scss" scoped>
#home-page {
  max-width: 1400px;
  min-width: 600px;
  margin: 0px auto;

  .home-page-title {
    text-align: center;
    font-size: 20px;
    color: #409eff;
    font-weight: 460;
    padding: 20px 20px 12px 20px;
  }
}
</style>