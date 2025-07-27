import { ChordQuality } from '@/types';

export interface ChordQualityDescription {
  name: string;
  description: string;
  soundCharacteristics: string;
  musicalContext: string;
}

export const chordQualityDescriptions: Record<ChordQuality, ChordQualityDescription> = {
  major: {
    name: 'Major',
    description: 'The foundation of Western music, built with a major third and perfect fifth.',
    soundCharacteristics: 'Bright, happy, stable, and resolved. Creates a sense of completeness and joy.',
    musicalContext: 'Used everywhere - pop, rock, classical, folk. Often represents happiness, triumph, or resolution.'
  },
  minor: {
    name: 'Minor', 
    description: 'Built with a minor third and perfect fifth, creating a darker mood.',
    soundCharacteristics: 'Sad, melancholic, introspective, and emotional. More complex emotional range than major.',
    musicalContext: 'Common in ballads, emotional pieces, and dramatic moments. Essential in blues, folk, and classical music.'
  },
  diminished: {
    name: 'Diminished',
    description: 'Contains a minor third and diminished fifth, creating strong dissonance.',
    soundCharacteristics: 'Tense, unstable, mysterious, and unsettling. Wants to resolve to a more stable chord.',
    musicalContext: 'Often used as passing chords or to create tension. Common in jazz, classical, and horror movie soundtracks.'
  },
  augmented: {
    name: 'Augmented',
    description: 'Features a major third and augmented fifth, creating an ethereal quality.',
    soundCharacteristics: 'Mysterious, dreamy, floating, and surreal. Creates tension that seeks resolution.',
    musicalContext: 'Used in impressionistic music, jazz, and when composers want an otherworldly or uncertain feeling.'
  },
  sus2: {
    name: 'Suspended 2nd',
    description: 'Replaces the third with the second, removing major/minor character.',
    soundCharacteristics: 'Open, floating, neutral, and unresolved. Neither happy nor sad.',
    musicalContext: 'Popular in folk, rock, and ambient music. Creates space and openness, often resolves to major.'
  },
  sus4: {
    name: 'Suspended 4th', 
    description: 'Replaces the third with the fourth, creating harmonic suspension.',
    soundCharacteristics: 'Yearning, anticipatory, unresolved, and hopeful. Strong pull toward resolution.',
    musicalContext: 'Extremely common in pop and rock. Creates anticipation before resolving to major or minor.'
  },
  '6': {
    name: '6th',
    description: 'Major triad with an added sixth, creating a sweet, jazzy sound.',
    soundCharacteristics: 'Sweet, jazzy, sophisticated, and pleasant. More colorful than plain major.',
    musicalContext: 'Very popular in jazz standards, swing, and sophisticated pop music. Often used as ending chords.'
  },
  minor6: {
    name: 'Minor 6th',
    description: 'Minor triad with an added sixth, blending melancholy with sophistication.',
    soundCharacteristics: 'Bittersweet, sophisticated, nostalgic, and complex. Emotional but elegant.',
    musicalContext: 'Common in jazz ballads, bossa nova, and romantic music. Less common than major 6th but very expressive.'
  },
  '7': {
    name: 'Dominant 7th',
    description: 'Major triad with a minor seventh, the cornerstone of blues and jazz.',
    soundCharacteristics: 'Bluesy, jazzy, sophisticated, and slightly tense. Has a strong pull to resolve.',
    musicalContext: 'Essential in blues, jazz, rock, and funk. Creates harmonic movement and is rarely used as a final chord.'
  },
  major7: {
    name: 'Major 7th',
    description: 'Major triad with a major seventh, creating a dreamy, sophisticated sound.',
    soundCharacteristics: 'Sophisticated, dreamy, floating, and stable. Jazzy but more resolved than dominant 7th.',
    musicalContext: 'Common in jazz, R&B, and sophisticated pop. Often used in ballads and creates a "pretty" harmonic color.'
  },
  minor7: {
    name: 'Minor 7th',
    description: 'Minor triad with a minor seventh, smooth and mellow.',
    soundCharacteristics: 'Smooth, mellow, sophisticated, and flowing. Less sad than plain minor, more complex.',
    musicalContext: 'Extremely common in jazz, R&B, soul, and neo-soul. Essential for smooth jazz and groove-based music.'
  },
  diminished7: {
    name: 'Diminished 7th',
    description: 'Fully diminished chord with diminished seventh, highly unstable.',
    soundCharacteristics: 'Very tense, mysterious, dramatic, and unstable. Creates strong need for resolution.',
    musicalContext: 'Common in classical music, jazz, and film scores. Often used for dramatic effect or as passing chords.'
  },
  'half-diminished7': {
    name: 'Half-Diminished 7th',
    description: 'Diminished triad with minor seventh, less tense than full diminished.',
    soundCharacteristics: 'Mysterious, somewhat tense, sophisticated, and complex. More stable than full diminished.',
    musicalContext: 'Very common in jazz as ii⁰7 chords in minor keys. Essential in jazz harmony and modern classical music.'
  },
  '9': {
    name: 'Dominant 9th',
    description: 'Dominant 7th with added ninth, expanding the harmonic color.',
    soundCharacteristics: 'Rich, complex, jazzy, and colorful. More sophisticated than plain dominant 7th.',
    musicalContext: 'Common in jazz, funk, and R&B. Adds harmonic richness while maintaining the dominant function.'
  },
  major9: {
    name: 'Major 9th',
    description: 'Major 7th chord with added ninth, very rich and colorful.',
    soundCharacteristics: 'Lush, sophisticated, floating, and beautiful. Very rich harmonic content.',
    musicalContext: 'Popular in jazz and R&B ballads. Creates a very sophisticated, pretty sound often used in endings.'
  },
  minor9: {
    name: 'Minor 9th', 
    description: 'Minor 7th chord with added ninth, sophisticated and smooth.',
    soundCharacteristics: 'Sophisticated, smooth, complex, and emotional. Rich minor harmony.',
    musicalContext: 'Common in jazz and R&B. Adds sophistication to minor harmony while maintaining emotional depth.'
  },
  add9: {
    name: 'Add 9',
    description: 'Major triad with added ninth (no seventh), bright and open.',
    soundCharacteristics: 'Bright, open, modern, and fresh. More colorful than major but simpler than major 9th.',
    musicalContext: 'Very popular in pop, rock, and folk music. Adds color without the complexity of 7th chords.'
  },
  '11': {
    name: 'Dominant 11th',
    description: 'Extended dominant chord including the 11th, very complex.',
    soundCharacteristics: 'Very complex, rich, jazzy, and sophisticated. Dense harmonic content.',
    musicalContext: 'Advanced jazz harmony. Used when maximum harmonic complexity and color is desired.'
  },
  minor11: {
    name: 'Minor 11th',
    description: 'Extended minor chord including the 11th, lush and complex.',
    soundCharacteristics: 'Lush, complex, sophisticated, and emotionally rich. Very dense minor harmony.',
    musicalContext: 'Advanced jazz and R&B. Creates very sophisticated minor harmony with maximum emotional depth.'
  },
  '13': {
    name: 'Dominant 13th',
    description: 'Extended dominant chord including the 13th, maximum complexity.',
    soundCharacteristics: 'Extremely rich, complex, jazzy, and sophisticated. Ultimate harmonic density.',
    musicalContext: 'Advanced jazz harmony. Used for maximum harmonic sophistication and color.'
  },
  minor13: {
    name: 'Minor 13th',
    description: 'Extended minor chord including the 13th, ultimate minor sophistication.',
    soundCharacteristics: 'Ultimate sophistication, lush, complex, and emotionally deep. Maximum minor harmony.',
    musicalContext: 'Very advanced jazz and R&B. Represents the peak of minor harmonic sophistication.'
  },
  '5': {
    name: 'Power Chord (5th)',
    description: 'Just root and fifth, no third - neither major nor minor.',
    soundCharacteristics: 'Powerful, neutral, strong, and decisive. Raw and unambiguous.',
    musicalContext: 'Essential in rock, metal, and punk. Provides power without harmonic complexity or emotional ambiguity.'
  }
};

export function getChordQualityDescription(quality: ChordQuality): ChordQualityDescription {
  return chordQualityDescriptions[quality];
}

export function getAllChordQualities(): ChordQuality[] {
  return Object.keys(chordQualityDescriptions) as ChordQuality[];
}