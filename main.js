/* This code is creating an Electron application window with a width of 800 pixels and a height of 600
pixels. It is also loading an HTML file called "index.html" into the window. The `app.whenReady()`
method is used to ensure that the window is created when the Electron application is ready to start. */
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
})

