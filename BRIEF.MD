# I'm Safe Landing Page 建置需求

## 專案背景

**App 名稱**: I'm Safe（報平安）
**Bundle ID**: com.yoolink.imsafe
**開發商**: Yoolink
**用途**: 一鍵報平安 App，讓使用者在緊急或特殊情況下快速通知好友自己安全無虞
**平台**: iOS

---

## 需要建立的頁面

1. **首頁 (Landing Page)** — 介紹 App 功能、下載連結
2. **服務條款 (Terms of Service)**
3. **隱私權政策 (Privacy Policy)**

---

## 首頁內容

### Hero 區塊
- 標題：「一鍵報平安，讓在乎你的人放心」
- 副標題：「I'm Safe 讓你在任何時刻，瞬間通知所有好友你很安全」
- App Store 下載按鈕（連結暫時用 # 佔位）

### 功能介紹
1. **一鍵報平安** — 按下按鈕，所有好友立即收到推播通知
2. **好友管理** — 透過 UID 新增好友，簡單快速
3. **無需註冊** — 不需要帳號密碼，開啟即用

### 頁尾
- © 2026 Yoolink. All rights reserved.
- 服務條款 連結
- 隱私權政策 連結

---

## 服務條款內容重點

需涵蓋以下項目（App Store 要求）：

1. **服務說明** — App 提供一鍵推播通知好友的服務
2. **使用資格** — 需年滿 4 歲（符合 App Store 分級）
3. **使用者責任**
    - 不得濫用推播功能騷擾他人
    - 使用者對其帳號行為自行負責
4. **服務限制**
    - 推播通知依賴 Apple Push Notification Service，不保證 100% 送達
    - 不保證服務永久可用
5. **智慧財產權** — App 及內容版權屬於 Yoolink
6. **免責聲明** — 不對因 App 使用或無法使用造成的損失負責
7. **條款變更** — 保留修改條款之權利，重大變更將通知使用者
8. **聯絡方式** — 提供聯絡 email

---

## 隱私權政策內容重點

App Store **強制要求**，需涵蓋以下項目：

### 收集的資料
| 資料類型 | 說明 | 用途 |
|---------|------|------|
| 使用者名稱 | 使用者自行輸入 | 顯示給好友識別身份 |
| 裝置推播 Token (FCM Token) | 系統自動產生 | 發送推播通知 |
| 使用者 UID | App 自動產生的隨機識別碼 | 識別使用者 |

### 不收集的資料
- 不收集姓名、電話、Email、地理位置
- 不收集任何金融資訊
- 不追蹤使用者行為

### 資料儲存
- 資料儲存於 Google Firebase（Firestore）
- 伺服器位於台灣/亞洲地區

### 資料分享
- 不出售使用者資料給第三方
- 僅使用 Google Firebase 作為基礎設施

### 第三方服務
- **Google Firebase** (Firestore, Cloud Functions, FCM) — [Google 隱私權政策](https://policies.google.com/privacy)
- **Apple Push Notification Service** — [Apple 隱私權政策](https://www.apple.com/legal/privacy/)

### 使用者權利
- 可透過「清除資料」功能刪除本機及雲端資料
- 刪除後資料將標記為已刪除，不再用於任何用途

### 兒童隱私
- 不針對 13 歲以下兒童收集個人資訊

### 聯絡方式
- 提供聯絡 email 供使用者查詢隱私相關事宜

### 政策更新
- 保留更新隱私權政策之權利
- 重大變更將於 App 內通知

---

## 技術建議

- 用 **Next.js** 或純 HTML/CSS 建立靜態網站
- 部署到 **Vercel** 或 **GitHub Pages**（免費）
- 需要一個正式 domain 或 subdomain，例如 `imsafe.yoolink.com`
- 頁面需為繁體中文（可附英文版）

---

## App Store 提交時需填寫的 URL

- **行銷網址（Marketing URL）**: 首頁 URL
- **隱私權政策網址（Privacy Policy URL）**: 隱私權政策頁面 URL ← **必填**
- **支援網址（Support URL）**: 可用首頁或聯絡頁面 URL

---

## 聯絡資訊（請填入）

- 公司名稱：Yoolink
- 聯絡 Email：（請填入）
- 網站：（請填入）
