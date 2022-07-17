import {message} from "antd"

/**
import { message } from 'antd';
 * 动态加载js文件
 * @param {*} src
 * @param {*} callback
 *   loadScript("",function(){
 *   console.log("加载成功")
 * })
 * var that = this; 在方法里面使用that
 */
 function loadJS(
  src: string,
  callback: (this: HTMLScriptElement, ev: Event) => void,
  isCache = false
): void {
  const script = document.createElement("script");
  script.type = "text/JavaScript";
  if (isCache) {
    script.src = src + "?t=" + new Date().getTime();
  } else {
    script.src = src;
  }
  if (script.addEventListener) {
    script.addEventListener("load", callback);
    script.addEventListener("error",(e)=>{
      message.error(e)
    });
  }

  document.head.appendChild(script);
}
