import { VocabularyBrowser } from "@/components/vocabulary-browser";
import { sampleVocabulary, type Vocabulary } from "@/lib/sample-data";
import { getSupabaseServer } from "@/lib/supabase/server";

async function getVocabulary(): Promise<Vocabulary[]> {
  const supabase = getSupabaseServer();
  if (!supabase) return sampleVocabulary;
  const { data, error } = await supabase.from("vocabularies").select("id, arabic_word, transliteration, meaning, image_url, example_sentence, categories(name)").order("created_at", { ascending: false });
  if (error || !data?.length) return sampleVocabulary;
  return data.map((row: any) => ({ id: row.id, arabic_word: row.arabic_word, transliteration: row.transliteration ?? "", meaning: row.meaning, image_url: row.image_url ?? "https://images.unsplash.com/photo-1455390582262-044c65267c8d?w=700", category: row.categories?.name ?? "Umum", example_sentence: row.example_sentence ?? "" }));
}

export default async function MufrodatPage() {
  const items = await getVocabulary();
  return <main className="mx-auto min-h-screen max-w-6xl px-5 py-14"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#176b52]">Perbendaharaan kata</p><h1 className="mt-3 text-4xl font-black">Jelajahi Mufrodat</h1><p className="mt-3 max-w-2xl leading-7 text-[#718078]">Pelajari kosakata Bahasa Arab melalui gambar, tulisan berharakat, transliterasi, dan arti dalam Bahasa Indonesia.</p><div className="mt-9"><VocabularyBrowser items={items}/></div></main>;
}