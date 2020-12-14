<template>
  <div id="header">
    <div class="logo">东华仓库管理系统</div>
    <div class="navigation">
      <div class="item">
        <i class="el-icon-s-custom"></i>
        <span>用户</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  height: 100%;
  background: #1f2022;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 20px;
    font-weight: bold;
    padding: 0 12px;
  }
  .navigation {
    .item {
      padding: 0 12px;
      cursor: pointer;
      i {
        margin-right: 6px;
      }
    }
  }
}
</style>
