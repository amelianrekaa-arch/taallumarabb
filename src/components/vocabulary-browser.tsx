 "use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import type { Vocabulary } from "@/lib/sample-data";

export function VocabularyBrowser({ items }: { items: Vocabulary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const categories = ["Semua", ...Array.from(new Set(items.map((item) => item.category)))];
  const filtered = useMemo(() => items.filter((item) => {
    const text = `${item.arabic_word} ${item.transliteration} ${item.meaning}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (category === "Semua" || item.category === category);
  }), [items, query, category]);

  return <div>
    <div className="mb-6 flex flex-col gap-3 sm:flex-row">
      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white px-4 py-3"><Search size={18} className="text-[#7a8981]"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari kosakata Arab atau Indonesia..." className="w-full bg-transparent text-sm outline-none"/></label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm outline-none">{categories.map((c) => <option key={c}>{c}</option>)}</select>
    </div>
    <p className="mb-4 text-sm text-[#718078]">{filtered.length} kosakata ditemukan</p>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {filtered.map((item) => <article key={item.id} className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="relative h-40 bg-[#e6f1eb]"><Image src={item.image_url} alt={item.meaning} fill unoptimized className="object-cover"/></div>
        <div className="p-5"><span className="rounded-full bg-[#e6f1eb] px-3 py-1 text-xs font-semibold text-[#176b52]">{item.category}</span><p className="arabic mt-4 text-3xl font-bold text-[#176b52]">{item.arabic_word}</p><p className="mt-2 text-sm text-[#7b8982]">{item.transliteration}</p><h3 className="mt-1 text-lg font-bold">{item.meaning}</h3>{item.example_sentence && <p className="arabic mt-3 border-t border-gray-100 pt-3 text-lg text-[#68786f]">{item.example_sentence}</p>}</div>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="rounded-2xl bg-white p-10 text-center text-[#718078]">Kosakata tidak ditemukan. Coba kata kunci lain.</div>}
  </div>;
}