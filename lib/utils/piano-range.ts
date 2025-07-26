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

  // Find the lowest and highest notes
  let lowestNote = fingerings[0];
  let highestNote = fingerings[0];

  for (const fingering of fingerings) {
    const currentOctave = fingering.octave || 4; // Default to octave 4
    const lowestOctave = lowestNote.octave || 4;
    const highestOctave = highestNote.octave || 4;

    // Compare by octave first, then by note position within octave
    if (currentOctave < lowestOctave || 
        (currentOctave === lowestOctave && getNotePosition(fingering.note) < getNotePosition(lowestNote.note))) {
      lowestNote = fingering;
    }

    if (currentOctave > highestOctave || 
        (currentOctave === highestOctave && getNotePosition(fingering.note) > getNotePosition(highestNote.note))) {
      highestNote = fingering;
    }
  }

  const startOctave = lowestNote.octave || 4;

  // Generate exactly one octave starting from the lowest note
  const whiteKeys: string[] = [];
  
  const lowestBaseNote = getBaseNote(lowestNote.note);
  
  // If the lowest note is a black key, find the white key to start from
  let startingWhiteKeyIndex = 0; // Default to C
  
  if (WHITE_KEYS.includes(lowestBaseNote)) {
    // It's a white key, use it directly
    startingWhiteKeyIndex = WHITE_KEYS.indexOf(lowestBaseNote);
  } else {
    // It's a black key, find the white key below it
    const notePosition = ALL_NOTES.indexOf(lowestBaseNote);
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
    const displayNote = octave !== 4 ? `${whiteKey}${octave}` : whiteKey;
    
    whiteKeys.push(displayNote);
  }
  
  // Create a simple black keys array for the component to use
  const blackKeys: Array<{ note: string; position: number }> = [];

  return {
    startNote: lowestNote.note,
    endNote: whiteKeys[whiteKeys.length - 1],
    startOctave,
    endOctave: startOctave + 1,
    whiteKeys,
    blackKeys
  };
}

/**
 * Get the position of a note within an octave (0-11)
 */
function getNotePosition(note: string): number {
  const baseNote = getBaseNote(note);
  return ALL_NOTES.indexOf(baseNote);
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
        
        // Position black key between current and next white key
        const leftPosition = (index + 0.7) * keyWidth; // Slightly offset to the right
        blackKeyPositions.push({
          note: displayNote,
          left: leftPosition
        });
      }
    }
  });
  
  return blackKeyPositions;
}