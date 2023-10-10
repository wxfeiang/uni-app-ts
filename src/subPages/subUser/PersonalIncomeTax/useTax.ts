import { useAuthStore } from "@/stores/authStore"
const { userInfo } = useAuthStore()
const http = uni.$u.http
interface allList {
  date: string
  name: string
  company: string
  deduct: number
  revenue: number
}

const navOption = ref({
  leftText: "返回",
  title: "收入纳税明细查询",
  rightText: "批量申诉",
  textColor: "#4985E7"
})

const conunt = reactive([
  {
    title: "收入合计:",
    icon: "",
    value: 0,
    unit: "元",
    titleStyle: {
      color: "#333",
      fontWeigt: "400"
    }
  },
  {
    title: "已申报税额合计:",
    icon: "",
    value: 0,
    unit: "元",
    titleStyle: {
      color: "#333",
      fontWeigt: "400"
    }
  }
])

const constant = reactive({
  title: "工资薪金",
  titleStyle: {
    color: "#333",
    fontWeigt: "500",
    fontSize: "16px"
  },
  smTitle: "所得项目小类:   ",
  time: "2023-07",
  company: "扣缴义务人:   ",
  income: "收入:  ",
  declaredTaxAmount: "已申报税额:  ",
  unit: "元",
  titelOthStyle: {
    color: "#989fa5",
    fontSize: "14px"
  }
})

// 获取当前的时间

const changTiem = () => {
  let day = new Date()
  return {
    y: day.getFullYear(),
    m: day.getMonth()
  }
}

const allList = ref<allList[]>([])

//FIX:  reactive({List: []}) // 必须是对象
// 最终数据
const getAllList = async () => {
  try {
    const config = {
      params: {
        eId: userInfo.id
      }, // 提交参数 params  url拼接
      custom: { auth: true, toast: true }
    }
    allList.value = await http.get("/individualtaxes", config)
  } catch (error) {
    console.log("🍲[error]:", error)
  }
  // // 计算总和
  allList.value.forEach((item, index) => {
    conunt[0].value += item.revenue
    conunt[1].value += item.deduct
  })
}

export default () => {
  return { navOption, conunt, allList, constant, changTiem, getAllList }
}
