import { ID } from "../model";
import { STORAGE_KEY_PAGES } from "./consts";
import { IResponse } from "./IResponse";
import { IPage } from './../model/index';

export function useAppPages(pageId: ID, deviceSlug: string): IResponse<IPage[]> {
  const pagesStr = localStorage.getItem(STORAGE_KEY_PAGES)
  if (pagesStr) {
    const allPages: IPage[] = JSON.parse(pagesStr)
    return { data: allPages.filter(page => page.app?.id === pageId && page.deviceSlug === deviceSlug) }
  }
}