'use client';

import { useState, useEffect } from 'react';
import { Note, ChordQuality } from '@/types';
import { getChordByRootAndQuality } from '@/data/chords';
import ChordSelector from '@/components/ChordSelector';
import Piano from '@/components/Piano';
import HandSelector from '@/components/HandSelector';
import FingerDiagram from '@/components/FingerDiagram';
import FavoritesPanel from '@/components/FavoritesPanel';
import SearchChords from '@/components/SearchChords';
import HandComparison from '@/components/HandComparison';
import { useFavorites } from '@/hooks/useFavorites';

export default function Home() {
  const [selectedRoot, setSelectedRoot] = useState<Note | null>('C');
  const [selectedQuality, setSelectedQuality] = useState<ChordQuality | null>('major');
  const [selectedHand, setSelectedHand] = useState<'left' | 'right'>('right');
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [activeTab, setActiveTab] = useState<'chords' | 'favorites' | 'search'>('chords');
  const [viewMode, setViewMode] = useState<'single' | 'comparison'>('single');

  // Favorites hook
  const { 
    favorites, 
    recentChords, 
    addToFavorites, 
    removeFromFavorites, 
    addToRecent, 
    isFavorite,
    clearFavorites,
    clearRecent
  } = useFavorites();

  // Get current chord data
  const currentChord = selectedRoot && selectedQuality 
    ? getChordByRootAndQuality(selectedRoot, selectedQuality)
    : null;

  const currentVariation = currentChord?.variations[selectedVariation];
  const currentFingerings = currentVariation?.fingerings[selectedHand] || [];

  // Add to recent chords when chord changes
  // Avoid including functions/objects that change every render to prevent infinite loops
  useEffect(() => {
    if (currentChord) {
      addToRecent(currentChord, selectedVariation);
    }
    // Only depend on primitive values that actually represent a new chord selection
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
          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-lg p-2">
            <div className="flex justify-center">
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
                    <span className="ml-1 sm:ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'chords' && (
            <ChordSelector
              selectedRoot={selectedRoot}
              selectedQuality={selectedQuality}
              onRootChange={setSelectedRoot}
              onQualityChange={setSelectedQuality}
            />
          )}

          {activeTab === 'search' && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
                Search Chords
              </h2>
              <SearchChords onChordSelect={handleChordSelect} />
            </div>
          )}

          {activeTab === 'favorites' && (
            <FavoritesPanel
              favorites={favorites}
              recentChords={recentChords}
              onChordSelect={handleChordSelect}
              onRemoveFavorite={removeFromFavorites}
            />
          )}

          {currentChord && (
            <>
              {/* Variation Selection */}
              {currentChord.variations.length > 1 && (
                <div className="bg-white rounded-xl shadow-lg p-4">
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
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                        }`}
                      >
                        {variation.name}
                        <span className={`ml-2 text-xs px-2 py-1 rounded ${
                          variation.difficulty === 'beginner' ? 'bg-green-200 text-green-800' :
                          variation.difficulty === 'intermediate' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-red-200 text-red-800'
                        }`}>
                          {variation.difficulty}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* View Mode Toggle */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-center text-gray-700">
                  View Mode
                </h3>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setViewMode('single')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      viewMode === 'single'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    Single Hand
                  </button>
                  <button
                    onClick={() => setViewMode('comparison')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      viewMode === 'comparison'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    Both Hands
                  </button>
                </div>
              </div>

              {/* Hand Selection (only show in single hand mode) */}
              {viewMode === 'single' && (
                <HandSelector
                  selectedHand={selectedHand}
                  onHandChange={setSelectedHand}
                />
              )}

              {/* Piano Display - Single Hand or Comparison Mode */}
              {viewMode === 'single' ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-700 flex-1 text-center">
                      {currentChord.symbol} - {currentVariation?.name} - {selectedHand === 'left' ? 'Left' : 'Right'} Hand
                    </h3>
                    <button
                      onClick={handleFavoriteToggle}
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        isFavorite(currentChord, selectedVariation)
                          ? 'text-yellow-500 bg-yellow-100 hover:bg-yellow-200'
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-100'
                      }`}
                      title={isFavorite(currentChord, selectedVariation) ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {isFavorite(currentChord, selectedVariation) ? '⭐' : '☆'}
                    </button>
                  </div>
                  
                  {/* Chord Notes */}
                  <div className="text-center mb-6">
                    <div className="bg-gray-800 text-white px-4 py-2 rounded inline-block font-mono text-lg">
                      {currentChord.notes.join(' - ')}
                    </div>
                  </div>

                  {/* Piano */}
                  <div className="flex justify-center mb-6 overflow-x-auto">
                    <Piano activeFingerings={currentFingerings} />
                  </div>

                  {/* Finger Diagram */}
                  <div className="flex justify-center">
                    <FingerDiagram 
                      hand={selectedHand} 
                      fingerings={currentFingerings}
                      className="max-w-md"
                    />
                  </div>

                  {/* Chord Information */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Chord Information</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Notes:</strong> {currentChord.notes.join(', ')}</p>
                      <p><strong>Difficulty:</strong> {currentVariation?.difficulty}</p>
                      {currentVariation?.description && (
                        <p><strong>Description:</strong> {currentVariation.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <HandComparison 
                    chord={currentChord} 
                    variationIndex={selectedVariation} 
                  />
                  <button
                    onClick={handleFavoriteToggle}
                    className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-200 ${
                      isFavorite(currentChord, selectedVariation)
                        ? 'text-yellow-500 bg-yellow-100 hover:bg-yellow-200'
                        : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-100'
                    }`}
                    title={isFavorite(currentChord, selectedVariation) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    {isFavorite(currentChord, selectedVariation) ? '⭐' : '☆'}
                  </button>
                </div>
              )}
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          Practice makes perfect! 🎵
        </footer>
      </div>
    </div>
  );
}