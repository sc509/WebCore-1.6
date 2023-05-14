export const setListener = (element, type, handler) => {
  if (!element) {
    return
  }
  element.addEventListener(type, handler)
  return () => {
    element.removeEventListener(type, handler)
  }
}