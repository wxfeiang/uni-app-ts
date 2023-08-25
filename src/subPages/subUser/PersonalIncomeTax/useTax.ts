const navOption = ref({
  leftText: "返回",
  title: "iiiiiiii",
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
    time: "2023-01",
    company: "某XXXXXXXXXXXXX",
    income: "10000",
    declaredTaxAmount: "130"
  },
  {
    time: "2023-01",
    company: "某XXXXXXXXXXXXX",
    income: "10000",
    declaredTaxAmount: "130"
  }
])
const constant = reactive({
  title: "小类",
  time: "时间",
  company: "公司",
  income: "收入",
  declaredTaxAmount: "已申报"
})

export default () => {
  return { navOption, conunt, allList, constant }
}
