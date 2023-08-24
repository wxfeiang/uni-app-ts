const navOption = ref({
  leftText: "返回",
  title: "收入纳税明细查询",
  rightText: "批量申诉",
  textColor: "#4985E7"
})

const conunt = reactive([
  {
    title: "收入合计",
    icon: "",
    value: "100000",
    unit: "元"
  },
  {
    title: "已申报税额合集",
    icon: "",
    value: "100000",
    unit: "元"
  }
])

export default () => {
  return { navOption, conunt }
}
