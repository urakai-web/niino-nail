import { useEffect, useRef } from "react";

const handMenu = [
  { name: "one color", price: "¥6,000" },
  { name: "90min design", price: "¥7,000" },
  { name: "120min design", price: "¥8,000" },
  { name: "150min design", price: "¥9,000" },
];

const footMenu = [
  { name: "one color", price: "¥7,000" },
  { name: "90min design", price: "¥8,000" },
  { name: "120min design", price: "¥9,000" },
  { name: "巻き爪care gel（1本）", price: "¥1,000" },
];

const optionMenu = [
  { name: "パーツ付け放題 中盛り / メガ盛り", price: "¥1,000 / ¥2,000" },
  { name: "長さ出し / 亀裂補強（1本）", price: "¥500" },
];

const offMenu = [
  { name: "当店ジェル付替オフ", price: "¥1,000" },
  { name: "他店ジェル付替オフ", price: "¥2,000" },
  { name: "オフのみ", price: "¥3,000〜" },
];

function MenuTable({ title, subtitle, items }: { title: string; subtitle: string; items: { name: string; price: string }[] }) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-xs tracking-widest text-accent uppercase mb-1">{subtitle}</p>
        <h3 className="text-xl font-serif font-light text-gray-800">{title}</h3>
      </div>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.name} className="flex justify-between items-center py-3">
            <span className="text-sm text-gray-700">{item.name}</span>
            <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Nail Menu
          </p>
          <h2 className="section-title">メニュー・料金</h2>
          <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            すべてケア込みの料金です。ワンカラーは単色カラーのみとなります。
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid md:grid-cols-2 gap-12 fade-in-up">
          <MenuTable title="ハンド" subtitle="Hand" items={handMenu} />
          <MenuTable title="フット" subtitle="Foot" items={footMenu} />
          <MenuTable title="オプション" subtitle="Option" items={optionMenu} />
          <MenuTable title="オフ" subtitle="Off" items={offMenu} />
        </div>

        <p className="text-xs text-gray-400 text-center mt-10 fade-in-up">
          ※ フットメニューは通常料金より+¥1,000となります。
        </p>
      </div>
    </section>
  );
}
