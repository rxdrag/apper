import { IBehaviorCreator, IDesignerLocales, IDesignerProps, IResourceCreator, TreeNode } from "@designable/core";

export type ApFC<P = {}> = React.FC<P> & {
  Resource?: IResourceCreator;
  Behavior?: IBehaviorCreator;
}


export interface IApperComponent {
  name: string;
  isPredefined?: boolean;
  xComponent?: React.FC<any>;
  xDesigner?: React.FC<any>;
  resource?: IResourceCreator | IResourceCreator[];
  behavior?: IBehaviorCreator | IBehaviorCreator[];
}

export interface ComponentCategory {
  name: string;
  components: IApperComponent[];
}