import { MaterialGroup } from "./model";
import { ApFC, ApMaterialGroup } from "./types";
import { DnFC } from "@designable/react";
import { createBehavior, createResource } from '@designable/core'
import { Card, Rate, createVoidFieldSchema } from '@designable/formily-antd'
import React from "react";
import { Card as AntdCard } from 'antd'

declare const window: Window & { materials: ApMaterialGroup[] };

export interface LoadedData {
  scripts: HTMLScriptElement[];
  groups?: ApMaterialGroup[];
}

export function transMaterialGroups(groups: ApMaterialGroup[]): MaterialGroup[] {
  return groups.map(
    group =>
    ({
      ...group,
      materials: group.materials.map(
        material => ({ ...material, component: transComponment(material.component) })
      )
    })
  )
}

function transComponment(material: ApFC<any>): DnFC<any> {
  console.log("(material.Behavior.designerProps", createVoidFieldSchema((material.Behavior.designerProps as any).propsSchema))
  console.log((material.Behavior.designerProps as any).propsSchema)
  const Behavior = createBehavior({
    ...material.Behavior,
    designerProps: {
      ...material.Behavior.designerProps,
      propsSchema: createVoidFieldSchema((material.Behavior.designerProps as any).propsSchema),
    },
    selector: (node) => node.props['x-component'] === 'Card',
  })
  const Resource = createResource(material.Resource)

  const dnfc: DnFC<any> = (props) => {
    const Componet = material
    return (
      <Componet
        {...props}
      />
    )
  }

  dnfc.Behavior = Behavior
  dnfc.Resource = Resource
  return dnfc
}

export function loadNormailModule(url: string): Promise<LoadedData> {
  const path = trimUrl(url);
  const indexJs = path + "index.js";
  const loadedData: LoadedData = {
    scripts: []
  }
  const p = new Promise<LoadedData>((resolve, reject) => {
    loadJS(indexJs, true)
      .then((script) => {
        loadedData.scripts.push(script);
        loadedData.groups = window.materials
        window.materials = undefined
        resolve(loadedData);
      })
      .catch(err => {
        reject(err);
      })
  })

  return p;
}

export function loadDebugModule(url: string): Promise<LoadedData> {
  const path = trimUrl(url);
  const indexJs = path + "index.js";
  const venderJs = path + "vendors~index.js";
  const loadedData: LoadedData = {
    scripts: []
  }

  console.log("加载前", window.materials);

  const p = new Promise<LoadedData>((resolve, reject) => {
    loadJS(venderJs, true)
      .then((script) => {
        loadedData.scripts.push(script);
        loadJS(indexJs, true)
          .then((script) => {
            loadedData.scripts.push(script);
            loadedData.groups = window.materials
            window.materials = undefined
            resolve(loadedData);
          })
          .catch(err => {
            reject(err);
          })
      })
      .catch(err => {
        reject(err);
      })
  })

  return p;
}

function loadJS(src: string, clearCache = false): Promise<HTMLScriptElement> {
  const p = new Promise<HTMLScriptElement>((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/JavaScript";
    if (clearCache) {
      script.src = src + "?t=" + new Date().getTime();
    } else {
      script.src = src;
    }
    if (script.addEventListener) {
      script.addEventListener("load", () => {
        resolve(script)
      });
      script.addEventListener("error", (e) => {
        reject(e)
      });
    }
    document.head.appendChild(script);
  })

  return p;
}

function trimUrl(url: string) {
  url = url.trim()
  return url.endsWith("/") ? url : (url + "/");
}
