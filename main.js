/* This code is creating an Electron application window with a width of 800 pixels and a height of 600
pixels. It is also loading an HTML file called "index.html" into the window. The `app.whenReady()`
method is used to ensure that the window is created when the Electron application is ready to start. */
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    });
    ipcMain.handle('ping', () => 'pong');
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
    //open a window if none are open (MacOS only, Windows and Linux will always have at least one window open by default)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

//quit the app when all windows are closed (Windows and Linux)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});


