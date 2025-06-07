import React, { useState } from 'react';

const historyQuestions = [
  {
    question: 'ナポレオンが皇帝になったのは何年？',
    choices: ['1804年', '1812年', '1799年', '1801年'],
    answer: '1804年',
    image: '/napoleon.jpg',
  },
];

const geographyQuestions = [
  {
    question: 'ナイル川が流れる国のうち、もっとも南にあるのは？',
    choices: ['エチオピア', 'スーダン', 'ウガンダ', 'エジプト'],
    answer: 'ウガンダ',
    image: '/nile.jpg',
  },
];

type Props = {
  options: { subject: string; format: string; count: string };
  onBack: () => void;
};

export default function QuizPage({ options, onBack }: Props) {
  const { subject, format, count } = options;
  const questions = subject === 'geography' ? geographyQuestions : historyQuestions;
  const total = count === 'all' ? questions.length : Math.min(parseInt(count, 10), questions.length);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (choice: string) => {
    if (choice === questions[current].answer) setScore((s) => s + 1);
    if (current + 1 < total) setCurrent((c) => c + 1);
    else setDone(true);
  };

  if (!subject || !format || !count) return <div>読み込み中...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {!done ? (
        <div className="w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-4">
            {current + 1} / {total} 問
          </h2>
          <p className="text-lg font-bold mb-4">{questions[current].question}</p>
          {questions[current].image && (
            <div className="mb-4">
              <img
                src={questions[current].image}
                alt="問題画像"
                width={600}
                height={400}
                className="rounded shadow"
              />
            </div>
          )}
          <div className="grid grid-cols-1 gap-4">
            {format === 'choice' ? (
              questions[current].choices.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(c)}
                  className="border border-gray-300 p-2 rounded hover:bg-gray-100"
                >
                  {c}
                </button>
              ))
            ) : (
              <p>※入力式は後日対応予定です。</p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">終了！</h2>
          <p className="text-lg">
            あなたのスコア: {score} / {total}
          </p>
          <button onClick={onBack} className="mt-4 text-blue-600 underline">
            トップに戻る
          </button>
        </div>
      )}
    </div>
  );
}
