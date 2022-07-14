import { Input } from "@designable/formily-antd";
import { IDesignerComponents, DnFC, DnComponent } from "@designable/react"
import { IResourceLike } from "@designable/core"

export interface Material {
  name: string;
  component: DnFC<any> | DnComponent<any>;
}

export interface MaterialGroup {
  title: string;
  materials: Material[];
}

export interface MaterialTab {
  title: string;
  groups: MaterialGroup[]
}
