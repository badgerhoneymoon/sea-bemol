'use client';

import { Fingering } from '@/types';
import { calculateKeyRange, calculateBlackKeyPositions } from '@/lib/utils/piano-range';

interface PianoProps {
  activeFingerings: Fingering[];
  className?: string;
}

interface PianoKeyProps {
  note: string;
  isBlack: boolean;
  isActive: boolean;
  finger?: number;
  octave?: number;
}

const PianoKey = ({ note, isBlack, isActive, finger }: PianoKeyProps) => {
  const baseClasses = isBlack 
    ? "absolute bg-gray-800 text-white w-6 sm:w-8 h-20 sm:h-24 rounded-b-sm z-10 flex flex-col items-center justify-end pb-1 sm:pb-2 shadow-lg"
    : "bg-white border border-gray-300 w-9 sm:w-12 h-28 sm:h-36 rounded-b-md flex flex-col items-center justify-end pb-1 sm:pb-2 relative shadow-sm";
  
  const activeClass = isActive ? (isBlack ? "bg-blue-600" : "bg-blue-400") : "";
  const hoverClass = isBlack 
    ? "hover:bg-gray-700 transition-colors duration-200" 
    : "hover:bg-gray-100 transition-colors duration-200";
  
  return (
    <div 
      className={`${baseClasses} ${activeClass} ${!isActive ? hoverClass : ''} cursor-pointer`}
    >
      {isActive && finger && (
        <div className="bg-red-500 text-white rounded-full w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold mb-1 shadow-md">
          {finger}
        </div>
      )}
      <span className={`text-xs sm:text-xs font-semibold ${isBlack ? 'text-white' : 'text-gray-700'}`}>
        {note.replace(/\d+$/, '')}
      </span>
    </div>
  );
};

export default function Piano({ activeFingerings, className = '' }: PianoProps) {
  // Calculate dynamic key range based on active fingerings
  const keyRange = calculateKeyRange(activeFingerings);
  const whiteKeys = keyRange.whiteKeys;
  
  // Mobile and desktop key widths
  const mobileKeyWidth = 36; // w-9 = 36px
  const desktopKeyWidth = 48; // w-12 = 48px
  
  // Calculate black key positions dynamically
  const mobileBlackKeys = calculateBlackKeyPositions(whiteKeys, mobileKeyWidth);
  const desktopBlackKeys = calculateBlackKeyPositions(whiteKeys, desktopKeyWidth);
  
  // Helper function to find active fingering for a note
  const getFingeringForNote = (note: string): Fingering | undefined => {
    return activeFingerings.find(f => {
      // Handle octave notation
      if (f.octave) {
        return f.note === note.replace(/\d+$/, '') && note.includes((f.octave + 1).toString());
      }
      return f.note === note.replace(/\d+$/, '');
    });
  };
  
  return (
    <div className={`relative inline-block bg-gray-100 p-4 rounded-lg shadow-xl ${className}`}>
      <div className="relative flex">
        {whiteKeys.map((note, idx) => {
          const fingering = getFingeringForNote(note);
          return (
            <PianoKey
              key={idx}
              note={note}
              isBlack={false}
              isActive={!!fingering}
              finger={fingering?.finger}
            />
          );
        })}
        {mobileBlackKeys.map((key, idx) => {
          const fingering = getFingeringForNote(key.note);
          const desktopKey = desktopBlackKeys[idx];
          return (
            <div 
              key={`black-${idx}`}
              className="absolute"
              style={{ 
                left: `${key.left}px`,
                top: '0'
              }}
            >
              <div className="sm:hidden">
                <PianoKey
                  note={key.note}
                  isBlack={true}
                  isActive={!!fingering}
                  finger={fingering?.finger}
                />
              </div>
              <div 
                className="hidden sm:block absolute"
                style={{ 
                  left: `${desktopKey ? desktopKey.left - key.left : 0}px`,
                  top: '0'
                }}
              >
                <PianoKey
                  note={key.note}
                  isBlack={true}
                  isActive={!!fingering}
                  finger={fingering?.finger}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}