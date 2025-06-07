import React, { useState } from 'react';
import Home from './Home';
import QuizPage from './QuizPage';

export default function App() {
  const [page, setPage] = useState<'home' | 'quiz'>('home');
  const [quizOptions, setQuizOptions] = useState({ subject: 'history', format: 'choice', count: '10' });

  const startQuiz = (options: typeof quizOptions) => {
    setQuizOptions(options);
    setPage('quiz');
  };

  const goHome = () => setPage('home');

  return (
    <>
      {page === 'home' && <Home onStart={startQuiz} />}
      {page === 'quiz' && <QuizPage options={quizOptions} onBack={goHome} />}
    </>
  );
}
