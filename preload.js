const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('hub', {
  testNotification: () => ipcRenderer.invoke('test-notification')
});
