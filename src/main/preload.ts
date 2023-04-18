import { contextBridge, ipcRenderer } from "electron";

const api = {
  save: (text: string) => ipcRenderer.invoke("save", text),
};

export type Api = typeof api;

contextBridge.exposeInMainWorld("api", api);
