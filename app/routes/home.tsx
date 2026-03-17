import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "I'm Safe — 一鍵報平安 App" },
    {
      name: "description",
      content:
        "I'm Safe 讓你在任何時刻，瞬間通知所有好友你很安全。一鍵報平安，讓在乎你的人放心。",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="I'm Safe" className="w-7 h-7" />
          <span className="font-semibold text-lg" style={{ color: "#6b5ce0" }}>I'm Safe</span>
        </div>
        <a
          href="#"
          className="text-sm font-medium px-4 py-2 rounded border transition-colors"
          style={{ color: "#6b5ce0", borderColor: "#6b5ce0" }}
        >
          下載 App
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <img src="/icon.png" alt="I'm Safe" className="w-20 h-20 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          一鍵報平安，
          <br />
          <span style={{ color: "#6b5ce0" }}>讓在乎你的人放心</span>
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          I'm Safe 讓你在任何時刻，瞬間通知所有好友你很安全
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 text-white px-7 py-3 rounded text-base font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#6b5ce0" }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          前往 App Store
        </a>
        <p className="text-sm text-gray-400 mt-3">iOS 專屬</p>
      </section>

      {/* Features */}
      <section className="px-6 py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">App 功能</h2>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="text-2xl w-8 shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">一鍵報平安</h3>
                <p className="text-gray-500">按下按鈕，所有好友立即收到推播通知，讓他們知道你安全無虞。</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl w-8 shrink-0">👥</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">好友管理</h3>
                <p className="text-gray-500">透過 UID 新增好友，簡單快速，無需對方電話或 Email。</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl w-8 shrink-0">⚡</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">無需註冊</h3>
                <p className="text-gray-500">不需要帳號密碼，開啟 App 即可使用。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
