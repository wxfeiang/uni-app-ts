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
    unit: "元"
  },
  {
    title: "已申报税额合计",
    icon: "",
    value: "100000",
    unit: "元"
  }
])

const allList = reactive(<any>[
  {
    title: "正常",
    time: "2023-01",
    company: "某",
    income: "10000",
    declaredTaxAmount: "130",
    unit: "元"
  }
])

export default () => {
  return { navOption, conunt, allList }
}
