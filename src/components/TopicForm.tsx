"use client";

import { useState } from "react";
import Loader from "./Loader";
import NoteCard from "./NoteCard";
import QuizCard from "./QuizCard";

export default function TopicForm() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [quiz, setQuiz] = useState("");

  const generateNotes = async () => {
    if (!topic.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();

      setNotes(data.notes);
      setQuiz(data.quiz);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="glass p-8 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          AI Study Notes Generator
        </h1>

        <input
          type="text"
          placeholder="Enter topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
        />

        <button
          onClick={generateNotes}
          className="w-full mt-5 bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-2xl text-lg font-semibold"
        >
          Generate Notes
        </button>
      </div>

      {loading && <Loader />}

      {notes && <NoteCard content={notes} />}

      {quiz && <QuizCard quiz={quiz} />}
    </div>
  );
}