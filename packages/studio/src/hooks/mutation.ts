import { createId } from './../AppDesigner/shared';

export function mockCreateRequest<T1, T2>(key: string, obj: T1): Promise<T2> {
  return new Promise((resolve, reject) => {
    const str = localStorage.getItem(key)
    setInterval(() => {
      if (!(obj as any).id){
        (obj as any).id = createId();        
      }

      if (str) {
        const newData = [...JSON.parse(str), obj];
        localStorage.setItem(key, JSON.stringify(newData))
      } else {
        const newData = [obj];
        localStorage.setItem(key, JSON.stringify(newData))
      }
      resolve(obj as any)
    }, 500)
  })
}