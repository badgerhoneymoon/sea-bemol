/**
 * Audio utility functions for piano chord application
 * Provides Web Audio API-based synthesis and WebAudioFont sample-based playback
 */

// WebAudioFont type declarations
interface WebAudioFontPlayer {
  loader: {
    startLoad: (context: AudioContext, url: string, preset: string) => void;
    waitLoad: (preset: string) => Promise<void>;
    decodeAfterLoading: (context: AudioContext, presetVarName: string) => void;
  };
  queueWaveTable: (
    context: AudioContext, 
    destination: AudioDestinationNode, 
    preset: WebAudioFontPreset, 
    when: number, 
    pitch: number, 
    duration: number, 
    volume: number
  ) => void;
  queueChord: (
    context: AudioContext,
    destination: AudioDestinationNode,
    preset: WebAudioFontPreset,
    when: number,
    pitches: number[],
    duration: number,
    volume: number
  ) => void;
}

interface WebAudioFontPreset {
  // WebAudioFont preset object structure
  [key: string]: unknown;
}

declare global {
  interface Window {
    WebAudioFontPlayer: new () => WebAudioFontPlayer;
    _tone_0001_FluidR3_GM_sf2_file: WebAudioFontPreset;
  }
}

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

/**
 * WebAudioFont-based audio engine using realistic piano samples
 * Provides high-quality piano sounds with built-in reverb and ADSR
 */
export class WebAudioFontEngine {
  private audioContext: AudioContext | null = null;
  private player: WebAudioFontPlayer | null = null;
  private pianoPreset: WebAudioFontPreset | null = null;
  private isInitialized = false;
  private isLoading = false;
  private loadingPromise: Promise<void> | null = null;

