interface allList {
  time: string
  smTitle: string
  company: string
  income: number
  declaredTaxAmount: number
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

const allList = reactive<allList[]>([])

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
const toTwo = (date: any) => {
  return date < 10 ? "-0" + date : date
}

// 最终数据
const getAllList = () => {
  for (let i = changTiem().m; i > 0; i--) {
    allList.push({
      time: changTiem().y + toTwo(i),
      smTitle: "正常工资薪金",
      company: "西安易才人力资源有限公司",
      income: 10000 + uni.$u.random(10, 90) * 0.51,
      declaredTaxAmount: 100 + uni.$u.random(10, 50) * 0.23
    })
  }
  // 计算总和
  allList.forEach((item, index) => {
    conunt[0].value += item.income
    conunt[1].value += item.declaredTaxAmount
  })
}

export default () => {
  return { navOption, conunt, allList, constant, changTiem, getAllList }
}
