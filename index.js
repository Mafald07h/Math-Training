const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // Garante o ícone caso rode via X11/XWayland
        icon: path.join(__dirname, 'assets', 'img', 'calculator.png'),
        resizable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile(path.join(__dirname, 'pages', 'index.html'))
}

app.whenReady().then(() => {
    // SEM a extensão .desktop aqui:
    if (process.platform === 'linux') {
        app.setDesktopName('math-training')
    }
    app.setAppUserModelId('com.mathtraining.app')

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})