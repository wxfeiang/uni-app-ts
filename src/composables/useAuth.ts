import { useAuthStore } from "@/stores/authStore"
const authStore = useAuthStore()
const http = uni.$u.http

//
interface userInfo {
  name: string
  id: number
}

let userInfo = ref(<userInfo>{})
const loginFrom = reactive({
  username: "admin",
  password: "123456"
})
const rules = {
  username: {
    type: "string",
    required: true,
    message: "请填用户名",
    trigger: ["blur"]
  },
  password: {
    type: "string",
    required: true,
    message: "请输入密码",
    trigger: ["blur", "change"]
  }
}
const success = ref<any>()

const Login = async () => {
  try {
    const config = {
      custom: { toast: true }
    }
    const data = await http.post("/employee/login", loginFrom, config) // 参数 空配置
    authStore.SETTIKEN(data)
    userInfo.value = data
    uni.switchTab({
      url: "/pages/home/index"
    })
  } catch (error: any) {
    success.value = error
    userInfo.value = error
  }
}
const getToken = async () => {
  try {
    const config = {
      params: {}, // 提交参数 params  url拼接
      custom: { auth: true, toast: true }
    }
    const data = await http.get("/employee/test", config)
  } catch (error) {
    console.log("🍲[error]:", error)
  }
}
// const test = () => {
//   uni.$u.toast("点击了==")
//   uni.switchTab({
//     url: "/pages/home/index"
//   })
// }
export default () => {
  return { Login, userInfo, getToken, loginFrom, rules, success }
}
