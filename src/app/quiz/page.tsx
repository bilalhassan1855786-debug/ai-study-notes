import Navbar from "@/components/Navbar";
import TopicForm from "@/components/TopicForm";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <TopicForm />
      </section>
    </main>
  );
}