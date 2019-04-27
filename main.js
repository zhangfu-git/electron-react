// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
// 根据NODE_ENV来判断是否为开发模式
const isDev = process.env.NODE_ENV === 'dev';
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: false,
      webSecurity: false,
      preload: path.join(__dirname, 'renderer.js')   // 自动注入render.js Electron的API使用文件
    }
  })

  // and load the index.html of the app.
  if (isDev) {
    // 开发模式访问开发地址
    mainWindow.loadURL('http://localhost:8080')
  } else {
    // 生产模式访问打包后的文件
    mainWindow.loadFile('./uiDist/index.html')
  }

  // Open the DevTools.
  // 开发模式才开启调试工具
  isDev && mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
