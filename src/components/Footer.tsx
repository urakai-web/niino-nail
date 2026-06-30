const footerNav = [
  {
    heading: "メニュー",
    links: [
      { label: "ハンドネイル", href: "#menu" },
      { label: "フットネイル", href: "#menu" },
      { label: "オプション", href: "#menu" },
      { label: "オフ", href: "#menu" },
    ],
  },
  {
    heading: "サロン",
    links: [
      { label: "コンセプト", href: "#about" },
      { label: "ギャラリー", href: "#gallery" },
      { label: "サロン情報", href: "#info" },
      { label: "ご予約", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-warm-100 text-gray-500">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Salon info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="text-gray-800 font-serif font-light text-xl tracking-widest">
                Niino
              </p>
              <p className="text-gray-400 text-[10px] tracking-widest mt-1">
                PRIVATE NAIL SALON
              </p>
            </div>
            <address className="not-italic text-sm leading-8 space-y-1">
              <p>〒921-8064</p>
              <p>石川県金沢市矢木3丁目242</p>
            </address>
            <div className="mt-4 text-xs space-y-1">
              <p>完全予約制（LINEにてご予約）</p>
              <p>ネイリスト：MISAKI</p>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h3 className="text-gray-800 text-xs tracking-widest uppercase mb-6 pb-3 border-b border-warm-300">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} private salon Niino All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
