export function autoLogin(token) {
  return {
    type: 'AUTO_LOGIN',
    payload: token
  }
}
