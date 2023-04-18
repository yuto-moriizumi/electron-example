// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

const obj = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  save: (text: string) => ipcRenderer.invoke("save", text),
  // 関数だけでなく、変数も公開できます
};

export type ObjType = typeof obj;

contextBridge.exposeInMainWorld("versions", obj);
