export function mockQueryRequest<T>(key: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const str = localStorage.getItem(key)
    setInterval(() => {
      if (str) {
        resolve(JSON.parse(str))
      } else {
        resolve(undefined)
      }
    }, 500)
  })
}