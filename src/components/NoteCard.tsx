"use client";

import { Copy } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  content: string;
}

export default function NoteCard({ content }: Props) {
  const copyText = async () => {
    await navigator.clipboard.writeText(content);
    toast.success("Copied!");
  };

  return (
    <div className="glass rounded-3xl p-6 shadow-2xl mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-400">Generated Notes</h2>

        <button
          onClick={copyText}
          className="bg-cyan-500 hover:bg-cyan-600 transition px-4 py-2 rounded-xl flex items-center gap-2"
        >
          <Copy size={18} />
          Copy
        </button>
      </div>

      <p className="leading-8 whitespace-pre-line text-gray-200">
        {content}
      </p>
    </div>
  );
}