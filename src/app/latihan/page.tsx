import { Quiz } from "@/components/quiz";
import { sampleQuestions } from "@/lib/sample-data";

export default function LatihanPage() {
  return <main className="mx-auto min-h-screen max-w-3xl px-5 py-14"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#176b52]">Uji pemahaman</p><h1 className="mt-3 text-4xl font-black">Latihan Bahasa Arab</h1><p className="mt-3 mb-9 leading-7 text-[#718078]">Jawab pertanyaan berikut untuk menguji pemahamanmu tentang mufrodat dan struktur kalimat Bahasa Arab.</p><Quiz questions={sampleQuestions}/></main>;
}