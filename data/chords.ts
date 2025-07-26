import { Chord, Note, ChordQuality, Fingering } from '@/types';
import { generateFingeringVariations, calculateDifficulty } from '@/lib/utils/fingering-algorithm';

const NOTES: Note[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Helper function to get note by semitone offset
function getNoteByOffset(root: Note, offset: number): string {
  const rootIndex = NOTES.indexOf(root);
  const targetIndex = (rootIndex + offset) % 12;
  return NOTES[targetIndex];
}

// Helper function to create chord variations using the algorithm
function createChordVariations(notes: string[], baseName: string = 'Root Position') {
  const variations = [];
  
  // Generate fingering variations for both hands
  const rightHandVariations = generateFingeringVariations(notes, 'right');
  const leftHandVariations = generateFingeringVariations(notes, 'left');
  
  // Create variations by combining different fingering options
  for (let i = 0; i < Math.max(rightHandVariations.length, leftHandVariations.length); i++) {
    const rightFingering = rightHandVariations[i] || rightHandVariations[0];
    const leftFingering = leftHandVariations[i] || leftHandVariations[0];
    
    const difficulty = calculateDifficulty(rightFingering, notes);
    
    let variationName = baseName;
    if (i > 0) {
      variationName += ` (Alt ${i})`;
    }
    
    variations.push({
      name: variationName,
      fingerings: {
        right: rightFingering,
        left: leftFingering
      },
      difficulty
    });
  }
  
  return variations;
}

// Generate chords for all keys
function generateChordsForAllKeys(): Chord[] {
  const chords: Chord[] = [];

  NOTES.forEach(root => {
    // Major chord
    chords.push({
      root,
      quality: 'major',
      symbol: root === 'C#' || root === 'D#' || root === 'F#' || root === 'G#' || root === 'A#' ? 
        `${root}` : `${root}`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 7)  // perfect fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 3 },
              { note: getNoteByOffset(root, 7), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 3 },
              { note: getNoteByOffset(root, 7), finger: 1 }
            ]
          },
          difficulty: 'beginner'
        },
        {
          name: 'Root Position (Octave)',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: root, finger: 5, octave: 1 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 2 },
              { note: root, finger: 1, octave: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Minor chord
    chords.push({
      root,
      quality: 'minor',
      symbol: `${root}m`,
      notes: [
        root,
        getNoteByOffset(root, 3), // minor third
        getNoteByOffset(root, 7)  // perfect fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 3), finger: 3 },
              { note: getNoteByOffset(root, 7), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 3), finger: 3 },
              { note: getNoteByOffset(root, 7), finger: 1 }
            ]
          },
          difficulty: 'beginner'
        }
      ]
    });

    // Dominant 7th chord
    chords.push({
      root,
      quality: '7',
      symbol: `${root}7`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 7), // perfect fifth
        getNoteByOffset(root, 10) // minor seventh
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 10), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 10), finger: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Major 7th chord
    chords.push({
      root,
      quality: 'major7',
      symbol: `${root}maj7`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 7), // perfect fifth
        getNoteByOffset(root, 11) // major seventh
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 11), finger: 5, octave: 1 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 11), finger: 1, octave: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Minor 7th chord
    const minor7Notes = [
      root,
      getNoteByOffset(root, 3), // minor third
      getNoteByOffset(root, 7), // perfect fifth
      getNoteByOffset(root, 10) // minor seventh
    ];
    
    chords.push({
      root,
      quality: 'minor7',
      symbol: `${root}m7`,
      notes: minor7Notes,
      variations: createChordVariations(minor7Notes, 'Root Position')
    });

    // Sus2 chord
    chords.push({
      root,
      quality: 'sus2',
      symbol: `${root}sus2`,
      notes: [
        root,
        getNoteByOffset(root, 2), // major second
        getNoteByOffset(root, 7)  // perfect fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 2), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 2), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 1 }
            ]
          },
          difficulty: 'beginner'
        }
      ]
    });

    // Sus4 chord
    chords.push({
      root,
      quality: 'sus4',
      symbol: `${root}sus4`,
      notes: [
        root,
        getNoteByOffset(root, 5), // perfect fourth
        getNoteByOffset(root, 7)  // perfect fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 5), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 5), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 1 }
            ]
          },
          difficulty: 'beginner'
        }
      ]
    });

    // 6th chord
    chords.push({
      root,
      quality: '6',
      symbol: `${root}6`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 7), // perfect fifth
        getNoteByOffset(root, 9)  // major sixth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 9), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 9), finger: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Diminished chord
    chords.push({
      root,
      quality: 'diminished',
      symbol: `${root}°`,
      notes: [
        root,
        getNoteByOffset(root, 3), // minor third
        getNoteByOffset(root, 6)  // diminished fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 3), finger: 3 },
              { note: getNoteByOffset(root, 6), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 3), finger: 3 },
              { note: getNoteByOffset(root, 6), finger: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Add9 chord
    chords.push({
      root,
      quality: 'add9',
      symbol: `${root}add9`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 7), // perfect fifth
        getNoteByOffset(root, 14) // major ninth (2 octaves + 2 semitones)
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 2), finger: 5, octave: 1 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 3 },
              { note: getNoteByOffset(root, 7), finger: 2 },
              { note: getNoteByOffset(root, 2), finger: 1, octave: 1 }
            ]
          },
          difficulty: 'advanced'
        }
      ]
    });

    // Augmented chord
    chords.push({
      root,
      quality: 'augmented',
      symbol: `${root}+`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 8)  // augmented fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 4), finger: 3 },
              { note: getNoteByOffset(root, 8), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 4), finger: 3 },
              { note: getNoteByOffset(root, 8), finger: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Minor 6th chord
    chords.push({
      root,
      quality: 'minor6',
      symbol: `${root}m6`,
      notes: [
        root,
        getNoteByOffset(root, 3), // minor third
        getNoteByOffset(root, 7), // perfect fifth
        getNoteByOffset(root, 9)  // major sixth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 3), finger: 2 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 9), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 3), finger: 4 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: getNoteByOffset(root, 9), finger: 1 }
            ]
          },
          difficulty: 'intermediate'
        }
      ]
    });

    // Power chord (5th)
    chords.push({
      root,
      quality: '5',
      symbol: `${root}5`,
      notes: [
        root,
        getNoteByOffset(root, 7)  // perfect fifth
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 7), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 7), finger: 1 }
            ]
          },
          difficulty: 'beginner'
        },
        {
          name: 'With Octave',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: root, finger: 5, octave: 1 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 7), finger: 3 },
              { note: root, finger: 1, octave: 1 }
            ]
          },
          difficulty: 'beginner'
        }
      ]
    });

    // Diminished 7th chord
    chords.push({
      root,
      quality: 'diminished7',
      symbol: `${root}°7`,
      notes: [
        root,
        getNoteByOffset(root, 3), // minor third
        getNoteByOffset(root, 6), // diminished fifth
        getNoteByOffset(root, 9)  // diminished seventh
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 3), finger: 2 },
              { note: getNoteByOffset(root, 6), finger: 3 },
              { note: getNoteByOffset(root, 9), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 3), finger: 4 },
              { note: getNoteByOffset(root, 6), finger: 3 },
              { note: getNoteByOffset(root, 9), finger: 1 }
            ]
          },
          difficulty: 'advanced'
        }
      ]
    });

    // Half-diminished 7th chord
    chords.push({
      root,
      quality: 'half-diminished7',
      symbol: `${root}ø7`,
      notes: [
        root,
        getNoteByOffset(root, 3), // minor third
        getNoteByOffset(root, 6), // diminished fifth
        getNoteByOffset(root, 10) // minor seventh
      ],
      variations: [
        {
          name: 'Root Position',
          fingerings: {
            right: [
              { note: root, finger: 1 },
              { note: getNoteByOffset(root, 3), finger: 2 },
              { note: getNoteByOffset(root, 6), finger: 3 },
              { note: getNoteByOffset(root, 10), finger: 5 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 3), finger: 4 },
              { note: getNoteByOffset(root, 6), finger: 3 },
              { note: getNoteByOffset(root, 10), finger: 1 }
            ]
          },
          difficulty: 'advanced'
        }
      ]
    });

    // 9th chord
    chords.push({
      root,
      quality: '9',
      symbol: `${root}9`,
      notes: [
        root,
        getNoteByOffset(root, 4), // major third
        getNoteByOffset(root, 7), // perfect fifth
        getNoteByOffset(root, 10), // minor seventh
        getNoteByOffset(root, 14) // major ninth
      ],
      variations: [
        {
          name: 'Rootless (3-7-9-5)',
          description: 'Common jazz voicing without root',
          fingerings: {
            right: [
              { note: getNoteByOffset(root, 4), finger: 1 },
              { note: getNoteByOffset(root, 10), finger: 2 },
              { note: getNoteByOffset(root, 2), finger: 3, octave: 1 },
              { note: getNoteByOffset(root, 7), finger: 5, octave: 1 }
            ],
            left: [
              { note: root, finger: 5 },
              { note: getNoteByOffset(root, 10), finger: 2 },
              { note: getNoteByOffset(root, 4), finger: 1, octave: 1 }
            ]
          },
          difficulty: 'advanced'
        }
      ]
    });
  });

  return chords;
}

export const CHORD_DATABASE: Chord[] = generateChordsForAllKeys();

// Helper functions
export function getChordsByRoot(root: Note): Chord[] {
  return CHORD_DATABASE.filter(chord => chord.root === root);
}

export function getChordsByQuality(quality: ChordQuality): Chord[] {
  return CHORD_DATABASE.filter(chord => chord.quality === quality);
}

export function getChordByRootAndQuality(root: Note, quality: ChordQuality): Chord | undefined {
  return CHORD_DATABASE.find(chord => chord.root === root && chord.quality === quality);
}

export function searchChords(query: string): Chord[] {
  const lowercaseQuery = query.toLowerCase();
  return CHORD_DATABASE.filter(chord => 
    // Exclude add9 and dominant 9 chords for now
    chord.quality !== 'add9' && chord.quality !== '9' &&
    (chord.symbol.toLowerCase().includes(lowercaseQuery) ||
    chord.root.toLowerCase().includes(lowercaseQuery) ||
    chord.quality.toLowerCase().includes(lowercaseQuery))
  );
}