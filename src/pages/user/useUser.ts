const indexList = ref(<any>[
  {
    title: "vip",
    url: "/subPages/subUser/vip/index",
    img: "https://cdn.uviewui.com/uview/album/10.jpg"
  },
  {
    title: "关于我",
    url: "/subPages/subUser/about/index",
    img: "https://cdn.uviewui.com/uview/album/9.jpg"
  },
  {
    title: "个税显示",
    url: "/subPages/subUser/PersonalIncomeTax/index",
    img: "https://cdn.uviewui.com/uview/album/7.jpg"
  }
])

const goDetil = (url: string) => {
  console.log("🧀[url]:", url)
  uni.redirectTo({
    url
  })
}

export default () => {
  return { indexList, goDetil }
}
