'use client';

import { FavoriteChord, Note, ChordQuality } from '@/types';

interface FavoritesPanelProps {
  favorites: FavoriteChord[];
  recentChords: FavoriteChord[];
  onChordSelect: (root: Note, quality: ChordQuality, variationIndex?: number) => void;
  onRemoveFavorite: (favoriteId: string) => void;
  onClearRecent?: () => void;
  onClearFavorites?: () => void;
  className?: string;
}

export default function FavoritesPanel({ 
  favorites, 
  recentChords, 
  onChordSelect, 
  onRemoveFavorite,
  onClearRecent,
  onClearFavorites,
  className = '' 
}: FavoritesPanelProps) {
  const handleChordClick = (favoriteChord: FavoriteChord) => {
    onChordSelect(favoriteChord.chord.root, favoriteChord.chord.quality, favoriteChord.variationIndex);
  };

  const formatChordSymbol = (chord: FavoriteChord) => {
    return chord.chord.symbol;
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {/* Recent Chords */}
      {recentChords.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
            <span className="mr-2">🕒</span>
            Recent Chords
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {recentChords.slice(0, 10).map((recent) => (
              <button
                key={recent.id}
                onClick={() => handleChordClick(recent)}
                className="p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-center font-medium text-sm sm:text-base"
              >
                {formatChordSymbol(recent)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Favorites */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
          <span className="mr-2">⭐</span>
          Favorites
          <span className="ml-2 bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full">
            {favorites.length}
          </span>
        </h3>
        
        {favorites.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">🎵</div>
            <p>No favorite chords yet</p>
            <p className="text-sm">Click the star icon to add chords to your favorites</p>
          </div>
        ) : (
          <div className="space-y-2">
            {favorites.map((favorite) => (
              <div
                key={favorite.id}
                className="flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors duration-200"
              >
                <button
                  onClick={() => handleChordClick(favorite)}
                  className="flex-1 text-left font-medium text-gray-800"
                >
                  <span className="text-lg">{formatChordSymbol(favorite)}</span>
                  {favorite.chord.variations[favorite.variationIndex] && (
                    <span className="ml-2 text-sm text-gray-600">
                      ({favorite.chord.variations[favorite.variationIndex].name})
                    </span>
                  )}
                </button>
                <button
                  onClick={() => onRemoveFavorite(favorite.id)}
                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-lg transition-colors duration-200"
                  title="Remove from favorites"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      {(favorites.length > 0 || recentChords.length > 0) && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex gap-2 justify-center">
            {favorites.length > 0 && onClearFavorites && (
              <button
                onClick={onClearFavorites}
                className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1 rounded"
              >
                Clear Favorites
              </button>
            )}
            {recentChords.length > 0 && onClearRecent && (
              <button
                onClick={onClearRecent}
                className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1 rounded"
              >
                Clear Recent
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}