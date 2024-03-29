// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return localStorage.getItem('CberPay-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('CberPay-authority') : str
  // authorityString could be admin, "admin", ["admin"]
  let authority
  try {
    authority = JSON.parse(authorityString)
  } catch (e) {
    authority = authorityString
  }
  if (typeof authority === 'string') {
    return [authority]
  }
  // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  // if (!authority && APP_TYPE === 'site') {
  //   return ['admin']
  // }
  return authority
}
export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority
  return localStorage.setItem('CberPay-authority', JSON.stringify(proAuthority))
}
