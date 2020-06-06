import { app, BrowserWindow } from 'electron';

require('update-electron-app')({
  repo: 'Nurify/Pure-app',
  updateInterval: '5 minutes'
})

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1708,
    height: 945,
    minWidth: 1708,
    minHeight: 945,
    icon: `app.ico`,
    frame: true
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.loadURL('https://vk.com');
  // mainWindow.removeMenu()
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
