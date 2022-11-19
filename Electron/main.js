const { app, BrowserWindow } = require('electron')
const path= require('path');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js')
      nodeIntegration: true,
    }
  })

  // win.loadFile('./client/public/index.html')
  win.loadURL("http://localhost:3000");
  
  win.webContents.openDevTools({ mode: 'detach' });

}

app.whenReady().then(() => {
  createWindow()

  app.whenReady().then(() => {
    createWindow()
  })
})