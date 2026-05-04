import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="glass rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold mb-6 text-cyan-400">
            About Project
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            AI Study Notes Generator is a modern AI-powered web application
            built using Next.js, Tailwind CSS, and Gemini AI.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Students can generate smart notes and quiz questions instantly.
          </p>
        </div>
      </section>
    </main>
  );
}