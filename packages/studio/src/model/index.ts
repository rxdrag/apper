import { ID } from "../shared";

export interface IApp {
  id: ID;
  uuid: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export interface IDevice {
  id: ID;
  slug: string;
  title: string;
  imageUrl?: string;
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