const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const httpInterceptor = {
  invoke(options: any) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    options.header = {
      'aoure-xlien': 'miniapp',
    }
    //添加请求头标识
    const MemberStore = useMemberStore()
  },
}
uni.addInterceptor('requset', httpInterceptor)
