import type { Route } from "./+types/privacy";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "隱私權政策 — I'm Safe" },
    { name: "description", content: "I'm Safe App 隱私權政策" },
  ];
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回首頁
        </Link>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="I'm Safe" className="w-6 h-6" />
          <span className="font-semibold" style={{ color: "#6b5ce0" }}>I'm Safe</span>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">隱私權政策</h1>
        <p className="text-gray-400 text-sm mb-10">最後更新：2026 年 3 月</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              Yoolink 重視您的隱私。本政策說明 I'm Safe App（「本 App」）如何收集、使用及保護您的個人資料。使用本 App 即表示您同意本隱私權政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. 我們收集的資料
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold">資料類型</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">說明</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold">用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">使用者名稱</td>
                    <td className="p-3 border border-gray-200">使用者自行輸入</td>
                    <td className="p-3 border border-gray-200">顯示給好友識別身份</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">裝置推播 Token（FCM Token）</td>
                    <td className="p-3 border border-gray-200">系統自動產生</td>
                    <td className="p-3 border border-gray-200">發送推播通知</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">使用者 UID</td>
                    <td className="p-3 border border-gray-200">App 自動產生的隨機識別碼</td>
                    <td className="p-3 border border-gray-200">識別使用者</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. 我們不收集的資料
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>不收集姓名、電話號碼、Email 地址</li>
              <li>不收集地理位置資訊</li>
              <li>不收集任何金融或支付資訊</li>
              <li>不追蹤使用者行為或建立使用者畫像</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. 資料儲存
            </h2>
            <p>
              您的資料儲存於 Google Firebase（Firestore），伺服器位於台灣／亞洲地區。我們採用業界標準的安全措施保護您的資料。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. 資料分享
            </h2>
            <p>
              我們不出售、交易或以其他方式將您的個人資料提供給第三方。我們僅使用 Google Firebase 作為技術基礎設施。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. 第三方服務
            </h2>
            <p className="mb-3">本 App 使用以下第三方服務：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Google Firebase</strong>（Firestore、Cloud Functions、FCM）—{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  Google 隱私權政策
                </a>
              </li>
              <li>
                <strong>Apple Push Notification Service（APNS）</strong> —{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  Apple 隱私權政策
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. 您的權利
            </h2>
            <p>
              您可透過 App 內的「清除資料」功能刪除本機及雲端的個人資料。資料刪除後將標記為已刪除，不再用於任何用途。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. 兒童隱私
            </h2>
            <p>
              我們不針對 13
              歲以下兒童刻意收集個人資訊。若您發現未成年人在未經許可的情況下提供了個人資料，請聯絡我們，我們將立即處理。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. 政策更新
            </h2>
            <p>
              Yoolink
              保留更新本隱私權政策之權利。重大變更將於 App
              內通知使用者。繼續使用本 App 即表示您接受更新後的政策。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. 聯絡方式
            </h2>
            <p>
              如有任何隱私相關問題，請聯絡我們：
              <br />
              <a
                href="mailto:support@yoolink.com"
                className="text-emerald-600 hover:underline"
              >
                support@yoolink.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100 text-center text-gray-400 text-sm mt-8">
        <p className="mb-3">© 2026 Yoolink. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <Link to="/terms" className="hover:text-gray-600 transition-colors underline">
            服務條款
          </Link>
          <Link to="/privacy" className="hover:text-gray-600 transition-colors underline">
            隱私權政策
          </Link>
        </div>
      </footer>
    </div>
  );
}
