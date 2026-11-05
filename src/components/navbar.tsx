import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";

const links = [
  ["Mufrodat", "/mufrodat"],
  ["Jumlah Ismiyah", "/jumlah-ismiyah"],
  ["Jumlah Fi'liyah", "/jumlah-filiyah"],
  ["Latihan", "/latihan"]
];

export function Navbar() {
  return <header className="sticky top-0 z-30 border-b border-emerald-900/10 bg-[#f8f8f4]/95 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
      <Link href="/" className="flex items-center gap-2 font-bold text-[#176b52]"><span className="rounded-xl bg-[#e6f1eb] p-2"><GraduationCap size={22}/></span><span>Ta'allum <span className="text-[#17352d]">Arabic</span></span></Link>
      <div className="hidden items-center gap-6 text-sm font-medium text-[#52635b] md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-[#176b52]">{label}</Link>)}</div>
      <Link href="/mufrodat" className="flex items-center gap-2 rounded-full bg-[#176b52] px-4 py-2 text-sm font-semibold text-white hover:bg-[#10543f]"><BookOpen size={16}/> Mulai belajar</Link>
    </nav>
  </header>;
}