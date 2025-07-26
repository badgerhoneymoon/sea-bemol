'use client';

interface HandSelectorProps {
  selectedHand: 'left' | 'right';
  onHandChange: (hand: 'left' | 'right') => void;
  className?: string;
}

export default function HandSelector({ selectedHand, onHandChange, className = '' }: HandSelectorProps) {
  return (
    <div className={`bg-white p-4 rounded-xl shadow-lg ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
        Select Hand
      </h3>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => onHandChange('left')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedHand === 'left'
              ? 'bg-blue-600 text-white shadow-md transform scale-105'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          <span className="block text-sm">👈</span>
          Left Hand
        </button>
        <button
          onClick={() => onHandChange('right')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedHand === 'right'
              ? 'bg-blue-600 text-white shadow-md transform scale-105'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          <span className="block text-sm">👉</span>
          Right Hand
        </button>
      </div>
    </div>
  );
}