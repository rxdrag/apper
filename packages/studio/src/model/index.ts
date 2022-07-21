import { ID } from "../shared";

export interface IFile{
  thumbnail: string;
}

export interface IApp {
  id: ID;
  uuid: string;
  title: string;
  description?: string;
  image?: IFile;
}

export interface IDevice {
  id: ID;
  slug: string;
  title: string;
  image?: IFile;
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