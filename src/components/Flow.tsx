import { useEffect, useRef } from "react";

const reserveItems = [
  "お名前フルネーム",
  "ご希望の日程（予約枠ご覧ください）",
  "何分枠でのご予約か",
  "オフ、長さ出しの有無",
  "ハンドorフット",
];

const notes = [
  {
    title: "予約時間について",
    text: "当店時間制です。予約時間からスタートしますので、遅れた場合もお時間料金が発生しております。時間よりも早く来られる場合は可能な限り対応しますので、事前にご連絡ください。",
  },
  {
    title: "キャンセルについて",
    text: "無断キャンセル、度重なるキャンセルや時間変更は、今後のご予約をお断りする場合がございます。",
  },
  {
    title: "お子様同伴について",
    text: "お子様とご一緒のご来店はご遠慮願います。溶剤や施術中のダスト、刃物の取り扱いもあります。大変心苦しいのですがご理解の上、ご予約よろしくお願いします。",
  },
];

export default function Flow() {
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
    <section id="flow" ref={ref} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="text-xs tracking-widest text-primary uppercase mb-3">
            Flow
          </p>
          <h2 className="section-title">施術までの流れ</h2>
        </div>

        {/* Steps */}
        <div className="fade-in-up space-y-8 mb-16">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">1</div>
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-2">LINE友だち追加</h3>
              <p className="text-sm text-gray-600 leading-relaxed">まずはLINE公式アカウントを友だち追加してください。</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">2</div>
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-2">LINEで予約内容を送信</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">以下の内容をメッセージでお送りください。</p>
              <ul className="space-y-2">
                {reserveItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary mt-0.5">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                ※ お久しぶりの方、ご紹介者様もこちらをご記入の上、LINEからお問い合わせください。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">3</div>
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-2">予約確定</h3>
              <p className="text-sm text-gray-600 leading-relaxed">こちらから確認のご返信をいたします。返信をもって予約確定となります。</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">4</div>
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-2">ご来店・施術</h3>
              <p className="text-sm text-gray-600 leading-relaxed">予約時間にお越しください。デザインのご相談も当日承ります。</p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="fade-in-up bg-white rounded-lg p-6 md:p-8">
          <h3 className="text-sm font-medium text-gray-800 mb-6 text-center">ご予約に関する注意事項</h3>
          <div className="space-y-6">
            {notes.map((note) => (
              <div key={note.title}>
                <p className="text-sm font-medium text-accent mb-1">{note.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
