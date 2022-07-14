import { Input } from "@designable/formily-antd";
import {IDesignerComponents, DnFC,  DnComponent} from "@designable/react"
import {IResourceLike} from "@designable/core"

export interface Material {
  name:string
  component: DnFC<any> | DnComponent<any>
}

export interface MaterialGroup {
  name: string;
}

export interface MaterialTab {
  name: string;
  groups: MaterialGroup[]
}

const m1:Material = {
  name:"Text",
  component: Input
}

const test :IDesignerComponents = {
  [m1.name]:m1.component
}

const resources :IResourceLike[] = [
  m1.component
]