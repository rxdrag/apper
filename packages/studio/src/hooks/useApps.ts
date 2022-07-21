import { IApp } from "../model";
import { STORAGE_KEY_APPS } from "./consts";
import { IResponse } from "./IResponse";
import { useRequest } from "./useRequest";

export function useApps(): IResponse<IApp[]> {
  return useRequest<IApp[]>(STORAGE_KEY_APPS)
}