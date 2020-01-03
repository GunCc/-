<template>
  <div>
    <el-form @submit.native.prevent="submit">
      <h3>用户权限（添加URL）</h3>
      <el-button
        size="small"
        icon="el-icon-plus"
        @click="model.funccode.push('')"
      >
        添加权限url
      </el-button>
      <el-form-item
        v-for="(item,index) in model.funccode"
        :key="index"
        style="margin-top:10px"
      >
        <el-input
          v-model="model.funccode[index]"
          clearable
          type="text"
        />
        <el-button
          type="danger"
          size="mini"
          style="margin-left:15px"
          @click="model.funccode.splice(index,1)"
        >
          删除
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
        >
          确认修改
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        funccode: [],
        id: 0,
        roleid: 0
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      var res = await this.$http.get(
        `findRolePermissionByRoleId/${this.$route.params.id}`
      );
      this.model = res.data;
      var mes = await this.$http.get("findAllRolePermission");
    },
    async submit() {
      var res = await this.$http.post("updateRolePermission", this.model);
      console.log(res);
      if(res.status == 200){
        this.$message({
          type:"success",
          message:"修改成功"
        })
        this.$router.push('/auoth/list')
      }
    },
    get(e) {
      this.$forceUpdate();
    }
  }
};
</script>
<style scoped>
.el-input {
  width: 300px;
 
}
</style>