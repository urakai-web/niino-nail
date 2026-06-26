import { useEffect, useRef } from "react";

export default function News() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="info" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: section header */}
          <div className="fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Salon Info
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800 mb-6">
              サロン情報
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              完全予約制のプライベートサロンです。お一人おひとりの時間を大切にしています。
            </p>
          </div>

          {/* Right: info table */}
          <div className="fade-in-up">
            <dl className="divide-y divide-gray-100">
              <div className="flex py-4">
                <dt className="text-sm text-gray-500 w-28 flex-shrink-0">サロン名</dt>
                <dd className="text-sm text-gray-800">private salon Niino</dd>
              </div>
              <div className="flex py-4">
                <dt className="text-sm text-gray-500 w-28 flex-shrink-0">ネイリスト</dt>
                <dd className="text-sm text-gray-800">MISAKI</dd>
              </div>
              <div className="flex py-4">
                <dt className="text-sm text-gray-500 w-28 flex-shrink-0">所在地</dt>
                <dd className="text-sm text-gray-800">
                  〒921-8064<br />石川県金沢市矢木3丁目242
                </dd>
              </div>
              <div className="flex py-4">
                <dt className="text-sm text-gray-500 w-28 flex-shrink-0">営業時間</dt>
                <dd className="text-sm text-gray-800">完全予約制（LINEにてご確認ください）</dd>
              </div>
              <div className="flex py-4">
                <dt className="text-sm text-gray-500 w-28 flex-shrink-0">ご予約</dt>
                <dd className="text-sm text-gray-800">LINE公式アカウントより受付</dd>
              </div>
              <div className="flex py-4">
                <dt className="text-sm text-gray-500 w-28 flex-shrink-0">SNS</dt>
                <dd className="text-sm text-gray-800">
                  <a
                    href="https://www.instagram.com/niino__nail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    @niino__nail（Instagram）
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
