"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const electron_1 = require("electron");
// import { app, BrowserWindow } from "electron";
// 이벤트 생명주기 app
const createWindow = () => {
    // 네이티브 GUI와 상호 작용 할 수 있게 지원하는 인스턴스 생성 BrowserWindow
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
    });
    const filePath = path.join(__dirname, '../build/index.html');
    // 표시 할 파일
    win.loadFile(filePath);
};
// 초기화 완료하고 생성 준비 되면 createWindow 함수 호출
electron_1.app.whenReady().then(() => {
    //
    createWindow();
    electron_1.app.on("window-all-closed", () => {
        if (process.platform !== "darwin")
            electron_1.app.quit();
    });
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
