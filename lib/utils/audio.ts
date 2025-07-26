/**
 * Audio utility functions for piano chord application
 * Provides Web Audio API-based note and chord playback functionality
 */

export class AudioEngine {
  private audioContext: AudioContext | null = null;
  private isInitialized = false;

  /**
   * Initialize the audio context (required for user interaction)
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Type assertion for WebKit audio context fallback
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) {
        throw new Error('Web Audio API not supported');
      }
      this.audioContext = new AudioContextClass();
      
      // Resume context if suspended (required in many browsers)
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }
      
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize audio context:', error);
    }
  }

  /**
   * Convert note name to frequency using equal temperament tuning
   * A4 = 440Hz as reference
   * Handles notes with or without octave numbers (defaults to octave 4)
   */
  private noteToFrequency(note: string): number {
    const noteMap: { [key: string]: number } = {
      'C': -9, 'C#': -8, 'D': -7, 'D#': -6, 'E': -5, 'F': -4,
      'F#': -3, 'G': -2, 'G#': -1, 'A': 0, 'A#': 1, 'B': 2
    };

    // Extract note name and octave (with or without octave number)
    const matchWithOctave = note.match(/^([A-G]#?)(\d+)$/);
    const matchWithoutOctave = note.match(/^([A-G]#?)$/);
    
    let noteName: string;
    let octave: number;
    
    if (matchWithOctave) {
      // Note has octave number (e.g., "C4", "F#5")
      [, noteName, ] = matchWithOctave;
      octave = parseInt(matchWithOctave[2], 10);
    } else if (matchWithoutOctave) {
      // Note without octave number (e.g., "C", "F#") - default to octave 4
      [, noteName] = matchWithoutOctave;
      octave = 4;
    } else {
      console.warn(`Invalid note format: ${note}`);
      return 440; // Default to A4
    }
    
    // Calculate semitone offset from A4
    const noteOffset = noteMap[noteName];
    if (noteOffset === undefined) {
      console.warn(`Unknown note: ${noteName}`);
      return 440;
    }

    const octaveOffset = (octave - 4) * 12;
    const semitoneOffset = noteOffset + octaveOffset;
    
    // Calculate frequency using equal temperament formula
    return 440 * Math.pow(2, semitoneOffset / 12);
  }

  /**
   * Play a single note with specified duration
   */
  async playNote(note: string, duration: number = 0.5, volume: number = 0.3): Promise<void> {
    if (!this.audioContext) {
      await this.initialize();
    }

    if (!this.audioContext) {
      console.error('Audio context not available');
      return;
    }

    const frequency = this.noteToFrequency(note);
    const now = this.audioContext.currentTime;

    // Create oscillator for the note
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Configure oscillator
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, now);

    // Configure envelope (attack, decay, sustain, release)
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.01); // Attack
    gainNode.gain.exponentialRampToValueAtTime(volume * 0.7, now + 0.1); // Decay
    gainNode.gain.setValueAtTime(volume * 0.7, now + duration - 0.1); // Sustain
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration); // Release

    // Start and stop oscillator
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  /**
   * Play multiple notes simultaneously (chord)
   */
  async playChord(notes: string[], duration: number = 1.0, volume: number = 0.2): Promise<void> {
    if (!this.audioContext) {
      await this.initialize();
    }

    if (!this.audioContext || notes.length === 0) {
      console.error('Audio context not available or no notes provided');
      return;
    }

    // Adjust volume per note to prevent clipping
    const noteVolume = Math.min(volume / Math.sqrt(notes.length), 0.3);

    // Play all notes simultaneously
    const promises = notes.map(note => this.playNote(note, duration, noteVolume));
    await Promise.all(promises);
  }

  /**
   * Clean up audio resources
   */
  dispose(): void {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
      this.isInitialized = false;
    }
  }
}

// Singleton instance
export const audioEngine = new AudioEngine();

/**
 * Convenience function to play a note
 */
export const playNote = (note: string, duration?: number, volume?: number) => {
  return audioEngine.playNote(note, duration, volume);
};

/**
 * Convenience function to play a chord
 */
export const playChord = (notes: string[], duration?: number, volume?: number) => {
  return audioEngine.playChord(notes, duration, volume);
};