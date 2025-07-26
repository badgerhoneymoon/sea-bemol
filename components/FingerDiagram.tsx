'use client';

import { Fingering, Chord } from '@/types';

interface FingerDiagramProps {
  hand: 'left' | 'right';
  fingerings: Fingering[];
  chord?: Chord;
  className?: string;
}

export default function FingerDiagram({ hand, fingerings, chord, className = '' }: FingerDiagramProps) {
  const isLeft = hand === 'left';
  const fingerNumbers = isLeft ? [5, 4, 3, 2, 1] : [1, 2, 3, 4, 5];
  const fingerNames = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];
  const displayNames = isLeft ? [...fingerNames].reverse() : fingerNames;
  
  const getFingerNote = (fingerNum: number): string => {
    const fingering = fingerings.find(f => f.finger === fingerNum);
    return fingering ? fingering.note : '';
  };

  const getChordTone = (fingerNum: number): string => {
    const fingering = fingerings.find(f => f.finger === fingerNum);
    if (!fingering || !chord) return '';
    
    const noteIndex = chord.notes.findIndex(note => note === fingering.note);
    if (noteIndex === -1) return '';
    
    // Map chord position to chord tone number with quality indicators
    const getChordToneWithQuality = (index: number, quality: string): string => {
      switch (index) {
        case 0: return '1'; // Root is always 1
        case 1: // Second note
          if (quality === 'sus2') {
            return '2';
          }
          if (quality === 'sus4') {
            return '4';
          }
          // Third
          if (quality.includes('minor') || quality.includes('diminished') || quality.includes('half-diminished')) {
            return '♭3';
          }
          return '3';
        case 2: // Fifth
          if (quality === 'diminished' || quality === 'diminished7' || quality === 'half-diminished7') {
            return '♭5';
          }
          if (quality === 'augmented') {
            return '♯5';
          }
          return '5';
        case 3: // Fourth note
          if (quality === '6') {
            return '6';
          }
          // Seventh
          if (quality === 'major7') {
            return '7';
          }
          if (quality === 'diminished7') {
            return '♭♭7';
          }
          return '♭7';
        case 4: return '9';
        case 5: return '11';
        case 6: return '13';
        default: return '';
      }
    };
    
    return getChordToneWithQuality(noteIndex, chord.quality);
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
          const chordTone = getChordTone(num);
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
                {chordTone && (
                  <span className="text-xs font-semibold text-green-600 block">({chordTone})</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}