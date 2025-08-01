import { Fingering } from '@/types';

// All notes in order with octave numbers
const ALL_NOTES = [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
];

// White keys only
const WHITE_KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Black keys with their positions relative to white keys
const BLACK_KEY_POSITIONS = {
  'C#': { afterWhite: 'C', position: 0 },
  'D#': { afterWhite: 'D', position: 1 },
  'F#': { afterWhite: 'F', position: 2 },
  'G#': { afterWhite: 'G', position: 3 },
  'A#': { afterWhite: 'A', position: 4 }
};

export interface KeyRange {
  startNote: string;
  endNote: string;
  startOctave: number;
  endOctave: number;
  whiteKeys: string[];
  blackKeys: Array<{
    note: string;
    position: number;
  }>;
}

/**
 * Calculate the minimum key range needed to display all fingerings
 */
export function calculateKeyRange(fingerings: Fingering[]): KeyRange {
  if (fingerings.length === 0) {
    // Default to single octave if no fingerings
    return {
      startNote: 'C',
      endNote: 'B',
      startOctave: 4,
      endOctave: 4,
      whiteKeys: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      blackKeys: [
        { note: 'C#', position: 0 },
        { note: 'D#', position: 1 },
        { note: 'F#', position: 2 },
        { note: 'G#', position: 3 },
        { note: 'A#', position: 4 }
      ]
    };
  }

  // Use the first fingering as the starting point (typically the root note)
  // This gives more predictable results than trying to find the mathematically lowest note
  const rootNote = fingerings[0];

  const startOctave = rootNote.octave ? 4 + rootNote.octave : 4;

  // Generate exactly one octave starting from the root note
  const whiteKeys: string[] = [];
  
  const rootBaseNote = getBaseNote(rootNote.note);
  
  // If the root note is a black key, find the white key to start from
  let startingWhiteKeyIndex = 0; // Default to C
  
  if (WHITE_KEYS.includes(rootBaseNote)) {
    // It's a white key, use it directly
    startingWhiteKeyIndex = WHITE_KEYS.indexOf(rootBaseNote);
  } else {
    // It's a black key, find the white key below it
    const notePosition = ALL_NOTES.indexOf(rootBaseNote);
    // Find the nearest white key at or below this position
    for (let i = notePosition; i >= 0; i--) {
      const note = ALL_NOTES[i];
      if (WHITE_KEYS.includes(note)) {
        startingWhiteKeyIndex = WHITE_KEYS.indexOf(note);
        break;
      }
    }
  }
  
  // For one complete octave: exactly 8 white keys
  for (let i = 0; i < 8; i++) {
    const keyIndex = (startingWhiteKeyIndex + i) % WHITE_KEYS.length;
    const whiteKey = WHITE_KEYS[keyIndex];
    
    // Determine which octave this key belongs to
    const octave = startOctave + Math.floor((startingWhiteKeyIndex + i) / WHITE_KEYS.length);
    // Always append the octave number to ensure consistent note strings (e.g., "C4" instead of just "C")
    const displayNote = `${whiteKey}${octave}`;
    
    whiteKeys.push(displayNote);
  }
  
  // Create a simple black keys array for the component to use
  const blackKeys: Array<{ note: string; position: number }> = [];

  return {
    startNote: rootNote.note,
    endNote: whiteKeys[whiteKeys.length - 1],
    startOctave,
    endOctave: startOctave + 1,
    whiteKeys,
    blackKeys
  };
}


/**
 * Remove octave number from note name
 */
function getBaseNote(note: string): string {
  return note.replace(/\d+$/, '');
}

/**
 * Calculate black key positions relative to white keys
 */
export function calculateBlackKeyPositions(whiteKeys: string[], keyWidth: number): Array<{ note: string; left: number }> {
  const blackKeyPositions: Array<{ note: string; left: number }> = [];
  
  whiteKeys.forEach((whiteKey, index) => {
    const baseNote = getBaseNote(whiteKey);
    
    // Don't add black keys after the last white key (it would go beyond our range)
    if (index === whiteKeys.length - 1) {
      return;
    }
    
    // Check if there's a black key after this white key
    for (const [blackNote, info] of Object.entries(BLACK_KEY_POSITIONS)) {
      if (info.afterWhite === baseNote) {
        const octave = whiteKey.match(/\d+$/)?.[0] || '';
        const displayNote = blackNote + octave;
        
        // Position black key exactly between current and next white key
        const leftPosition = (index + 0.75) * keyWidth; // Properly centered between white keys
        blackKeyPositions.push({
          note: displayNote,
          left: leftPosition
        });
      }
    }
  });
  
  return blackKeyPositions;
}