<template>
  <div>
    <el-form @submit.native.prevent="add">
      <h3>添加权限</h3>
      <el-form-item label="权限名称">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
        >
          添加
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    add() {
      this.$http
        .post("addRole", { name: this.name })
        .then(mes => {
          console.log(mes);
           this.$router.push("/auoth/list");
        });
    }
  }
};
</script>