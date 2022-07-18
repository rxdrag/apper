import { IBehaviorCreator, IResourceCreator } from "@designable/core";

export type ApFC<P = {}> = React.FC<P> & {
  Resource?: IResourceCreator;
  Behavior?: IBehaviorCreator;
}

export interface ApMaterial {
  name: string;
  component: ApFC<any>;
}

export interface ApMaterialGroup {
  title: string;
  materials: ApMaterial[];
}
