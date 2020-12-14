<template>
  <el-container id="layout">
    <el-header :style="{ padding: 0 }"><Header /></el-header>
    <el-container :style="{ height: 'calc(100% - 60px)' }">
      <el-aside width="260px" :style="{ height: '100%' }"><Aside /></el-aside>
      <el-main :style="{ padding: 0 }">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./components/Aside";
import Header from "./components/Header";
export default {
  components: {
    Aside,
    Header
  }
};
</script>

<style lang="scss" scoped>
#layout {
  height: 100%;
}
</style>
