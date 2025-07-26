'use client';

import { Chord } from '@/types';
import Piano from './Piano';
import FingerDiagram from './FingerDiagram';
import { playChord } from '@/lib/utils/audio';

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

  const handlePlayChord = async () => {
    try {
      // Collect all notes from both hands' fingerings
      const allNotes: string[] = [];
      
      // Add notes from right hand fingerings
      rightFingerings.forEach(fingering => {
        let noteWithOctave = fingering.note;
        
        // Add octave if specified in fingering
        if (fingering.octave !== undefined) {
          const baseOctave = 4; // Default middle octave
          const actualOctave = baseOctave + fingering.octave;
          noteWithOctave = `${fingering.note}${actualOctave}`;
        }
        
        allNotes.push(noteWithOctave);
      });
      
      // Add notes from left hand fingerings
      leftFingerings.forEach(fingering => {
        let noteWithOctave = fingering.note;
        
        // Add octave if specified in fingering
        if (fingering.octave !== undefined) {
          const baseOctave = 4; // Default middle octave
          const actualOctave = baseOctave + fingering.octave;
          noteWithOctave = `${fingering.note}${actualOctave}`;
        }
        
        allNotes.push(noteWithOctave);
      });
      
      // Remove duplicates while preserving octave differences
      const uniqueNotes = [...new Set(allNotes)];
      
      await playChord(uniqueNotes, 1.5, 0.3);
    } catch (error) {
      console.error('Failed to play chord:', error);
    }
  };

  return (
    <div className={`${className}`}>

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