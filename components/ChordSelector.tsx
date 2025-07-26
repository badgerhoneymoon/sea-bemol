'use client';

import { useState } from 'react';
import { Note, ChordQuality } from '@/types';

interface ChordSelectorProps {
  selectedRoot: Note | null;
  selectedQuality: ChordQuality | null;
  onRootChange: (root: Note) => void;
  onQualityChange: (quality: ChordQuality) => void;
  className?: string;
}

const NOTES: Note[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const CHORD_QUALITIES: { quality: ChordQuality; display: string; description: string }[] = [
  { quality: 'major', display: 'Major', description: '1-3-5' },
  { quality: 'minor', display: 'Minor', description: '1-♭3-5' },
  { quality: '7', display: 'Dominant 7th', description: '1-3-5-♭7' },
  { quality: 'major7', display: 'Major 7th', description: '1-3-5-7' },
  { quality: 'minor7', display: 'Minor 7th', description: '1-♭3-5-♭7' },
  { quality: 'sus2', display: 'Sus2', description: '1-2-5' },
  { quality: 'sus4', display: 'Sus4', description: '1-4-5' },
  { quality: '6', display: '6th', description: '1-3-5-6' },
  { quality: 'minor6', display: 'Minor 6th', description: '1-♭3-5-6' },
  { quality: 'add9', display: 'Add9', description: '1-3-5-9' },
  { quality: 'diminished', display: 'Diminished', description: '1-♭3-♭5' },
  { quality: 'augmented', display: 'Augmented', description: '1-3-♯5' },
  { quality: 'diminished7', display: 'Diminished 7th', description: '1-♭3-♭5-♭♭7' },
  { quality: 'half-diminished7', display: 'Half-diminished 7th', description: '1-♭3-♭5-♭7' },
  { quality: '9', display: 'Dominant 9th', description: '1-3-5-♭7-9' },
  { quality: '5', display: 'Power Chord', description: '1-5' },
];

const POPULAR_CHORDS = [
  { root: 'C' as Note, quality: 'major' as ChordQuality, display: 'C' },
  { root: 'G' as Note, quality: 'major' as ChordQuality, display: 'G' },
  { root: 'A' as Note, quality: 'minor' as ChordQuality, display: 'Am' },
  { root: 'F' as Note, quality: 'major' as ChordQuality, display: 'F' },
  { root: 'D' as Note, quality: 'minor' as ChordQuality, display: 'Dm' },
  { root: 'E' as Note, quality: 'minor' as ChordQuality, display: 'Em' },
  { root: 'C' as Note, quality: '7' as ChordQuality, display: 'C7' },
  { root: 'G' as Note, quality: '7' as ChordQuality, display: 'G7' },
];

export default function ChordSelector({ 
  selectedRoot, 
  selectedQuality, 
  onRootChange, 
  onQualityChange,
  className = '' 
}: ChordSelectorProps) {
  const [step, setStep] = useState<'popular' | 'root' | 'quality'>('popular');

  const handlePopularChordSelect = (root: Note, quality: ChordQuality) => {
    onRootChange(root);
    onQualityChange(quality);
    setStep('popular');
  };

  const handleRootSelect = (root: Note) => {
    onRootChange(root);
    setStep('quality');
  };

  const handleQualitySelect = (quality: ChordQuality) => {
    onQualityChange(quality);
    setStep('popular');
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-1 rounded-lg flex">
          <button
            onClick={() => setStep('popular')}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm font-medium transition-all ${
              step === 'popular' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Popular
          </button>
          <button
            onClick={() => setStep('root')}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm font-medium transition-all ${
              step === 'root' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Current Selection Display */}
      {selectedRoot && selectedQuality && (
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-xl inline-block shadow-md">
            {selectedRoot}{selectedQuality === 'major' ? '' : 
             selectedQuality === 'minor' ? 'm' :
             selectedQuality === '7' ? '7' :
             selectedQuality === 'major7' ? 'maj7' :
             selectedQuality === 'minor7' ? 'm7' :
             selectedQuality === 'sus2' ? 'sus2' :
             selectedQuality === 'sus4' ? 'sus4' :
             selectedQuality === '6' ? '6' :
             selectedQuality === 'minor6' ? 'm6' :
             selectedQuality === 'add9' ? 'add9' :
             selectedQuality === 'diminished' ? '°' :
             selectedQuality === 'augmented' ? '+' :
             selectedQuality === 'diminished7' ? '°7' :
             selectedQuality === 'half-diminished7' ? 'ø7' :
             selectedQuality === '9' ? '9' :
             selectedQuality === '5' ? '5' : ''}
          </div>
        </div>
      )}

      {/* Content based on current step */}
      {step === 'popular' && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Popular Chords
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {POPULAR_CHORDS.map((chord, idx) => (
              <button
                key={idx}
                onClick={() => handlePopularChordSelect(chord.root, chord.quality)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                  selectedRoot === chord.root && selectedQuality === chord.quality
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {chord.display}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'root' && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Select Root Note
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
            {NOTES.map((note) => (
              <button
                key={note}
                onClick={() => handleRootSelect(note)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 font-semibold ${
                  selectedRoot === note
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : note.includes('#')
                    ? 'border-gray-800 bg-gray-800 text-white hover:bg-gray-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {note}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'quality' && selectedRoot && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
            Select Chord Quality
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CHORD_QUALITIES.map((chord) => (
              <button
                key={chord.quality}
                onClick={() => handleQualitySelect(chord.quality)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  selectedQuality === chord.quality
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="font-semibold">{chord.display}</div>
                <div className="text-sm text-gray-500">{chord.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {step !== 'popular' && (
          <button
            onClick={() => setStep(step === 'quality' ? 'root' : 'popular')}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            ← Back
          </button>
        )}
        {step === 'popular' && (
          <button
            onClick={() => setStep('root')}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium ml-auto"
          >
            Build Custom →
          </button>
        )}
      </div>
    </div>
  );
}