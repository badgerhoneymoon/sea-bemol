'use client';

import { useState, useEffect } from 'react';
import { unifiedAudioManager, AudioMode } from '@/lib/utils/audio';

interface AudioToggleProps {
  className?: string;
}

export default function AudioToggle({ className = '' }: AudioToggleProps) {
  const [audioMode, setAudioMode] = useState<AudioMode>('realistic');
  const [isAudioLoading, setIsAudioLoading] = useState(false);

  // Initialize audio mode on component mount
  useEffect(() => {
    const currentMode = unifiedAudioManager.getMode();
    setAudioMode(currentMode);
  }, []);

  // Handle audio mode toggle
  const handleAudioModeToggle = async () => {
    const newMode: AudioMode = audioMode === 'realistic' ? 'synthetic' : 'realistic';
    setIsAudioLoading(true);
    
    try {
      await unifiedAudioManager.setMode(newMode);
      setAudioMode(newMode);
    } catch (error) {
      console.error('Failed to switch audio mode:', error);
    } finally {
      setIsAudioLoading(false);
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-gray-600 hidden sm:inline">🎵</span>
      <button
        onClick={handleAudioModeToggle}
        disabled={isAudioLoading}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${audioMode === 'realistic' ? 'bg-blue-600' : 'bg-gray-400'}
          ${isAudioLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        title={audioMode === 'realistic' ? 'Realistic piano audio (ON)' : 'Audio OFF'}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${audioMode === 'realistic' ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
      {isAudioLoading && (
        <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      )}
    </div>
  );
}