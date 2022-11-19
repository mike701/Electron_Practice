const { app, BrowserWindow } = require('electron');
const {exec} = require('child_process');

const path= require('path');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  });
  exec(' cd ./client && npm start && cd ..')
  // win.loadFile('./public/index.html');
  win.loadURL("http://localhost:3000");
  
  // win.webContents.openDevTools({ mode: 'detach' });

}

app.whenReady().then(() => {
  createWindow()

})

app.on('window-all-closed', () => {
  if (process.platform === 'Darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    
  }
})