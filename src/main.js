const path = require('path');
const { app, BrowserWindow, Tray, Menu } = require('electron');
const APP_NAME = 'Spotify - playing now';
  
let window;

function launchApp() {
  const tray = createTray();
  setTrayConfigs(tray);
  setTrayListeners(tray);

  window = createBrowserWindow(tray);
  window.loadFile('src/index.html');
  setWindowListeners(window);
}

function createTray() {
  return new Tray(path.join(__dirname, 'img/iconTemplate.png'));
}

function setTrayConfigs(tray) {
  tray.setHighlightMode('never');
  tray.setIgnoreDoubleClickEvents(true);
}

function setTrayListeners(tray) {
  tray.on('right-click', () => manageTrayRightClick(tray));
  tray.on('click', () => window.isVisible() ? window.hide() : window.show());
}

function createBrowserWindow(tray) {
  const bounds = tray.getBounds();
  const width = 250;
  const height = 300;

  let browserWindowOptions = {
    width,
    height,
    x: bounds.x - width/2,
    y: bounds.y,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    closable: false,
    alwaysOnTop: true,
    fullscreenable: false,
    title: APP_NAME,
    show: false,
    frame: false
  };
  
  return new BrowserWindow(browserWindowOptions);
}

function setWindowListeners(window) {
  window.on('closed', () => window = null);
  window.on('blur', () => window.hide());
}

function manageTrayRightClick(tray) {
  window.hide();

  const trayMenuTemplate = [
    {
      label: APP_NAME,
      enabled: false
    },
    {
      label: 'Quit',
      click: function() {
        window.setClosable(true);
        app.quit();
      }
    }
  ];
  const trayMenu = Menu.buildFromTemplate(trayMenuTemplate);

  tray.popUpContextMenu(trayMenu);
}

app.dock.hide()

app.on('ready', launchApp)
