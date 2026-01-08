# 專案腳手架 (Vue CLI Preset)

本 Preset 用於快速初始化公司內部的 Vue 3 專案。

## 1. 前置條件

在執行指令前，請確保您的環境已安裝：

- **Node.js**: v14.15.0
- **Vue CLI**: 5.0.8

## 2. 建立專案步驟

### 第一步：連接網路

請確保已連線至 **公司內部網路 (VPN)**，否則將無法從私有 Registry 下載插件。

### 第二步：執行建立指令

請在 `vue-cli-module-preset` 同個資料夾的開啟終端機，並執行：

# 請將 {your-project-name} 替換為你的專案名稱

vue create --preset ./vue-cli-module-preset {your-project-name} --registry http://10.40.192.217:4873

## 3. 注意事項

- **路徑問題**：指令中的 `./vue-cli-module-preset` 是相對路徑。執行指令時，終端機的路徑必須在該資料夾的旁邊。
- **Windows 使用者**：建議使用 **PowerShell** 或 **Git Bash**。若使用 CMD 遇到路徑錯誤，請嘗試將 `./` 改為 `.\`。
