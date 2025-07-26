'use client';

import { useState, useEffect } from 'react';
import { Note, ChordQuality } from '@/types';
import { getChordByRootAndQuality } from '@/data/chords';
import ChordSelector from '@/components/ChordSelector';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchChords from '@/components/SearchChords';
import HandComparison from '@/components/HandComparison';
import { useFavorites } from '@/hooks/useFavorites';

export default function Home() {
  const [selectedRoot, setSelectedRoot] = useState<Note | null>('C');
  const [selectedQuality, setSelectedQuality] = useState<ChordQuality | null>('major');
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [activeTab, setActiveTab] = useState<'chords' | 'favorites' | 'search'>('chords');

  // Favorites hook
  const { 
    favorites, 
    recentChords, 
    addToFavorites, 
    removeFromFavorites, 
    addToRecent, 
    isFavorite,
    clearRecent,
    clearFavorites
  } = useFavorites();

  // Get current chord data
  const currentChord = selectedRoot && selectedQuality 
    ? getChordByRootAndQuality(selectedRoot, selectedQuality)
    : null;


  // Add to recent chords when chord changes
  // Avoid including functions/objects that change every render to prevent infinite loops
  useEffect(() => {
    if (currentChord) {
      addToRecent(currentChord, selectedVariation);
    }
    // Only depend on primitive values that actually represent a new chord selection
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoot, selectedQuality, selectedVariation]);

  const handleChordSelect = (root: Note, quality: ChordQuality, variationIndex: number = 0) => {
    setSelectedRoot(root);
    setSelectedQuality(quality);
    setSelectedVariation(variationIndex);
    setActiveTab('chords');
  };

  const handleFavoriteToggle = () => {
    if (currentChord) {
      if (isFavorite(currentChord, selectedVariation)) {
        const favoriteId = `${currentChord.root}-${currentChord.quality}-${selectedVariation}`;
        removeFromFavorites(favoriteId);
      } else {
        addToFavorites(currentChord, selectedVariation);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <header className="text-center py-4 md:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-2">
            🎹 Piano Chord Fingerings
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Interactive guide for piano chord fingerings. Learn proper hand positions for all chord types.
          </p>
        </header>

        <main className="space-y-6">
          {/* Main Content Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 p-1 rounded-lg flex flex-wrap sm:flex-nowrap">
                <button
                  onClick={() => setActiveTab('chords')}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'chords' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="sm:hidden">🎹</span>
                  <span className="hidden sm:inline">🎹 Chords</span>
                </button>
                <button
                  onClick={() => setActiveTab('search')}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'search' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="sm:hidden">🔍</span>
                  <span className="hidden sm:inline">🔍 Search</span>
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`px-3 py-2 sm:px-6 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base ${
                    activeTab === 'favorites' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="sm:hidden">⭐</span>
                  <span className="hidden sm:inline">⭐ Favorites</span>
                  {favorites.length > 0 && (
                    <span className="ml-1 sm:ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
            {/* Favorite Button */}
            {currentChord && (
              <button
                onClick={handleFavoriteToggle}
                className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 ${
                  isFavorite(currentChord, selectedVariation)
                    ? 'text-blue-600 bg-blue-100 hover:bg-blue-200'
                    : 'text-gray-400 hover:text-blue-600 hover:bg-blue-100'
                }`}
                title={isFavorite(currentChord, selectedVariation) ? 'Remove from favorites' : 'Add to favorites'}
              >
                {isFavorite(currentChord, selectedVariation) ? '⭐' : '☆'}
              </button>
            )}

            {/* Tab Content */}
            {activeTab === 'chords' && (
              <>
                <ChordSelector
                  selectedRoot={selectedRoot}
                  selectedQuality={selectedQuality}
                  onRootChange={setSelectedRoot}
                  onQualityChange={setSelectedQuality}
                  className="border-0 shadow-none p-0"
                />

                {currentChord && (
                  <>
                    {/* Variation Selection */}
                    {currentChord.variations.length > 1 && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold mb-3 text-center text-gray-700">
                          Fingering Variations
                        </h3>
                        <div className="flex gap-2 justify-center flex-wrap">
                          {currentChord.variations.map((variation, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedVariation(idx)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                selectedVariation === idx
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                              }`}
                            >
                              {variation.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Piano Display - Both Hands */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <HandComparison 
                        chord={currentChord} 
                        variationIndex={selectedVariation}
                        className="border-0 shadow-none p-0"
                      />
                    </div>
                  </>
                )}
              </>
            )}

            {activeTab === 'search' && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
                  Search Chords
                </h2>
                <SearchChords onChordSelect={handleChordSelect} />
              </>
            )}

            {activeTab === 'favorites' && (
              <FavoritesPanel
                favorites={favorites}
                recentChords={recentChords}
                onChordSelect={handleChordSelect}
                onRemoveFavorite={removeFromFavorites}
                onClearRecent={clearRecent}
                onClearFavorites={clearFavorites}
                className="border-0 shadow-none p-0"
              />
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          Practice makes perfect! That&apos;s it! 🎵
        </footer>
      </div>
    </div>
  );
}