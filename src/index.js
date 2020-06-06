import { app, BrowserWindow } from 'electron';
require('electron-titlebar')

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 950,
    minWidth: 1500,
    minHeight: 950,
    icon: `app.ico`,
    frame: false
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.removeMenu()
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
