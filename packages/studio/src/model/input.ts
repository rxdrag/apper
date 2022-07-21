import { ID } from "../shared";

export interface IFileInput {
  id?: ID;
  thumbUrl?: string;
}

export interface IAppInput {
  id?: ID;
  uuid?: string;
  title: string;
  description?: string;
  image?: IFileInput
}