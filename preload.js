const { ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld('api', {
    hi: ()=>{console.log('saludo');}
})

contextBridge.exposeInMainWorld('api2', {
    hi: ()=>{console.log('saludo 2');}
})
