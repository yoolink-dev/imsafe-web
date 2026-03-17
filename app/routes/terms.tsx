import type { Route } from "./+types/terms";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "服務條款 — I'm Safe" },
    { name: "description", content: "I'm Safe App 服務條款" },
  ];
}

export default function Terms() {
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
        <h1 className="text-3xl font-bold mb-2">服務條款</h1>
        <p className="text-gray-400 text-sm mb-10">最後更新：2026 年 3 月</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. 服務說明
            </h2>
            <p>
              I'm Safe（「本 App」）是由 Yoolink
              開發的一款報平安服務，提供使用者一鍵透過推播通知告知好友自己安全無虞的功能。使用本
              App 即表示您同意本服務條款。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. 使用資格
            </h2>
            <p>
              本 App 適合 4
              歲以上使用者使用（符合 App Store 年齡分級）。13
              歲以下使用者須在家長或監護人同意下使用。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. 使用者責任
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>使用者不得濫用推播功能騷擾他人或傳送虛假訊息。</li>
              <li>使用者對其帳號及使用行為自行負責。</li>
              <li>禁止將本 App 用於任何違法或不當用途。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. 服務限制
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                推播通知依賴 Apple Push Notification Service（APNS），Yoolink
                不保證通知 100% 送達。
              </li>
              <li>
                網路狀況、裝置設定或 Apple
                服務異常等因素可能影響推播送達率。
              </li>
              <li>Yoolink 不保證本服務永久可用，得隨時暫停或終止服務。</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. 智慧財產權
            </h2>
            <p>
              本 App 及其所有內容（包括但不限於設計、圖示、文字、程式碼）之智慧財產權均屬
              Yoolink 所有，未經書面授權不得複製、修改或散布。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. 免責聲明
            </h2>
            <p>
              Yoolink 不對因本 App
              使用或無法使用所造成的任何直接、間接、附隨或衍生性損失負責，包括但不限於資料遺失、商業損失或人身傷害。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. 條款變更
            </h2>
            <p>
              Yoolink
              保留隨時修改本服務條款之權利。重大變更將透過 App
              通知使用者。繼續使用本 App 即表示您接受修改後的條款。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. 聯絡方式
            </h2>
            <p>
              如有任何問題，請聯絡我們：
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
