<template>
  <div id="robot-popup">
    <h1 class="robot-popup-title">财务机器人（指标调剂）</h1>
    <div class="robot-popup-main">
      <el-button type="primary" @click="openBackground" v-if="showIn" round>导入数据</el-button>
      <div class="" v-else>
        <span class="popup-file">xxxx.txt</span>
        <el-button type="danger" round>删除</el-button>
        <el-button type="primary" round>执行</el-button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from "vue";
import "../../styles/normalize.css";
let showIn = ref(true)
const openBackground = () => {
  chrome.tabs.create({ url: chrome.extension.getURL('background.html') })
}
const test = () => {
  showIn.value = !showIn.value
  console.log(showIn);
}
</script>

<style lang="scss" scoped>
#robot-popup {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  max-width: 790px;
  min-width: 600px;
  max-height: 560px;
  min-height: 200px;

  .robot-popup-title {
    margin-top: 20px;
    text-align: center;
    color: #409eff;
    font-size: 20px;
    font-weight: 460;
  }

  .robot-popup-main {
    margin-top: 20px;
    display: flex;
  }

  .el-button,
  .popup-file {
    margin-left: 15px;
  }

  .popup-file {
    font-size: 15px;
  }
}
</style>