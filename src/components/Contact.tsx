import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-in-up">
          <p className="text-xs tracking-widest text-white/60 uppercase mb-4">
            Reservation
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
            ご予約・お問い合わせ
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto">
            ご予約はLINE公式アカウントから承っております。デザインのご相談、メニューに関するご質問など、お気軽にメッセージください。
          </p>
        </div>

        <div className="fade-in-up mt-10 grid md:grid-cols-2 gap-6">
          {/* LINE */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white flex flex-col items-center justify-center">
            <p className="text-xs tracking-widest text-white/60 uppercase mb-3">
              LINE
            </p>
            <p className="text-sm text-white/80 mb-6">
              タップして友だち追加・ご予約
            </p>
            <a
              href="https://line.me/R/ti/p/@jlj0089i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#06C755] text-white text-xs tracking-widest px-10 py-3 hover:bg-[#05b04c] transition-colors duration-300"
            >
              LINEで予約する
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white flex flex-col items-center justify-center">
            <p className="text-xs tracking-widest text-white/60 uppercase mb-3">
              Instagram
            </p>
            <p className="text-sm text-white/80 mb-6">
              最新デザインをチェック
            </p>
            <a
              href="https://www.instagram.com/niino__nail/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-dark text-xs tracking-widest px-10 py-3 hover:bg-accent hover:text-white transition-colors duration-300"
            >
              @niino__nail
            </a>
          </div>
        </div>

        <div className="fade-in-up mt-8">
          <p className="text-white/60 text-xs">
            現在、ご新規様もご案内しております
          </p>
        </div>
      </div>
    </section>
  );
}
