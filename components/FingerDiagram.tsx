'use client';

import { Fingering } from '@/types';

interface FingerDiagramProps {
  hand: 'left' | 'right';
  fingerings: Fingering[];
  className?: string;
}

export default function FingerDiagram({ hand, fingerings, className = '' }: FingerDiagramProps) {
  const isLeft = hand === 'left';
  const fingerNumbers = isLeft ? [5, 4, 3, 2, 1] : [1, 2, 3, 4, 5];
  const fingerNames = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];
  const displayNames = isLeft ? [...fingerNames].reverse() : fingerNames;
  
  const getFingerNote = (fingerNum: number): string => {
    const fingering = fingerings.find(f => f.finger === fingerNum);
    return fingering ? fingering.note : '';
  };
  
  return (
    <div className={`bg-gray-50 p-4 rounded-lg ${className}`}>
      <h4 className="text-center font-bold mb-3 text-gray-700">
        {isLeft ? 'Left Hand (L.H.)' : 'Right Hand (R.H.)'}
      </h4>
      <div className="flex gap-2 justify-center">
        {fingerNumbers.map((num, idx) => {
          const isActive = fingerings.some(f => f.finger === num);
          const note = getFingerNote(num);
          return (
            <div key={idx} className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 ${
                isActive ? 'bg-red-500 text-white shadow-md' : 'bg-white border-2 border-gray-300 text-gray-400'
              }`}>
                {num}
              </div>
              <div className="mt-1">
                <span className="text-xs text-gray-600 block">{displayNames[idx]}</span>
                {note && (
                  <span className="text-xs font-semibold text-blue-600 block">{note}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}