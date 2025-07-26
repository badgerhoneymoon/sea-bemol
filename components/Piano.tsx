'use client';

import { Fingering } from '@/types';
import { calculateKeyRange, calculateBlackKeyPositions } from '@/lib/utils/piano-range';
import { playNote } from '@/lib/utils/audio';

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
  onClick?: (note: string) => void;
}

const PianoKey = ({ note, isBlack, isActive, finger, onClick }: PianoKeyProps) => {
  const baseClasses = isBlack 
    ? "absolute bg-gray-800 text-white w-6 sm:w-8 h-20 sm:h-24 rounded-b-sm z-10 flex flex-col items-center justify-end pb-1 sm:pb-2 shadow-lg"
    : "bg-white border border-gray-300 w-8 sm:w-12 h-28 sm:h-36 rounded-b-md flex flex-col items-center justify-end pb-1 sm:pb-2 relative shadow-sm";
  
  const activeClass = isActive ? (isBlack ? "bg-blue-600" : "bg-blue-400") : "";
  const hoverClass = isBlack 
    ? "hover:bg-gray-700 transition-colors duration-200" 
    : "hover:bg-gray-100 transition-colors duration-200";

  const handleClick = () => {
    if (onClick) {
      onClick(note);
    }
  };
  
  return (
    <div 
      className={`${baseClasses} ${activeClass} ${!isActive ? hoverClass : ''} cursor-pointer`}
      onClick={handleClick}
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

  // Handle piano key clicks to play notes
  const handleKeyClick = async (note: string) => {
    try {
      await playNote(note, 0.8, 0.4);
    } catch (error) {
      console.error('Failed to play note:', error);
    }
  };
  
  // Mobile and desktop key widths
  const mobileKeyWidth = 32; // w-8 = 32px
  const desktopKeyWidth = 48; // w-12 = 48px
  
  // Calculate black key positions dynamically
  const mobileBlackKeys = calculateBlackKeyPositions(whiteKeys, mobileKeyWidth);
  const desktopBlackKeys = calculateBlackKeyPositions(whiteKeys, desktopKeyWidth);
  
  // Helper function to find active fingering for a note
  const getFingeringForNote = (note: string): Fingering | undefined => {
    const baseNote = note.replace(/\d+$/, '');
    const noteOctave = note.match(/\d+$/)?.[0];
    
    // First, try to find an exact octave match
    const exactMatch = activeFingerings.find(f => {
      if (f.octave) {
        const expectedOctave = (4 + f.octave).toString();
        return f.note === baseNote && noteOctave === expectedOctave;
      }
      return false; // Don't match here for non-octave fingerings
    });
    
    if (exactMatch) return exactMatch;
    
    // For fingerings without octave property, only match the first occurrence
    const baseMatches = activeFingerings.filter(f => {
      return f.note === baseNote && !f.octave;
    });
    
    if (baseMatches.length > 0) {
      // For basic triads, we want to avoid duplicate finger numbers
      // Only match the first occurrence in the piano range (lowest octave)
      if (!noteOctave || noteOctave === '4') {
        return baseMatches[0];
      }
      
      // For higher octaves, only match if this note doesn't already appear in a lower octave
      const hasLowerOctaveVersion = whiteKeys.some(whiteKey => {
        const whiteBaseNote = whiteKey.replace(/\d+$/, '');
        const whiteOctave = whiteKey.match(/\d+$/)?.[0];
        return whiteBaseNote === baseNote && (!whiteOctave || whiteOctave === '4');
      });
      
      if (!hasLowerOctaveVersion) {
        return baseMatches[0];
      }
    }
    
    return undefined;
  };
  
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <div className="relative inline-flex bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl">
        <div className="relative flex bg-white p-1 rounded-lg sm:rounded-xl shadow-inner border border-gray-200">
        {whiteKeys.map((note, idx) => {
          const fingering = getFingeringForNote(note);
          return (
            <PianoKey
              key={idx}
              note={note}
              isBlack={false}
              isActive={!!fingering}
              finger={fingering?.finger}
              onClick={handleKeyClick}
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
                  onClick={handleKeyClick}
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
                  onClick={handleKeyClick}
                />
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}