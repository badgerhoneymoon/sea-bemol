'use client';

import { Chord } from '@/types';
import Piano from './Piano';
import FingerDiagram from './FingerDiagram';

interface HandComparisonProps {
  chord: Chord;
  variationIndex: number;
  className?: string;
}

export default function HandComparison({ chord, variationIndex, className = '' }: HandComparisonProps) {
  const variation = chord.variations[variationIndex];
  const leftFingerings = variation?.fingerings.left || [];
  const rightFingerings = variation?.fingerings.right || [];

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">
        {chord.symbol} - {variation?.name} - Both Hands
      </h3>

      <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Left Hand */}
        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-4 text-center text-green-800">
            👈 Left Hand
          </h4>
          
          <div className="mb-4 overflow-x-auto">
            <div className="flex justify-center">
              <Piano activeFingerings={leftFingerings} />
            </div>
          </div>
          
          <div className="flex justify-center">
            <FingerDiagram hand="left" fingerings={leftFingerings} />
          </div>
        </div>

        {/* Right Hand */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-4 text-center text-blue-800">
            👉 Right Hand
          </h4>
          
          <div className="mb-4 overflow-x-auto">
            <div className="flex justify-center">
              <Piano activeFingerings={rightFingerings} />
            </div>
          </div>
          
          <div className="flex justify-center">
            <FingerDiagram hand="right" fingerings={rightFingerings} />
          </div>
        </div>
      </div>

      {/* Practice Tips */}
      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
        <h4 className="font-semibold text-purple-800 mb-2">Practice Tips</h4>
        <ul className="text-sm space-y-1 text-purple-700">
          <li>• Practice each hand separately first</li>
          <li>• Start slowly and focus on finger positioning</li>
          <li>• Notice the mirrored finger patterns between hands</li>
          <li>• Gradually increase tempo once comfortable</li>
        </ul>
      </div>
    </div>
  );
}