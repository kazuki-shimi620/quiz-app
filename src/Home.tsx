import React, { useState } from 'react';

type Props = {
  onStart: (options: { subject: string; format: string; count: string }) => void;
};

export default function Home({ onStart }: Props) {
  const [subject, setSubject] = useState('history');
  const [format, setFormat] = useState('choice');
  const [count, setCount] = useState('10');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">世界史・地理クイズ</h1>

      <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md">
        <div className="mb-4">
          <label className="font-semibold">ジャンル:</label>
          <select
            className="block w-full border p-2 rounded mt-1"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="history">世界史</option>
            <option value="geography">地理</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="font-semibold">形式:</label>
          <select
            className="block w-full border p-2 rounded mt-1"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="choice">4択</option>
            <option value="input">入力式</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="font-semibold">問題数:</label>
          <select
            className="block w-full border p-2 rounded mt-1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          >
            <option value="10">10問</option>
            <option value="20">20問</option>
            <option value="all">すべて</option>
          </select>
        </div>

        <button
          onClick={() => onStart({ subject, format, count })}
          className="bg-blue-600 text-white py-2 px-4 rounded block w-full hover:bg-blue-700"
        >
          クイズスタート
        </button>
      </div>
    </div>
  );
}
