import { IBehaviorCreator, IResourceCreator } from "@designable/core";

export type ApFC<P = {}> = React.FC<P> & {
  Resource?: IResourceCreator;
  Behavior?: IBehaviorCreator;
}