export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden md:min-h-[600px]">
      {/* PC: blurred background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url(/images/logo.jpg)",
          filter: "blur(40px) brightness(1.1)",
        }}
      />
      <h1 className="sr-only">Niino（ニーノ）｜石川県金沢市のプライベートネイルサロン</h1>
      <img
        src="/images/logo.jpg"
        alt="Niino - Private Nail Salon"
        className="relative z-10 w-full md:max-w-lg md:mx-auto md:my-16 md:rounded-lg md:shadow-lg"
      />
    </section>
  );
}
