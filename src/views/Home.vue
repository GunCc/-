<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside
      width="200px"
      style="background-color: rgb(238, 241, 246)"
    >
      <el-menu
        router
        :default-openeds="['1']"
        unique-opened
        :default-active="$route.path"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message" />授权管理
          </template>
          <el-menu-item-group>
            <template slot="title">
              权限
            </template>
            <el-menu-item index="/auoth/create">
              新建权限
            </el-menu-item>
            <el-menu-item index="/auoth/list">
              权限列表
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px"
          />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>