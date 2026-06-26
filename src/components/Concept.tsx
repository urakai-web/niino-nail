import { useEffect, useRef } from "react";

export default function Concept() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/concept.jpg"
                  alt="ネイルサロン Niino"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="fade-in-up">
            <p className="text-xs tracking-widest text-primary uppercase mb-3">
              Our Concept
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light leading-relaxed mb-8 text-gray-800">
              あなたの「好き」を<br />
              全力でカタチに。
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm">
<p>
                推しネイル・個性派・キャラネイル・トレンドデザインなど、シンプルなワンカラーから派手派手デザインまで、お客様の「好き」を何でも叶えます。
              </p>
              <p>
                巻き爪・深爪のケアにも対応。爪のお悩みもお気軽にご相談ください。おひとりおひとりに寄り添った、あなただけのネイルをお届けします。
              </p>
            </div>
            <a href="#menu" className="btn-outline mt-10 inline-block text-xs">
              メニュー・料金を見る →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
