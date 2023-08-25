const navOption = ref({
  leftText: "返回",
  title: "收入纳税明细查询",
  rightText: "批量申诉",
  textColor: "#4985E7"
})

const conunt = reactive(<any>[
  {
    title: "收入合计",
    icon: "",
    value: "100000",
    unit: "元",
    titleStyle: {
      color: "#333",
      fontWeigt: "400"
    }
  },
  {
    title: "已申报税额合计",
    icon: "",
    value: "100000",
    unit: "元",
    titleStyle: {
      color: "#333",
      fontWeigt: "400"
    }
  }
])

const allList = reactive(<any>[
  {
    time: "2023-01",
    smTitle: "正常工资薪金",
    company: "西安易才人力资源有限公司",
    income: "10000",
    declaredTaxAmount: "130"
  },
  {
    time: "2023-01",
    smTitle: "正常工资薪金",
    company: "西安易才人力资源有限公司",
    income: "10000",
    declaredTaxAmount: "130"
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

export default () => {
  return { navOption, conunt, allList, constant }
}
