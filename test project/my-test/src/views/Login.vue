<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    label-width="80px"
    :rules="loginFormRules"
  >
    <!-- 用户名 -->
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password"></el-input>
    </el-form-item>
    <!-- 登录，重置，退出按钮 -->
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="info" @click="reset">重置</el-button>
      <el-button type="info" @click="logout">退出</el-button>
    </el-form-item>

    <el-form-item> </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      // 这是表单的验证规则
      loginFormRules: {
        // 验证用户名
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '用户名长度在3到10个字符之间',
            trigger: 'blur',
          },
        ],
        // 验证密码
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '密码长度在6到15字符之间',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return
        await this.$http.post('login', this.loginForm).then((res) => {
          if (res.status !== 200) this.$message.error('登录失败')
          this.$message.success('登录成功')
          console.log(res)

          // 把token保存在sessionStorage
          window.sessionStorage.setItem('token', res.data.data.token)
          // 登录成功进行页面跳转，跳转到主页
          this.$router.push('/home')
        })
      })
    },
    reset() {
      this.$refs.loginForm.resetFields()
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped></style>
