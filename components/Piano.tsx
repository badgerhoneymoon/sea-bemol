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
  x?: number;
  octave?: number;
}

const PianoKey = ({ note, isBlack, isActive, finger, x, octave }: PianoKeyProps) => {
  const baseClasses = isBlack 
    ? "absolute bg-gray-800 text-white w-8 h-24 rounded-b-sm z-10 flex flex-col items-center justify-end pb-2 shadow-lg"
    : "bg-white border border-gray-300 w-12 h-36 rounded-b-md flex flex-col items-center justify-end pb-2 relative shadow-sm";
  
  const activeClass = isActive ? (isBlack ? "bg-blue-600" : "bg-blue-400") : "";
  const hoverClass = isBlack 
    ? "hover:bg-gray-700 transition-colors duration-200" 
    : "hover:bg-gray-100 transition-colors duration-200";
  
  return (
    <div 
      className={`${baseClasses} ${activeClass} ${!isActive ? hoverClass : ''} cursor-pointer`}
      style={isBlack ? { left: `${x}px`, top: '0' } : {}}
    >
      {isActive && finger && (
        <div className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mb-1 shadow-md">
          {finger}
        </div>
      )}
      <span className={`text-xs font-semibold ${isBlack ? 'text-white' : 'text-gray-700'}`}>
        {note.replace('2', '')}
      </span>
    </div>
  );
};

export default function Piano({ activeFingerings, className = '' }: PianoProps) {
  // Extended piano range to accommodate all chord types
  const whiteKeys = [
    'C', 'D', 'E', 'F', 'G', 'A', 'B', 
    'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2',
    'C3'
  ];
  
  const blackKeys = [
    { note: 'C#', x: 36 },
    { note: 'D#', x: 84 },
    { note: 'F#', x: 180 },
    { note: 'G#', x: 228 },
    { note: 'A#', x: 276 },
    { note: 'C#2', x: 372 },
    { note: 'D#2', x: 420 },
    { note: 'F#2', x: 516 },
    { note: 'G#2', x: 564 },
    { note: 'A#2', x: 612 },
    { note: 'C#3', x: 708 }
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
            <PianoKey
              key={`black-${idx}`}
              note={key.note}
              isBlack={true}
              isActive={!!fingering}
              finger={fingering?.finger}
              x={key.x}
            />
          );
        })}
      </div>
    </div>
  );
}