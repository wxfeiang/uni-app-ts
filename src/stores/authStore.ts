// stores/counter.js
//import { defineStore } from "pinia"
// option 写法
// export const useAuthStore = defineStore("authStore", {
//   // state: () => {
//   //   return {
//   //     token: ""
//   //   }
//   // },

//   // actions: {
//   //   SETTIKEN(value: string) {
//   //     this.token = value
//   //   }
//   // },
//   persist: {
//
//   }
// })

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const token = ref("")
    const userInfo = ref<any>()

    function SETTIKEN(data: any) {
      token.value = data.token
      userInfo.value = data
    }
    // function SETUSERINFO(value: string) {
    //   token.value = value
    // }

    return { SETTIKEN, token, userInfo }
  },
  {
    persist: {
      // 持久化存储写法
      enabled: true
    }
  }
)
