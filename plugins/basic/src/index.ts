import { getMaterials } from "./formily";
import { MaterialGroup } from "./model"

export * from "./formily"

declare const window: Window & { materials: MaterialGroup[] };

(function () {
  // if(window.materials){
  //   console.error("Has material not finished! load error", window.materials)
  // }else{
  window.materials = getMaterials().groups
  console.log("plug in 中", getMaterials().groups)
  // }
})()