  /**
   * Initialize WebAudioFont and load piano samples
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    if (this.loadingPromise) return this.loadingPromise;

    this.isLoading = true;
    this.loadingPromise = this._doInitialize();
    return this.loadingPromise;
  }

  private async _doInitialize(): Promise<void> {
    try {
      // Create audio context
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) {
        throw new Error('Web Audio API not supported');
      }
      this.audioContext = new AudioContextClass();
      
      // Resume context if suspended (required in many browsers)
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      // Wait for WebAudioFontPlayer to be available
      await this.waitForWebAudioFont();

      // Initialize WebAudioFont player
      this.player = new window.WebAudioFontPlayer();

      // Load piano preset
      await this.loadPianoPreset();

      this.isInitialized = true;
      this.isLoading = false;
      // Piano preset fully decoded and ready.
    } catch (error) {
      console.error('Failed to initialize WebAudioFont piano:', error);
      this.isLoading = false;
      throw error;
    }
  }

  /**
   * Wait for WebAudioFont library to be loaded
   */
  private async waitForWebAudioFont(): Promise<void> {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds timeout
      
      const checkForWebAudioFont = () => {
        if (typeof window.WebAudioFontPlayer !== 'undefined') {
          resolve();
        } else if (attempts >= maxAttempts) {
          reject(new Error('WebAudioFont failed to load'));
        } else {
          attempts++;
          setTimeout(checkForWebAudioFont, 100);
        }
      };
      
      checkForWebAudioFont();
    });
  }

  /**
   * Load piano preset from CDN
   */
  private async loadPianoPreset(): Promise<void> {
    if (!this.player || !this.audioContext) {
      throw new Error('Player or audio context not initialized');
    }

    // Start loading the piano preset
    const presetId = '0001_FluidR3_GM_sf2_file';
    const presetUrl = `https://surikov.github.io/webaudiofontdata/sound/${presetId}.js`;

    this.player.loader.startLoad(this.audioContext, presetUrl, presetId);

    // Wait until the loader fully decodes **all** sample zones. This eliminates the
    // first-time "silent" note problem (each zone no longer decodes lazily on
    // first use).
    await this.player.loader.waitLoad(presetId);
 
     // Decode all samples eagerly
     this.player.loader.decodeAfterLoading(this.audioContext, `_tone_${presetId}`);

     // Poll until all buffer zones are ready (no empty buffers)
     await new Promise<void>((resolve) => {
       const checkDecoded = () => {
         // Access preset zones array length could vary
         const preset = (window as unknown as Record<string, unknown>)[`_tone_${presetId}`] as WebAudioFontPreset | undefined;
         if (preset && 'zones' in preset && Array.isArray(preset.zones)) {
           const zones = preset.zones as Array<{ buffer?: { length: number } }>;
           const allReady = zones.every((z) => z.buffer && z.buffer.length > 0);
           if (allReady) return resolve();
         }
         setTimeout(checkDecoded, 50);
       };
       checkDecoded();
     });

     // Final assignment
     this.pianoPreset = window._tone_0001_FluidR3_GM_sf2_file;
  }

  /**
   * Convert note name to MIDI number
   */
  private noteToMidi(note: string): number {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    // Handle notes with or without octave
    const match = note.match(/^([A-G]#?)(\d+)?$/);
    if (!match) {
      console.warn(`Invalid note format: ${note}`);
      return 60; // Default to middle C
    }

    const noteName = match[1];
    const octave = match[2] ? parseInt(match[2], 10) : 4; // Default to octave 4
    
    const noteIndex = notes.indexOf(noteName);
    if (noteIndex === -1) {
      console.warn(`Unknown note: ${noteName}`);
      return 60; // Default to middle C
    }

    return noteIndex + (octave + 1) * 12;
  }

  /**
   * Play a single note with realistic piano sound
   */
  async playNote(note: string, duration: number = 0.5, velocity: number = 0.8): Promise<void> {
    if (!this.player || !this.audioContext || !this.pianoPreset) {
      console.error('WebAudioFont not ready - please ensure initialization is complete');
      return;
    }

    // Resume audio context if suspended (browser autoplay policy)
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    try {
      const midiNote = this.noteToMidi(note);
      const when = this.audioContext.currentTime;
      const pitch = midiNote;
      const vol = Math.min(Math.max(velocity, 0.1), 1.0);

      // Play the note
      this.player.queueWaveTable(
        this.audioContext,
        this.audioContext.destination,
        this.pianoPreset,
        when,
        pitch,
        duration,
        vol
      );
    } catch (error) {
      console.error('Failed to play note:', error);
    }
  }

  /**
   * Play multiple notes simultaneously (chord) with realistic piano sound
   */
  async playChord(notes: string[], duration: number = 1.0, velocity: number = 0.7): Promise<void> {
    if (!this.player || !this.audioContext || !this.pianoPreset || notes.length === 0) {
      console.error('WebAudioFont not ready or no notes provided');
      return;
    }

    // Resume audio context if suspended (browser autoplay policy)
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    try {
      const when = this.audioContext.currentTime;
      const midiNotes = notes.map(note => this.noteToMidi(note));
      
      // Adjust velocity per note to prevent clipping
      const noteVelocity = Math.min(velocity / Math.sqrt(notes.length), 0.9);

      // Play all notes simultaneously using queueChord
      this.player.queueChord(
        this.audioContext,
        this.audioContext.destination,
        this.pianoPreset,
        when,
        midiNotes,
        duration,
        noteVelocity
      );
    } catch (error) {
      console.error('Failed to play chord:', error);
    }
  }

  /**
   * Check if the engine is ready to play
   */
  get isReady(): boolean {
    return this.isInitialized && !this.isLoading;
  }

  /**
   * Check if the engine is currently loading
   */
  get loading(): boolean {
    return this.isLoading;
  }

  /**
   * Get audio context for external access
   */
  get context(): AudioContext | null {
    return this.audioContext;
  }

  /**
   * Clean up WebAudioFont resources
   */
  dispose(): void {
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.player = null;
    this.pianoPreset = null;
    this.isInitialized = false;
    this.isLoading = false;
    this.loadingPromise = null;
  }
}

/**
 * Audio mode type for user preference
 */
export type AudioMode = 'realistic' | 'synthetic';

/**
 * Audio preferences manager
 */
export class AudioPreferences {
  private static readonly STORAGE_KEY = 'piano-audio-mode';
  private static readonly DEFAULT_MODE: AudioMode = 'realistic';

  /**
   * Get current audio mode from localStorage
   */
  static getMode(): AudioMode {
    if (typeof window === 'undefined') return this.DEFAULT_MODE;
    
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === 'realistic' || stored === 'synthetic') {
      return stored;
    }
    return this.DEFAULT_MODE;
  }

  /**
   * Set audio mode and save to localStorage
   */
  static setMode(mode: AudioMode): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, mode);
  }
}

/**
 * Unified audio manager that handles both engines
 */
export class UnifiedAudioManager {
  private synthEngine: AudioEngine;
  private webAudioFontEngine: WebAudioFontEngine;
  private currentMode: AudioMode;

