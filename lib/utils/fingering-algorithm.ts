import { Fingering } from '@/types';

// Black keys array for easy checking
const BLACK_KEYS: Set<string> = new Set(['C#', 'D#', 'F#', 'G#', 'A#']);

/**
 * Check if a note is a black key
 */
function isBlackKey(note: string): boolean {
  return BLACK_KEYS.has(note);
}

/**
 * Generate fingering variations for a chord based on rules
 */
export function generateFingeringVariations(notes: string[], hand: 'left' | 'right'): Fingering[][] {
  const variations: Fingering[][] = [];
  const numNotes = notes.length;
  
  // Count black keys in the chord
  const blackKeyCount = notes.filter(isBlackKey).length;
  const hasBlackKeys = blackKeyCount > 0;
  
  if (numNotes === 3) {
    // Triads - generate standard and alternative fingerings
    variations.push(...generateTriadFingerings(notes, hand, hasBlackKeys));
  } else if (numNotes === 4) {
    // 7th chords - generate multiple options for black key flexibility
    variations.push(...generateSeventhChordFingerings(notes, hand, hasBlackKeys));
  } else if (numNotes === 2) {
    // Power chords or dyads
    variations.push(...generateDyadFingerings(notes, hand, hasBlackKeys));
  } else if (numNotes === 5) {
    // Extended chords (9ths, etc.)
    variations.push(...generateExtendedChordFingerings(notes, hand));
  }
  
  return variations;
}

/**
 * Generate fingering variations for triads
 */
function generateTriadFingerings(notes: string[], hand: 'left' | 'right', hasBlackKeys: boolean): Fingering[][] {
  const variations: Fingering[][] = [];
  
  if (hand === 'right') {
    // Standard triad fingering: 1-3-5
    variations.push([
      { note: notes[0], finger: 1 },
      { note: notes[1], finger: 3 },
      { note: notes[2], finger: 5 }
    ]);
    
    // Alternative if black keys involved or for comfort
    if (hasBlackKeys || needsAlternativeFingering(notes)) {
      variations.push([
        { note: notes[0], finger: 1 },
        { note: notes[1], finger: 2 },
        { note: notes[2], finger: 5 }
      ]);
    }
  } else {
    // Left hand standard: 5-3-1
    variations.push([
      { note: notes[0], finger: 5 },
      { note: notes[1], finger: 3 },
      { note: notes[2], finger: 1 }
    ]);
    
    // Alternative for black keys or wider spans
    if (hasBlackKeys || needsAlternativeFingering(notes)) {
      variations.push([
        { note: notes[0], finger: 5 },
        { note: notes[1], finger: 2 },
        { note: notes[2], finger: 1 }
      ]);
    }
  }
  
  return variations;
}

/**
 * Generate fingering variations for 7th chords
 */
function generateSeventhChordFingerings(notes: string[], hand: 'left' | 'right', hasBlackKeys: boolean): Fingering[][] {
  const variations: Fingering[][] = [];
  
  if (hand === 'right') {
    // Standard 7th chord fingering: 1-2-3-5
    variations.push([
      { note: notes[0], finger: 1 },
      { note: notes[1], finger: 2 },
      { note: notes[2], finger: 3 },
      { note: notes[3], finger: 5 }
    ]);
    
    // Alternative for black keys: 1-2-4-5 (keeps finger 3 free, avoids crowding)
    if (hasBlackKeys) {
      variations.push([
        { note: notes[0], finger: 1 },
        { note: notes[1], finger: 2 },
        { note: notes[2], finger: 4 },
        { note: notes[3], finger: 5 }
      ]);
    }
    
    // Wide span alternative: 1-2-3-4 (for larger hands)
    if (hasBlackKeys || needsWideSpanFingering(notes)) {
      variations.push([
        { note: notes[0], finger: 1 },
        { note: notes[1], finger: 2 },
        { note: notes[2], finger: 3 },
        { note: notes[3], finger: 4 }
      ]);
    }
  } else {
    // Left hand standard: 5-3-2-1
    variations.push([
      { note: notes[0], finger: 5 },
      { note: notes[1], finger: 3 },
      { note: notes[2], finger: 2 },
      { note: notes[3], finger: 1 }
    ]);
    
    // Alternative for black keys: 5-4-2-1
    if (hasBlackKeys) {
      variations.push([
        { note: notes[0], finger: 5 },
        { note: notes[1], finger: 4 },
        { note: notes[2], finger: 2 },
        { note: notes[3], finger: 1 }
      ]);
    }
    
    // Wide span alternative: 5-4-3-1
    if (hasBlackKeys || needsWideSpanFingering(notes)) {
      variations.push([
        { note: notes[0], finger: 5 },
        { note: notes[1], finger: 4 },
        { note: notes[2], finger: 3 },
        { note: notes[3], finger: 1 }
      ]);
    }
  }
  
  return variations;
}

