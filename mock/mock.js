function createUserList() {
  return [{}]
}

export default {
  url: '/api/user/login',
  method: 'post',
  response: ({ body }) => {
    const { username, password } = body
    const checkUser = createUserList().find(
      (item) => item.username === username && item.password === password,
    )
    if (!checkUser) {
      return { code: 201, data: { messahe: '账号或者密码不正确' } }
    }
    const { token } = checkUser
    return { code: 200, data: { token } }
  },
}
