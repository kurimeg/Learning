## Electronとは？
  Mac/Linux/Windowsで動作するDesktop Apricationを作るためのフレームワーク
  HTML5/JavaScriptといったWebの技術で開発できる

  - 公式サイト
    https://electron.atom.io/

## Process
  - Main Process：Node.js（1つのみ）
  - Renderer Process：BrowserWindow（複数）

### ipc
プロセス間通信を行うモジュール
- Renderer Process -> Main Process
  - 非同期
    - Renderer Process  
      ``` javascript
      ipcRenderer.send('asynchronous-message', 'ping');
      ```
    - Main Process  
      ``` javascript
      ipcMain.on('asynchronous-message', (event, arg) => {  
        event.sender.send('asynchronous-reply', 'pong');  
      });
      ```
  - 同期
    - Renderer Process  
      ``` javascript
      var retunValue = ipcRenderer.sendSync('synchronous-message', 'ping');
      ```
    - Main Process  
      ``` javascript
      ipcMain.on('synchronous-message', (event, arg) => {
        event.returnValue = 'pong';
      });
      ```

- Main Process -> Renderer Process
  - 非同期
    - Main Process  
      ``` javascript
      mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('ping', 'whoooooooh!')
      })
      ```
    - Renderer Process  
      ``` javascript
      ipcRenderer.on('ping', (event, message) => {
        console.log(message);
      });
      ```
### remote
Main ProcessのモジュールをRenderer Processから操作するモジュール  
  ``` javascript
  var BrowserWindow = remote.BrowserWindow
  var newWindow = new BrowserWindow({});
  ```

## その他
  - localStorage
  - Notification API
