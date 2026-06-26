import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/hero-01.png",
    catchcopy: "あなたの「好き」を\n指先に。",
    sub: "シンプルから派手派手まで、何なりとお任せください",
  },
  {
    id: 2,
    image: "/images/hero-02.png",
    catchcopy: "推し・個性派・トレンド\nすべて叶えます。",
    sub: "キャラネイル・痛ネイルも得意です",
  },
  {
    id: 3,
    image: "/images/hero-03.png",
    catchcopy: "爪のお悩みにも\n寄り添います。",
    sub: "巻き爪・深爪ケアもお気軽にご相談ください",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-xs tracking-widest3 mb-6 opacity-80">
          PRIVATE NAIL SALON
        </p>
        <h1 className="text-3xl md:text-5xl font-serif font-light leading-relaxed mb-6 whitespace-pre-line hero-slide">
          {slides[current].catchcopy}
        </h1>
        <p className="text-sm md:text-base opacity-80 max-w-md leading-relaxed whitespace-nowrap">
          {slides[current].sub}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block border border-white text-white text-xs tracking-widest px-10 py-3 hover:bg-white hover:text-primary-dark transition-all duration-300"
        >
          ご予約はこちら
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-0.5 transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-widest writing-mode-vertical">
          SCROLL
        </span>
        <div className="w-px h-12 bg-white/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/80 animate-scroll-line h-1/2" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
