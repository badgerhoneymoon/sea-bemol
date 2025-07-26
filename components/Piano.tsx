'use client';

import { Fingering } from '@/types';

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
        {note.replace('2', '')}
      </span>
    </div>
  );
};

export default function Piano({ activeFingerings, className = '' }: PianoProps) {
  // Single octave piano
  const whiteKeys = [
    'C', 'D', 'E', 'F', 'G', 'A', 'B'
  ];
  
  // Responsive black key positions
  const getBlackKeyPosition = (index: number) => {
    // Mobile positions (w-9 white keys = 36px each)
    const mobilePositions = [27, 63, 135, 171, 207];
    // Desktop positions (w-12 white keys = 48px each) 
    const desktopPositions = [36, 84, 180, 228, 276];
    return { mobile: mobilePositions[index], desktop: desktopPositions[index] };
  };
  
  const blackKeys = [
    { note: 'C#', positions: getBlackKeyPosition(0) },
    { note: 'D#', positions: getBlackKeyPosition(1) },
    { note: 'F#', positions: getBlackKeyPosition(2) },
    { note: 'G#', positions: getBlackKeyPosition(3) },
    { note: 'A#', positions: getBlackKeyPosition(4) }
  ];
  
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
        {blackKeys.map((key, idx) => {
          const fingering = getFingeringForNote(key.note);
          return (
            <div 
              key={`black-${idx}`}
              className="absolute"
              style={{ 
                left: `${key.positions.mobile}px`,
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
                  left: `${key.positions.desktop - key.positions.mobile}px`,
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