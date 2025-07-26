'use client';

import { useState, useEffect } from 'react';
import { Chord, FavoriteChord } from '@/types';

const FAVORITES_KEY = 'piano-chord-favorites';
const RECENT_KEY = 'piano-chord-recent';

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteChord[]>([]);
  const [recentChords, setRecentChords] = useState<FavoriteChord[]>([]);

  // Load from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);
      const savedRecent = localStorage.getItem(RECENT_KEY);
      
      if (savedFavorites) {
        try {
          setFavorites(JSON.parse(savedFavorites));
        } catch (error) {
          console.error('Error parsing favorites from localStorage:', error);
        }
      }
      
      if (savedRecent) {
        try {
          setRecentChords(JSON.parse(savedRecent));
        } catch (error) {
          console.error('Error parsing recent chords from localStorage:', error);
        }
      }
    }
  }, []);

  // Save favorites to localStorage
  const saveFavorites = (newFavorites: FavoriteChord[]) => {
    setFavorites(newFavorites);
    if (typeof window !== 'undefined') {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    }
  };

  // Save recent chords to localStorage
  const saveRecentChords = (newRecent: FavoriteChord[]) => {
    setRecentChords(newRecent);
    if (typeof window !== 'undefined') {
      localStorage.setItem(RECENT_KEY, JSON.stringify(newRecent));
    }
  };

  const addToFavorites = (chord: Chord, variationIndex: number = 0) => {
    const favoriteId = `${chord.root}-${chord.quality}-${variationIndex}`;
    
    // Check if already in favorites
    if (favorites.some(fav => fav.id === favoriteId)) {
      return;
    }

    const newFavorite: FavoriteChord = {
      id: favoriteId,
      chord,
      variationIndex,
      dateAdded: new Date().toISOString()
    };

    const newFavorites = [...favorites, newFavorite];
    saveFavorites(newFavorites);
  };

  const removeFromFavorites = (favoriteId: string) => {
    const newFavorites = favorites.filter(fav => fav.id !== favoriteId);
    saveFavorites(newFavorites);
  };

  const addToRecent = (chord: Chord, variationIndex: number = 0) => {
    const recentId = `${chord.root}-${chord.quality}-${variationIndex}`;
    
    // Remove if already exists to avoid duplicates
    const filteredRecent = recentChords.filter(recent => recent.id !== recentId);
    
    const newRecent: FavoriteChord = {
      id: recentId,
      chord,
      variationIndex,
      dateAdded: new Date().toISOString()
    };

    // Add to beginning and limit to 10 items
    const newRecentChords = [newRecent, ...filteredRecent].slice(0, 10);
    saveRecentChords(newRecentChords);
  };

  const isFavorite = (chord: Chord, variationIndex: number = 0): boolean => {
    const favoriteId = `${chord.root}-${chord.quality}-${variationIndex}`;
    return favorites.some(fav => fav.id === favoriteId);
  };

  const clearFavorites = () => {
    saveFavorites([]);
  };

  const clearRecent = () => {
    saveRecentChords([]);
  };

  return {
    favorites,
    recentChords,
    addToFavorites,
    removeFromFavorites,
    addToRecent,
    isFavorite,
    clearFavorites,
    clearRecent
  };
}