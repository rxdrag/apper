import { IDesignerComponents, DnFC, DnComponent } from "@designable/react"
import { ApFC } from "./types";

export interface Material {
  name: string;
  component: ApFC<any> | DnComponent<any>;
}

export interface MaterialGroup {
  title: string;
  materials: Material[];
}

export interface MaterialModule {
  groups: MaterialGroup[]
}
