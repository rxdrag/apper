import { IDesignerComponents, DnFC, DnComponent } from "@designable/react"

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

export function convertMaterialsToComponents(tabs: MaterialTab[]): IDesignerComponents {
  const coms: IDesignerComponents = {}
  for (const tab of tabs) {
    for (const group of tab.groups) {
      for (const material of group.materials) {
        coms[material.name] = material.component
      }
    }
  }
  return coms
}