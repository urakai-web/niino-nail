import { useEffect, useRef, useState } from "react";
import { client, type Tag, type GalleryItem } from "../lib/microcms";

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!client) {
      setLoading(false);
      return;
    }
    Promise.all([
      client.getList<Tag>({ endpoint: "tags", queries: { limit: 50 } }),
      client.getList<GalleryItem>({ endpoint: "gallery", queries: { limit: 50 } }),
    ]).then(([tagsRes, galleryRes]) => {
      setTags(tagsRes.contents);
      setItems(galleryRes.contents);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  const filtered = activeTag
    ? items.filter((item) => item.tags.some((t) => t.id === activeTag))
    : items;

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="px-6 mb-8 fade-in-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div>
              <p className="text-xs tracking-widest text-primary uppercase mb-3">
                Gallery
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-800">
                ネイルギャラリー
              </h2>
            </div>
            <a
              href="https://www.instagram.com/niino__nail/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-primary border-b border-primary pb-0.5 mt-4 md:mt-0 hover:text-primary-dark hover:border-primary-dark transition-colors self-start md:self-auto"
            >
              Instagramで更に見る →
            </a>
          </div>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                activeTag === null
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              すべて
            </button>
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.id)}
                className={`text-xs px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                  activeTag === tag.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery cards */}
        <div className="fade-in-up">
          {loading ? (
            <div className="text-center py-12 text-gray-400 text-sm">読み込み中...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              該当するネイルがありません
            </div>
          ) : (
            <div className="overflow-x-auto scrollbar-hide px-6 pb-4">
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="w-64 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-sm"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={`${item.image.url}?w=512&h=512&fit=crop`}
                        alt={item.description || "ネイルデザイン"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="text-[10px] tracking-wide bg-warm-100 text-accent px-2 py-0.5 rounded-full"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      {item.description && (
                        <p className="text-xs text-gray-500">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
