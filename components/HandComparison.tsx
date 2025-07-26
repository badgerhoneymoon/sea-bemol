'use client';

import { Chord } from '@/types';
import Piano from './Piano';
import FingerDiagram from './FingerDiagram';

interface HandComparisonProps {
  chord: Chord;
  variationIndex: number;
  onFavoriteToggle?: () => void;
  isFavorite?: boolean;
  className?: string;
}

export default function HandComparison({ chord, variationIndex, onFavoriteToggle, isFavorite, className = '' }: HandComparisonProps) {
  const variation = chord.variations[variationIndex];
  const leftFingerings = variation?.fingerings.left || [];
  const rightFingerings = variation?.fingerings.right || [];

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-center mb-6 relative">
        <h3 className="text-xl font-semibold text-center text-gray-700">
          {chord.symbol} - {variation?.name} - Both Hands
        </h3>
        {onFavoriteToggle && (
          <button
            onClick={onFavoriteToggle}
            className={`ml-4 p-2 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 text-lg ${
              isFavorite
                ? 'text-yellow-500 bg-yellow-100 hover:bg-yellow-200'
                : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-100'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        )}
      </div>

      <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Left Hand */}
        <div className="bg-green-50 rounded-lg p-2 sm:p-4">
          <h4 className="text-lg font-semibold mb-4 text-center text-green-800">
            👈 Left Hand
          </h4>
          
          <div className="mb-4 -mx-2 sm:mx-0">
            <Piano 
              key={`left-${chord.symbol}-${variationIndex}`}
              activeFingerings={leftFingerings} 
            />
          </div>
          
          <div className="flex justify-center">
            <FingerDiagram hand="left" fingerings={leftFingerings} chord={chord} />
          </div>
        </div>

        {/* Right Hand */}
        <div className="bg-blue-50 rounded-lg p-2 sm:p-4">
          <h4 className="text-lg font-semibold mb-4 text-center text-blue-800">
            👉 Right Hand
          </h4>
          
          <div className="mb-4 -mx-2 sm:mx-0">
            <Piano 
              key={`right-${chord.symbol}-${variationIndex}`}
              activeFingerings={rightFingerings} 
            />
          </div>
          
          <div className="flex justify-center">
            <FingerDiagram hand="right" fingerings={rightFingerings} chord={chord} />
          </div>
        </div>
      </div>


    </div>
  );
}