import { IApp } from "../model";
import { STORAGE_KEY_APPS } from "./consts";
import { IUseDataResponse } from "./IUseDataResponse";

export function useApps(): IUseDataResponse<IApp[]> {
  const appsStr = localStorage.getItem(STORAGE_KEY_APPS)
  if(appsStr){
    return {data:JSON.parse(appsStr)}
  }
  return {}
}