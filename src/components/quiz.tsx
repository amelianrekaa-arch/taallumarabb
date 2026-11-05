 "use client";
import { useState } from "react";
import { CheckCircle2, Trophy } from "lucide-react";

type Question = { id: string; question: string; options: string[]; answer: string; explanation: string };
export function Quiz({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const q = questions[index];
  function submit() { if (!selected) return; if (selected === q.answer) setScore((s) => s + 1); setSubmitted(true); }
  function next() { if (index + 1 >= questions.length) setFinished(true); else { setIndex((i) => i + 1); setSelected(""); setSubmitted(false); } }
  function restart() { setIndex(0); setSelected(""); setScore(0); setSubmitted(false); setFinished(false); }
  if (finished) return <div className="rounded-3xl bg-white p-10 text-center shadow-sm"><Trophy className="mx-auto text-amber-500" size={48}/><h2 className="mt-4 text-2xl font-bold">Latihan selesai!</h2><p className="mt-2 text-[#718078]">Nilai kamu</p><p className="mt-1 text-5xl font-black text-[#176b52]">{Math.round(score / questions.length * 100)}</p><p className="mt-2 text-sm text-[#718078]">{score} dari {questions.length} jawaban benar</p><button onClick={restart} className="mt-6 rounded-full bg-[#176b52] px-6 py-3 font-semibold text-white">Coba lagi</button></div>;
  return <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8"><div className="mb-6 flex items-center justify-between text-sm text-[#718078]"><span>Soal {index + 1} / {questions.length}</span><span>Skor sementara: {score}</span></div><div className="h-2 overflow-hidden rounded-full bg-[#e6f1eb]"><div className="h-full rounded-full bg-[#176b52] transition-all" style={{ width: `${(index + 1) / questions.length * 100}%` }}/></div><h2 className="mt-8 text-xl font-bold">{q.question}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{q.options.map((option) => <button key={option} disabled={submitted} onClick={() => setSelected(option)} className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${selected === option ? "border-[#176b52] bg-[#e6f1eb] text-[#176b52]" : "border-gray-200 hover:border-emerald-700/40"} ${submitted && option === q.answer ? "border-emerald-500 bg-emerald-50" : ""}`}><span className="flex items-center justify-between gap-2">{option}{submitted && option === q.answer && <CheckCircle2 size={18}/>}</span></button>)}</div>{submitted ? <div className="mt-5 rounded-2xl bg-[#f2f7f3] p-4 text-sm text-[#315d49]">{q.explanation}<button onClick={next} className="mt-4 block rounded-full bg-[#176b52] px-5 py-2.5 font-semibold text-white">{index + 1 === questions.length ? "Lihat hasil" : "Soal berikutnya"}</button></div> : <button onClick={submit} disabled={!selected} className="mt-7 rounded-full bg-[#176b52] px-6 py-3 text-sm font-bold text-white disabled:opacity-40">Kunci jawaban</button>}</div>;
}