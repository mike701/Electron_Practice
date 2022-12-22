// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';
// import { execSync } from 'child_process';

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});


contextBridge.exposeInMainWorld('commands', {
  // hello: () => execSync('console.log("Hello World!")', { encoding: 'utf-8' }),
  ping: () => ipcRenderer.invoke('ping')
});