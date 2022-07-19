import { groups } from "./config";
import { ComponentGroup } from "./types";

export * from "./config"

declare const window: Window & { materials: ComponentGroup[] };

(function () {
  // if(window.materials){
  //   console.error("Has material not finished! load error", window.materials)
  // }else{
  window.materials = groups
  console.log("plug in 中", groups)
  // }
})()
