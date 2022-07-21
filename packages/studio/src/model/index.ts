import { ID } from "../shared";

export interface IFile {
  id: ID;
  thumbUrl: string;
}

export interface IApp {
  id: ID;
  uuid: string;
  title: string;
  description?: string;
  image?: IFile;
  pages?: IPage[];
  menus?: IMenu[];
}

export enum Device {
  PC = "Pc",
  H5 = "H5",
  Admin = "Admin"
}

export interface IPage {
  id: ID;
  title: string;
  schema: JSON;
  deviceSlug?: string;
  app?: IApp;
}

export interface IMenu {
  id: ID;
  schema: JSON;
  deviceSlug?: string;
  app?: IApp;
}