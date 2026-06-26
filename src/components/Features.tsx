import { useEffect, useRef } from "react";

const cards = [
  {
    title: "ハンド",
    subtitle: "HAND",
    items: [
      { name: "one color", price: "¥6,000" },
      { name: "90min design", price: "¥7,000" },
      { name: "120min design", price: "¥8,000" },
      { name: "150min design", price: "¥9,000" },
    ],
  },
  {
    title: "フット",
    subtitle: "FOOT",
    items: [
      { name: "one color", price: "¥7,000" },
      { name: "90min design", price: "¥8,000" },
      { name: "120min design", price: "¥9,000" },
      { name: "巻き爪care gel（1本）", price: "¥1,000" },
    ],
  },
  {
    title: "オプション・オフ",
    subtitle: "OPTION / OFF",
    items: [
      { name: "パーツ付け放題 中盛り", price: "¥1,000" },
      { name: "パーツ付け放題 メガ盛り", price: "¥2,000" },
      { name: "長さ出し / 亀裂補強（1本）", price: "¥500" },
      { name: "当店ジェル付替オフ", price: "¥1,000" },
      { name: "他店ジェル付替オフ", price: "¥2,000" },
      { name: "オフのみ", price: "¥3,000〜" },
    ],
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 px-6 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Nail Menu
          </p>
          <h2 className="section-title">メニュー・料金</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            すべてケア込みの料金です。ワンカラーは単色カラーのみとなります。
          </p>
        </div>

        {/* Swipable cards */}
        <div className="fade-in-up overflow-x-auto scrollbar-hide px-6 pb-4">
          <div className="flex gap-5" style={{ width: "max-content" }}>
            {cards.map((card) => (
              <div
                key={card.subtitle}
                className="w-72 flex-shrink-0 bg-warm-50 rounded-xl p-6"
              >
                <p className="text-xs tracking-widest text-primary uppercase mb-1">
                  {card.subtitle}
                </p>
                <h3 className="text-lg font-serif font-light text-gray-800 mb-4">
                  {card.title}
                </h3>
                <ul className="divide-y divide-gray-200">
                  {card.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center py-3"
                    >
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6 px-6 fade-in-up">
          ※ フットメニューは通常料金より+¥1,000となります。
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
