<template>
  <div class="bg">
    <div class="box">
      <span class="title">统计后台</span>
      <el-form @submit.native.prevent="login">
        <el-form-item label="账号">
          <el-input v-model="model.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="model.password"
            type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            native-type="submit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "13147049073",
        password: "123456",
        grant_type: "password",
        client_id: "web",
        client_secret: "e25be7592b6a8a2c",
        scope: "read"
      }
    };
  },
  methods: {
    login() {
      localStorage.clear();
      this.$http.post("http://10.1.53.138:10001/oauth/token", this.model).then(
        mes => {
          localStorage.token = mes.data.access_token;
          this.$router.push("/home");
          this.$message({
            type: "success",
            message: "登陆成功"
          });
        },
        mes => {
          localStorage.clear();
          this.$message.error("信息错误");
        }
      );
    }
  }
};
</script>
<style scoped lang="scss">
.bg {
  background-image: url("../assets/bg.png");
  height: 100vh;
  width: 100%;
  background-size: cover;
  overflow: hidden;
  .box {
    background: #fff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
    margin: 200px auto;
    padding: 12px 15px;
    border-radius: 5px;
    .title {
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      display: block;
    }
  }
  .el-form-item {
    margin-top: 10px;
    margin-bottom: 0;
  }
}
</style>
