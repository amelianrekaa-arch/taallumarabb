 "use client";
import { useMemo, useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";

type Exercise = { id: string; type: "ismiyah" | "filiyah"; title: string; instruction: string; words: string[]; answer: string[]; translation: string; explanation: string };

export function SentenceBuilder({ exercises }: { exercises: Exercise[] }) {
  const [index, setIndex] = useState(0);
  const exercise = exercises[index];
  const [available, setAvailable] = useState<string[]>(exercise.words);
  const [chosen, setChosen] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const correct = useMemo(() => chosen.length === exercise.answer.length && chosen.every((word, i) => word === exercise.answer[i]), [chosen, exercise.answer]);

  function choose(word: string, i: number) {
    setAvailable((prev) => prev.filter((_, idx) => idx !== i));
    setChosen((prev) => [...prev, word]);
    setChecked(false);
  }
  function remove(i: number) {
    const word = chosen[i];
    setChosen((prev) => prev.filter((_, idx) => idx !== i));
    setAvailable((prev) => [...prev, word]);
    setChecked(false);
  }
  function reset() { setAvailable(exercise.words); setChosen([]); setChecked(false); }
  function next() { const nextIndex = (index + 1) % exercises.length; setIndex(nextIndex); setAvailable(exercises[nextIndex].words); setChosen([]); setChecked(false); }

  return <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8">
    <div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded-full bg-[#e6f1eb] px-3 py-1 text-xs font-bold text-[#176b52]">{exercise.type === "ismiyah" ? "Jumlah Ismiyah" : "Jumlah Fi'liyah"}</span><span className="text-sm text-[#7b8982]">Latihan {index + 1} dari {exercises.length}</span></div>
    <h2 className="mt-5 text-2xl font-bold">{exercise.title}</h2><p className="mt-2 text-sm text-[#718078]">{exercise.instruction}</p>
    <div className="mt-6 rounded-2xl border-2 border-dashed border-emerald-900/20 bg-[#f8faf7] p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#839087]">Kalimat kamu</p>
      <div className="flex min-h-16 flex-wrap items-center justify-center gap-2" dir="rtl">
        {chosen.length ? chosen.map((word, i) => <button key={`${word}-${i}`} onClick={() => remove(i)} className="arabic rounded-xl bg-[#176b52] px-4 py-3 text-xl font-bold text-white hover:bg-[#10543f]">{word}</button>) : <span className="text-sm text-[#a0aaa4]">Pilih kata di bawah untuk menyusun kalimat</span>}
      </div>
    </div>
    <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wide text-[#839087]">Pilihan kata</p>
    <div className="flex flex-wrap justify-center gap-2" dir="rtl">{available.map((word, i) => <button key={`${word}-${i}`} onClick={() => choose(word, i)} className="arabic rounded-xl border border-emerald-900/15 bg-white px-4 py-3 text-xl font-semibold text-[#176b52] hover:bg-[#e6f1eb]">{word}</button>)}</div>
    <div className="mt-7 flex flex-wrap gap-3"><button onClick={reset} className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-[#53645b]"><RotateCcw size={16}/> Ulangi</button><button onClick={() => setChecked(true)} disabled={chosen.length === 0} className="rounded-full bg-[#176b52] px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">Periksa jawaban</button></div>
    {checked && <div className={`mt-5 rounded-2xl p-4 ${correct ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}><div className="flex items-center gap-2 font-bold">{correct ? <><CheckCircle2 size={19}/> Jawaban benar!</> : "Belum tepat, coba lagi."}</div><p className="mt-2 text-sm">{exercise.explanation}</p>{correct && <><p className="arabic mt-3 text-2xl font-bold" dir="rtl">{exercise.answer.join(" ")}</p><p className="mt-1 text-sm">{exercise.translation}</p><button onClick={next} className="mt-4 rounded-full bg-[#176b52] px-5 py-2 text-sm font-semibold text-white">Latihan berikutnya</button></>}</div>}
  </div>;
}