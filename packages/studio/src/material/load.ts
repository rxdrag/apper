
export function loadNormailModule(url: string): Promise<HTMLScriptElement[]> {
  const path = trimUrl(url);
  const indexJs = path + "index.js";
  const scripts: HTMLScriptElement[] = [];
  const p = new Promise<HTMLScriptElement[]>((resolve, reject) => {
    loadJS(indexJs, true)
      .then((script) => {
        scripts.push(script);
        resolve(scripts);
      })
      .catch(err => {
        reject(err);
      })
  })

  return p;
}

export function loadDebugModule(url: string): Promise<HTMLScriptElement[]> {
  const path = trimUrl(url);
  const indexJs = path + "index.js";
  const venderJs = path + "vendors~index.js";
  const scripts: HTMLScriptElement[] = [];
  const p = new Promise<HTMLScriptElement[]>((resolve, reject) => {
    loadJS(venderJs, true)
      .then((script) => {
        scripts.push(script);
        loadJS(indexJs, true).then((script) => {
          scripts.push(script);
          resolve(scripts);
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
  return url.endsWith("/") ? url : (url + "/");
}
