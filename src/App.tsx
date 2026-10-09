import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center text-white p-8">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-6 text-6xl">🚀</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
          It Works!
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8">
          Your React + Vite + Tailwind app is running successfully.
        </p>

        {/* Interactive counter */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <p className="text-lg text-purple-200 mb-4">Interactive Counter</p>
          <div className="text-6xl font-bold mb-6 text-white">{count}</div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount(c => c - 1)}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              − Decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(c => c + 1)}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              + Increase
            </button>
          </div>
        </div>

        {/* Clock */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
          <p className="text-lg text-purple-200 mb-2">Current Time</p>
          <p className="text-3xl font-mono font-bold">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {['React', 'Vite', 'Tailwind CSS', 'TypeScript'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
