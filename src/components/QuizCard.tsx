interface Props {
  quiz: string;
}

export default function QuizCard({ quiz }: Props) {
  return (
    <div className="glass p-6 rounded-3xl mt-8 shadow-xl">
      <h2 className="text-2xl font-bold text-pink-400 mb-4">
        AI Quiz
      </h2>

      <div className="whitespace-pre-line leading-8 text-gray-200">
        {quiz}
      </div>
    </div>
  );
}