const electron = require("electron");
// import { app, BrowserWindow } from "electron";

const { app, BrowserWindow } = electron;
// 이벤트 생명주기 app 
const createWindow = () => {
  // 네이티브 GUI와 상호 작용 할 수 있게 지원하는 인스턴스 생성 BrowserWindow
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // 표시 할 파일 
  win.loadFile("index.html");
};

// 초기화 완료하고 생성 준비 되면 createWindow 함수 호출
app.whenReady().then(() => {
  //
  createWindow();
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
  app.on("activate", () => {
    if (win === null) {
      createWindow();
    }
  });
});
