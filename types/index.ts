export type Note = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';

export type ChordQuality = 
  | 'major' | 'minor' | 'diminished' | 'augmented'
  | 'sus2' | 'sus4' 
  | '6' | 'minor6'
  | '7' | 'major7' | 'minor7' | 'diminished7' | 'half-diminished7'
  | '9' | 'major9' | 'minor9' | 'add9'
  | '11' | 'minor11'
  | '13' | 'minor13'
  | '5'; // power chord

export interface Fingering {
  note: string;
  finger: number; // 1-5 (thumb to pinky)
  octave?: number;
}

export interface ChordFingerings {
  left: Fingering[];
  right: Fingering[];
}

export interface ChordVariation {
  name: string;
  description?: string;
  fingerings: ChordFingerings;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Chord {
  root: Note;
  quality: ChordQuality;
  symbol: string; // e.g., "Cmaj7", "F#m", etc.
  notes: string[]; // actual notes in the chord
  variations: ChordVariation[];
}

export interface FavoriteChord {
  id: string;
  chord: Chord;
  variationIndex: number;
  dateAdded: string;
}