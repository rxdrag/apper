import { Card } from "./components";
import { MaterialModule } from "./model";

export function getMaterials(): MaterialModule {
  return {
    groups: [
      {
        title: "布局组件",
        materials: [
          {
            name: "Card",
            component: Card,
          },
        ]
      }
    ]
  }
}
