import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <BrainCircuit className="text-cyan-400" />
        <h1 className="text-2xl font-bold">AI Notes</h1>
      </div>

      <div className="flex gap-6 text-sm md:text-base">
        <Link href="/">Home</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}