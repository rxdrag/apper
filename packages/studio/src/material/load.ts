import { MaterialGroup } from "./model";

declare const window: Window & { materials: MaterialGroup[] };

export interface LoadedData {
  scripts: HTMLScriptElement[];
  groups?: MaterialGroup[];
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
