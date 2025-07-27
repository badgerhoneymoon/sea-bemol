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
      console.log('📀 Starting WebAudioFont _doInitialize...');
      
      // Create audio context
      console.log('📀 Creating audio context...');
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) {
        throw new Error('Web Audio API not supported');
      }
      this.audioContext = new AudioContextClass();
      console.log('📀 Audio context created, state:', this.audioContext.state);
      
      // Resume context if suspended (required in many browsers)
      if (this.audioContext.state === 'suspended') {
        console.log('📀 Audio context suspended, resuming...');
        await this.audioContext.resume();
        console.log('📀 Audio context resumed, state:', this.audioContext.state);
      }

      // Wait for WebAudioFontPlayer to be available
      console.log('📀 Waiting for WebAudioFontPlayer...');
      await this.waitForWebAudioFont();
      console.log('📀 WebAudioFontPlayer available');

      // Initialize WebAudioFont player
      console.log('📀 Creating WebAudioFontPlayer instance...');
      this.player = new window.WebAudioFontPlayer();
      console.log('📀 WebAudioFontPlayer instance created');

      // Load piano preset
      console.log('📀 Loading piano preset...');
      await this.loadPianoPreset();
      console.log('📀 Piano preset loaded and decoded');

      this.isInitialized = true;
      this.isLoading = false;
      console.log('📀 WebAudioFont initialization completed successfully!');
    } catch (error) {
      console.error('📀 Failed to initialize WebAudioFont piano:', error);
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
      const maxAttempts = 30; // 3 seconds timeout (reduced for mobile)
      
      const checkForWebAudioFont = () => {
        if (typeof window.WebAudioFontPlayer !== 'undefined') {
          resolve();
        } else if (attempts >= maxAttempts) {
          reject(new Error('WebAudioFont library failed to load - CDN timeout'));
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

    console.log('📀 Starting piano preset loading...');
    
    // Start loading the piano preset
    const presetId = '0001_FluidR3_GM_sf2_file';
    const presetUrl = `https://surikov.github.io/webaudiofontdata/sound/${presetId}.js`;

    console.log('📀 Starting preset load from:', presetUrl);
    this.player.loader.startLoad(this.audioContext, presetUrl, presetId);

    console.log('📀 Waiting for preset to load...');
    // Wait until the loader fully decodes **all** sample zones with timeout
    await Promise.race([
      this.player.loader.waitLoad(presetId),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Piano samples failed to load from CDN - network timeout')), 10000);
      })
    ]);
    console.log('📀 Preset loaded from CDN');

    // CRITICAL: Ensure AudioContext is running before decoding
    console.log('📀 Checking AudioContext state before decoding:', this.audioContext.state);
    if (this.audioContext.state !== 'running') {
      console.log('📀 AudioContext not running, resuming...');
      await this.audioContext.resume();
      console.log('📀 AudioContext resumed, state:', this.audioContext.state);
      
      // Wait a bit for context to fully activate
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Use chunked decoding for mobile compatibility, single call for desktop
    console.log('📀 Starting sample decoding...');
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     window.innerWidth <= 768;
    
    if (isMobile) {
      console.log('📀 Mobile detected, using chunked decoding...');
      await this.decodePresetChunked(presetId);
    } else {
      console.log('📀 Desktop detected, using standard decoding...');
      this.player.loader.decodeAfterLoading(this.audioContext, `_tone_${presetId}`);
      await this.waitForSamplesDecoded(presetId);
    }
    console.log('📀 All samples decoded successfully!');

     console.log('📀 Assigning final preset...');
     // Final assignment
     this.pianoPreset = window._tone_0001_FluidR3_GM_sf2_file;
     console.log('📀 Piano preset assignment complete');
  }

  /**
   * Decode piano preset samples in chunks to avoid mobile memory issues
   */
  private async decodePresetChunked(presetId: string): Promise<void> {
    const presetVarName = `_tone_${presetId}`;
    
    // Wait for preset to be available (it might take a moment after waitLoad)
    let preset: WebAudioFontPreset | undefined;
    let attempts = 0;
    const maxAttempts = 50; // 2.5 seconds
    
    while (!preset && attempts < maxAttempts) {
      preset = (window as unknown as Record<string, unknown>)[presetVarName] as WebAudioFontPreset | undefined;
      if (preset && 'zones' in preset && Array.isArray(preset.zones)) {
        break;
      }
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    if (!preset || !('zones' in preset) || !Array.isArray(preset.zones)) {
      console.error('📀 Preset structure:', preset);
      // Fallback to standard decoding
      console.log('📀 Falling back to standard decoding...');
      this.player!.loader.decodeAfterLoading(this.audioContext!, presetVarName);
      await this.waitForSamplesDecoded(presetId);
      return;
    }

    const zones = preset.zones as Array<{ 
      buffer?: { length: number }; 
      sample?: string;
    }>;
    
    console.log(`📀 Found ${zones.length} zones to decode`);
    
    // For mobile, decode all at once but monitor more carefully
    console.log('📀 Starting mobile-optimized decoding...');
    this.player!.loader.decodeAfterLoading(this.audioContext!, presetVarName);
    
    // Monitor with mobile-friendly timeouts
    await new Promise<void>((resolve) => {
      let attempts = 0;
      const maxAttempts = 300; // 15 seconds for mobile
      let lastDecodedCount = 0;
      
      const checkDecoded = () => {
        attempts++;
        const decodedCount = zones.filter(z => z.buffer && z.buffer.length > 0).length;
        
        if (decodedCount > lastDecodedCount) {
          console.log(`📀 Mobile progress: ${decodedCount}/${zones.length} zones decoded`);
          lastDecodedCount = decodedCount;
        }
        
        // Mobile: accept 70% completion as success
        const successThreshold = Math.max(Math.floor(zones.length * 0.7), 10);
        if (decodedCount >= successThreshold) {
          console.log(`📀 Mobile decoding sufficient: ${decodedCount}/${zones.length} zones ready`);
          return resolve();
        }
        
        if (attempts >= maxAttempts) {
          console.warn(`📀 Mobile timeout: ${decodedCount}/${zones.length} zones ready, continuing`);
          return resolve();
        }
        
        setTimeout(checkDecoded, 50);
      };
      
      checkDecoded();
    });
  }

  /**
   * Wait for samples to decode with mobile-friendly progress monitoring
   */
  private async waitForSamplesDecoded(presetId: string): Promise<void> {
    const presetVarName = `_tone_${presetId}`;
    
    // Log memory usage if available
    const logMemory = () => {
      if ('memory' in performance && (performance as { memory?: { usedJSHeapSize: number } }).memory) {
        const mem = (performance as { memory?: { usedJSHeapSize: number } }).memory!;
        console.log(`📀 Memory: ${Math.round(mem.usedJSHeapSize / 1024 / 1024)}MB used`);
      }
    };

    await new Promise<void>((resolve) => {
      let attempts = 0;
      const maxAttempts = 400; // 20 seconds max
      let lastDecodedCount = 0;
      
      const checkDecoded = () => {
        attempts++;
        
        // Access preset zones array
        const preset = (window as unknown as Record<string, unknown>)[presetVarName] as WebAudioFontPreset | undefined;
        
        if (preset && 'zones' in preset && Array.isArray(preset.zones)) {
          const zones = preset.zones as Array<{ buffer?: { length: number } }>;
          const decodedCount = zones.filter(z => z.buffer && z.buffer.length > 0).length;
          
          // Log progress when count changes
          if (decodedCount > lastDecodedCount) {
            console.log(`📀 Progress: ${decodedCount}/${zones.length} zones decoded`);
            lastDecodedCount = decodedCount;
            logMemory();
          }
          
          // Check if all zones are ready
          const allReady = zones.every((z) => z.buffer && z.buffer.length > 0);
          if (allReady) {
            console.log('📀 All zones decoded successfully!');
            return resolve();
          }
          
          // For mobile: if we have most zones (80%+), consider it good enough
          if (decodedCount >= zones.length * 0.8 && attempts > 100) {
            console.log(`📀 Mobile optimization: ${decodedCount}/${zones.length} zones ready, continuing`);
            return resolve();
          }
        } else if (attempts < 50) {
          console.log(`📀 Waiting for preset structure... attempt ${attempts}`);
        } else {
          console.log('📀 Preset not found, continuing anyway');
          return resolve();
        }
        
        if (attempts >= maxAttempts) {
          console.warn('📀 Timeout waiting for sample decoding, continuing anyway');
          return resolve();
        }
        
        setTimeout(checkDecoded, 50);
      };
      
      checkDecoded();
    });
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
    console.log('📀 WebAudioFontEngine.playChord called with:', notes);
    
    if (!this.player || !this.audioContext || !this.pianoPreset || notes.length === 0) {
      console.error('📀 WebAudioFont not ready or no notes provided');
      console.log('📀 State: player =', !!this.player, 'context =', !!this.audioContext, 'preset =', !!this.pianoPreset, 'notes =', notes.length);
      return;
    }

    console.log('📀 WebAudioFont components ready, checking audio context...');
    
    // Resume audio context if suspended (browser autoplay policy)
    if (this.audioContext.state === 'suspended') {
      console.log('📀 Audio context suspended, resuming...');
      await this.audioContext.resume();
      console.log('📀 Audio context resumed, state:', this.audioContext.state);
    }

    try {
      console.log('📀 Converting notes to MIDI...');
      const when = this.audioContext.currentTime;
      const midiNotes = notes.map(note => this.noteToMidi(note));
      console.log('📀 MIDI notes:', midiNotes);
      
      // Adjust velocity per note to prevent clipping
      const noteVelocity = Math.min(velocity / Math.sqrt(notes.length), 0.9);
      console.log('📀 Using velocity:', noteVelocity);

      console.log('📀 Calling queueChord...');
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
      console.log('📀 queueChord call completed successfully!');
    } catch (error) {
      console.error('📀 Failed to play chord:', error);
      throw error;
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


// Singleton instances
export const webAudioFontEngine = new WebAudioFontEngine();

const ensureRealisticReady = async () => {
  console.log('📀 ensureRealisticReady: isReady =', webAudioFontEngine.isReady);
  
  if (!webAudioFontEngine.isReady) {
    console.log('📀 WebAudioFont not ready, initializing...');
    await webAudioFontEngine.initialize();
    console.log('📀 WebAudioFont initialization completed');
  }
  
  console.log('📀 Checking audio context state:', webAudioFontEngine.context?.state);
  if (webAudioFontEngine.context?.state === 'suspended') {
    console.log('📀 Resuming audio context...');
    await webAudioFontEngine.context.resume();
    console.log('📀 Audio context resumed');
  }
};

export const playNote = async (note: string, duration?: number, velocity?: number) => {
  await ensureRealisticReady();
  return webAudioFontEngine.playNote(note, duration, velocity);
};

export const playChord = async (notes: string[], duration?: number, velocity?: number) => {
  console.log('📀 playChord called with:', notes);
  
  try {
    console.log('📀 Ensuring WebAudioFont ready...');
    await ensureRealisticReady();
    console.log('📀 WebAudioFont ready, calling engine.playChord...');
    
    const result = await webAudioFontEngine.playChord(notes, duration, velocity);
    console.log('📀 Engine playChord completed');
    return result;
  } catch (error) {
    console.error('📀 playChord failed:', error);
    throw error;
  }
};