/**
 * Generate fingering variations for dyads (2-note chords)
 */
function generateDyadFingerings(notes: string[], hand: 'left' | 'right', hasBlackKeys: boolean): Fingering[][] {
  const variations: Fingering[][] = [];
  
  if (hand === 'right') {
    // Standard: 1-5
    variations.push([
      { note: notes[0], finger: 1 },
      { note: notes[1], finger: 5 }
    ]);
    
    // Alternative for comfort or black keys: 1-4
    if (hasBlackKeys) {
      variations.push([
        { note: notes[0], finger: 1 },
        { note: notes[1], finger: 4 }
      ]);
    }
  } else {
    // Left hand: 5-1
    variations.push([
      { note: notes[0], finger: 5 },
      { note: notes[1], finger: 1 }
    ]);
    
    // Alternative: 5-2
    if (hasBlackKeys) {
      variations.push([
        { note: notes[0], finger: 5 },
        { note: notes[1], finger: 2 }
      ]);
    }
  }
  
  return variations;
}

/**
 * Generate fingering variations for extended chords (5+ notes)
 */
function generateExtendedChordFingerings(notes: string[], hand: 'left' | 'right'): Fingering[][] {
  const variations: Fingering[][] = [];
  
  if (hand === 'right') {
    // Standard extended: 1-2-3-4-5
    variations.push(notes.map((note, idx) => ({ 
      note, 
      finger: (idx + 1) as 1 | 2 | 3 | 4 | 5,
      octave: idx >= 4 ? 1 : undefined
    })));
    
    // Rootless voicing (skip root, common in jazz)
    if (notes.length >= 4) {
      variations.push([
        { note: notes[1], finger: 1 },
        { note: notes[2], finger: 2 },
        { note: notes[3], finger: 3 },
        { note: notes[4] || notes[0], finger: 5, octave: 1 }
      ]);
    }
  } else {
    // Left hand: usually plays root + 7th, lets right hand handle extensions
    variations.push([
      { note: notes[0], finger: 5 },
      { note: notes[notes.length - 1], finger: 1 }
    ]);
    
    // Alternative: root + 3rd + 7th
    if (notes.length >= 4) {
      variations.push([
        { note: notes[0], finger: 5 },
        { note: notes[1], finger: 3 },
        { note: notes[3], finger: 1 }
      ]);
    }
  }
  
  return variations;
}

/**
 * Check if chord needs alternative fingering due to black key positioning
 */
function needsAlternativeFingering(notes: string[]): boolean {
  // Check for adjacent black keys or awkward black/white combinations
  for (let i = 0; i < notes.length - 1; i++) {
    const current = notes[i];
    const next = notes[i + 1];
    
    // Both black keys adjacent - might need different fingering
    if (isBlackKey(current) && isBlackKey(next)) {
      return true;
    }
    
    // Black key followed by white key might need adjustment
    if (isBlackKey(current) && !isBlackKey(next)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Check if chord needs wide span fingering
 */
function needsWideSpanFingering(notes: string[]): boolean {
  // This is a simplified check - in a real implementation, 
  // you'd calculate the actual interval distances
  return notes.length >= 4;
}

/**
 * Calculate difficulty level based on fingering and chord structure
 */
export function calculateDifficulty(fingering: Fingering[], notes: string[]): 'beginner' | 'intermediate' | 'advanced' {
  const blackKeyCount = notes.filter(isBlackKey).length;
  const hasThumbOnBlackKey = fingering.some(f => f.finger === 1 && isBlackKey(f.note));
  const hasPinkyOnBlackKey = fingering.some(f => f.finger === 5 && isBlackKey(f.note));
  const usesAllFingers = new Set(fingering.map(f => f.finger)).size === 5;
  
  // Advanced conditions
  if (usesAllFingers || blackKeyCount >= 3 || (hasThumbOnBlackKey && hasPinkyOnBlackKey)) {
    return 'advanced';
  }
  
  // Intermediate conditions  
  if (blackKeyCount >= 2 || hasThumbOnBlackKey || hasPinkyOnBlackKey || notes.length >= 4) {
    return 'intermediate';
  }
  
  // Otherwise beginner
  return 'beginner';
}