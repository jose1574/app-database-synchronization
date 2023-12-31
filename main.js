const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },

    });

    win.loadFile('index.html')
    win.webContents.openDevTools()

}

app.whenReady().then(() => {
    createWindow()
})
// app.on('ready', () => {
//     createWindow()
// })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


