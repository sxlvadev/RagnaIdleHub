const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('node:path');
let win;
function openWindow() {
  win = new BrowserWindow({ width: 1500, height: 950, minWidth: 900, minHeight: 650,
    backgroundColor: '#090909', autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), webviewTag: true,
      nodeIntegration: false, contextIsolation: true }
  });
  win.webContents.on('will-attach-webview', (event, preferences, params) => {
    delete preferences.preload;
    preferences.nodeIntegration = false;
    preferences.contextIsolation = true;
    try { if (new URL(params.src).hostname !== 'www.ragnaidle.com.br') event.preventDefault(); }
    catch { event.preventDefault(); }
  });
  win.loadFile('index.html');
}
app.whenReady().then(() => {
  if (process.platform === 'win32') app.setAppUserModelId('RagnaIdle Hub');
  ipcMain.handle('test-notification', event => {
    if (!win || event.sender !== win.webContents) return false;
    if (!Notification.isSupported()) return false;
    new Notification({ title: 'RagnaIdle Hub', body: 'Notificação de teste. A leitura de nível máximo ainda não está implementada.' }).show();
    return true;
  });
  openWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) openWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
