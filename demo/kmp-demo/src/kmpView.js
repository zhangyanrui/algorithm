import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const KMPDemo = () => {
  const [text, setText] = useState('ABABDABACDABABCABAB');
  const [pattern, setPattern] = useState('ABABCABAB');
  const [step, setStep] = useState(0);
  const [lps, setLps] = useState([]);
  const [matches, setMatches] = useState([]);
  const [j, setJ] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    resetDemo();
  }, [pattern, text]);

  const computeLPS = () => {
    const lps = [0];
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }

    return lps;
  };

  const resetDemo = () => {
    const newLps = computeLPS();
    setStep(0);
    setMatches([]);
    setJ(0);
    setLps(newLps);
    setHistory([]);
  };

  const nextStep = () => {
    if (step < text.length) {
      setHistory(prev => [...prev, { step, j, matches: [...matches] }]);

      if (pattern[j] === text[step]) {
        setMatches(prev => [...prev, step]);
        setJ(j + 1);
        setStep(step + 1);
        
        if (j + 1 === pattern.length) {
          alert(`Pattern found at index ${step - pattern.length + 1}`);
          setJ(0);
        }
      } else if (j > 0) {
        setJ(lps[j - 1]);
      } else {
        setStep(step + 1);
      }
    } else {
      alert('Search completed');
    }
  };

  const stepBack = () => {
    if (history.length > 0) {
      const prevState = history[history.length - 1];
      setStep(prevState.step);
      setJ(prevState.j);
      setMatches(prevState.matches);
      setHistory(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">KMP Algorithm Demonstration</h2>
      <div className="mb-4">
        <label className="block mb-2">Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Pattern:</label>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 flex space-x-2">
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next Step
        </button>
        <button onClick={stepBack} className="bg-yellow-500 text-white px-4 py-2 rounded" disabled={history.length === 0}>
          Step Back
        </button>
        <button onClick={resetDemo} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Text (i = {step}):</h3>
        <div className="flex flex-wrap relative">
          {text.split('').map((char, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs">{index}</span>
              <span
                className={`w-8 h-8 flex items-center justify-center border ${
                  index === step ? 'bg-yellow-200' : 
                  matches.includes(index) ? 'bg-green-200' : ''
                }`}
              >
                {char}
              </span>
              {index === step && (
                <ArrowUp className="text-red-500 absolute -bottom-6" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 mt-8">
        <h3 className="text-xl font-bold">Pattern (j = {j}):</h3>
        <div className="flex relative">
          {pattern.split('').map((char, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs">{index}</span>
              <span
                className={`w-8 h-8 flex items-center justify-center border ${
                  index < j ? 'bg-green-200' : ''
                }`}
              >
                {char}
              </span>
              {index === j && (
                <ArrowUp className="text-blue-500 absolute -bottom-6" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">LPS Array:</h3>
        <div className="flex">
          {lps.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs">{index}</span>
              <span className="w-8 h-8 flex items-center justify-center border">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KMPDemo;