  constructor() {
    this.synthEngine = new AudioEngine();
    this.webAudioFontEngine = new WebAudioFontEngine();
    this.currentMode = AudioPreferences.getMode();

    // Ensure WebAudioFont initialization happens inside a user gesture to satisfy autoplay policy.
    if (typeof window !== 'undefined') {
      const handleFirstPointer = async () => {
        window.removeEventListener('pointerdown', handleFirstPointer);
        try {
          if (!this.webAudioFontEngine.isReady && !this.webAudioFontEngine.loading) {
            await this.webAudioFontEngine.initialize();
          }
        } catch (err) {
          console.error('Failed to initialize WebAudioFontEngine on first user interaction:', err);
        }
      };

      // Attach only once
      window.addEventListener('pointerdown', handleFirstPointer, { once: true });
    }
  }

  /**
   * Initialize audio engines - call this after page load
   */
  async initializeEngines(): Promise<void> {
    try {
      if (this.currentMode === 'realistic') {
        // Defer WebAudioFont initialization until actual user gesture.
      } else {
        await this.synthEngine.initialize();
      }
      // Audio engines pre-initialized (synthetic only)
    } catch (error) {
      console.error('Failed to initialize audio engines:', error);
    }
  }

  /**
   * Set audio mode and initialize appropriate engine
   */
  async setMode(mode: AudioMode): Promise<void> {
    this.currentMode = mode;
    AudioPreferences.setMode(mode);

    if (mode === 'realistic') {
      await this.webAudioFontEngine.initialize();
    } else {
      await this.synthEngine.initialize();
    }
  }

  /**
   * Get current audio mode
   */
  getMode(): AudioMode {
    return this.currentMode;
  }

  /**
   * Play a note using the current audio engine
   */
  async playNote(note: string, duration?: number, velocity?: number): Promise<void> {
    if (this.currentMode === 'realistic') {
      // Lazily initialize WebAudioFont if it is not ready yet (first user interaction)
      if (!this.webAudioFontEngine.isReady) {
        try {
          await this.webAudioFontEngine.initialize();
        } catch (err) {
          console.error('Failed to initialize WebAudioFontEngine on first playNote:', err);
          return;
        }
      }
      // Resume audio context if suspended (browser autoplay policy)
      if (this.webAudioFontEngine.context?.state === 'suspended') {
        await this.webAudioFontEngine.context.resume();
      }
      await this.webAudioFontEngine.playNote(note, duration, velocity);
    } else {
      // Convert velocity to volume for synthetic engine
      const volume = velocity ? velocity * 0.5 : undefined;
      await this.synthEngine.playNote(note, duration, volume);
    }
  }

  /**
   * Play a chord using the current audio engine
   */
  async playChord(notes: string[], duration?: number, velocity?: number): Promise<void> {
    if (this.currentMode === 'realistic') {
      // Ensure the realistic engine is ready before attempting to play
      if (!this.webAudioFontEngine.isReady) {
        try {
          await this.webAudioFontEngine.initialize();
        } catch (err) {
          console.error('Failed to initialize WebAudioFontEngine on first playChord:', err);
          return;
        }
      }
      // Resume audio context if suspended (browser autoplay policy)
      if (this.webAudioFontEngine.context?.state === 'suspended') {
        await this.webAudioFontEngine.context.resume();
      }
      await this.webAudioFontEngine.playChord(notes, duration, velocity);
    } else {
      // Convert velocity to volume for synthetic engine
      const volume = velocity ? velocity * 0.3 : undefined;
      await this.synthEngine.playChord(notes, duration, volume);
    }
  }

  /**
   * Check if current engine is ready
   */
  get isReady(): boolean {
    if (this.currentMode === 'realistic') {
      return this.webAudioFontEngine.isReady;
    }
    return true; // Synthetic engine is always ready after first use
  }

  /**
   * Check if current engine is loading
   */
  get isLoading(): boolean {
    if (this.currentMode === 'realistic') {
      return this.webAudioFontEngine.loading;
    }
    return false;
  }

  /**
   * Clean up all resources
   */
  dispose(): void {
    this.synthEngine.dispose();
    this.webAudioFontEngine.dispose();
  }
}

// Singleton instances
export const audioEngine = new AudioEngine();
export const webAudioFontEngine = new WebAudioFontEngine();
export const unifiedAudioManager = new UnifiedAudioManager();

/**
 * Convenience function to play a note using unified audio manager
 */
export const playNote = (note: string, duration?: number, velocity?: number) => {
  return unifiedAudioManager.playNote(note, duration, velocity);
};

/**
 * Convenience function to play a chord using unified audio manager
 */
export const playChord = (notes: string[], duration?: number, velocity?: number) => {
  return unifiedAudioManager.playChord(notes, duration, velocity);
};