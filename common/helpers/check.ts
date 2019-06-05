export const is_mobile = () => {
  return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|Windows Phone)/i)
}
