import React, { useEffect, useState } from 'react';
import { Brain } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <Brain className="w-20 h-20 text-cyan-400 animate-pulse mx-auto" />
          <div className="absolute inset-0 blur-xl bg-cyan-400 opacity-50 animate-pulse"></div>
        </div>

        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Initializing AI Systems
        </h2>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-cyan-400 mt-4 text-sm font-mono">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
