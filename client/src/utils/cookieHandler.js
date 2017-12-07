exports.getCookie = function (originCookie) {
  let tempCookie = originCookie.split(';')
  let returnCookie = {}
  for (let i = 0; i < tempCookie.length; i++) {
    let key = tempCookie[i].split('=')[0].trim()
    let value = tempCookie[i].split('=')[1].trim()
    returnCookie[key] = value
  }
  return returnCookie
}
