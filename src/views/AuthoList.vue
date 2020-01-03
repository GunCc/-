<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <!-- <el-table-column prop="id" label="姓名" ></el-table-column> -->
    <el-table-column
      prop="name"
      label="权限名称"
    />
    <el-table-column
      fixed="right"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
          @click="$router.push(`/auoth/add/${scope.row.id}`)"
        >
          编辑
        </el-button>
        <el-button
          type="text"
          size="small"
          @click="del(scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    async getData() {
      var res = await this.$http.get("findAllRole");
      this.tableData = res.data;

    },
    async del(row) {
      this.$confirm(`是否确定删除权限"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.get(`/deleteRole/${row.id}`);
        this.$message({
          type: "success",
          message: "删除成功！"
        });
        this.getData();
      });
    }
  }
};
</script>