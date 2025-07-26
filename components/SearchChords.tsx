'use client';

import { useState, useMemo } from 'react';
import { searchChords } from '@/data/chords';
import { Note, ChordQuality, Chord } from '@/types';

interface SearchChordsProps {
  onChordSelect: (root: Note, quality: ChordQuality) => void;
  className?: string;
}

export default function SearchChords({ onChordSelect, className = '' }: SearchChordsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchChords(searchQuery).slice(0, 8); // Limit to 8 results
  }, [searchQuery]);

  const handleChordClick = (chord: Chord) => {
    onChordSelect(chord.root, chord.quality);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsOpen(value.trim().length > 0);
  };

  const handleInputFocus = () => {
    if (searchQuery.trim().length > 0) {
      setIsOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay closing to allow for clicks on results
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Search chords... (e.g., Cmaj7, F#m, G7)"
          className="w-full px-4 py-3 pl-10 pr-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-64 overflow-y-auto">
          {searchResults.map((chord, index) => (
            <button
              key={`${chord.root}-${chord.quality}-${index}`}
              onClick={() => handleChordClick(chord)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-lg">{chord.symbol}</span>
                  <span className="ml-3 text-sm text-gray-600">
                    {chord.notes.join(' - ')}
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {chord.variations.length} variation{chord.variations.length > 1 ? 's' : ''}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery.trim() && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-center text-gray-500">
          <div className="text-2xl mb-2">🎼</div>
          <p>No chords found for &quot;{searchQuery}&quot;</p>
          <p className="text-sm mt-1">Try searching for chord symbols like &quot;Cmaj7&quot; or &quot;F#m&quot;</p>
        </div>
      )}
    </div>
  );
}