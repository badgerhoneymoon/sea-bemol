'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Note, ChordQuality, Chord } from '@/types';
import { getChordByRootAndQuality, CHORD_DATABASE } from '@/data/chords';
import { getChordQualityDescription } from '@/lib/utils/chord-descriptions';

const NOTES: Note[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Get available chord qualities from actual chord data
const getAvailableChordQualities = (): ChordQuality[] => {
  const uniqueQualities = [...new Set(CHORD_DATABASE.map((chord: Chord) => chord.quality))];
  return uniqueQualities as ChordQuality[];
};

interface QuizState {
  currentChord: Chord | null;
  selectedAnswer: ChordQuality | null;
  correctAnswer: ChordQuality | null;
  answerOptions: ChordQuality[];
  showResult: boolean;
  score: number;
  currentQuestionNumber: number;
  totalQuestions: number;
  quizCompleted: boolean;
  isLoading: boolean;
}

const TOTAL_QUESTIONS = 10;

export default function Quiz() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState>({
    currentChord: null,
    selectedAnswer: null,
    correctAnswer: null,
    answerOptions: [],
    showResult: false,
    score: 0,
    currentQuestionNumber: 1,
    totalQuestions: 0,
    quizCompleted: false,
    isLoading: false
  });

  // Generate a random chord
  const generateRandomChord = (): Chord => {
    const randomRoot = NOTES[Math.floor(Math.random() * NOTES.length)];
    const qualities = getAvailableChordQualities();
    const randomQuality = qualities[Math.floor(Math.random() * qualities.length)];
    const chord = getChordByRootAndQuality(randomRoot, randomQuality);
    if (!chord) {
      throw new Error(`Failed to generate chord for ${randomRoot} ${randomQuality}`);
    }
    return chord;
  };

  // Generate 4 answer options including the correct answer
  const generateAnswerOptions = (correctAnswer: ChordQuality): ChordQuality[] => {
    const availableQualities = getAvailableChordQualities();
    const incorrectOptions = availableQualities.filter(q => q !== correctAnswer);
    
    // Randomly select 3 incorrect options
    const shuffled = incorrectOptions.sort(() => 0.5 - Math.random());
    const selectedIncorrect = shuffled.slice(0, 3);
    
    // Combine with correct answer and shuffle
    const options = [correctAnswer, ...selectedIncorrect];
    return options.sort(() => 0.5 - Math.random());
  };


  // Play the current chord
  const playCurrentChord = useCallback(async (chord?: Chord) => {
    const chordToPlay = chord || quizState.currentChord;
    if (!chordToPlay) {
      console.log('No chord to play');
      return;
    }
    
    try {
      console.log('🎹 Starting WebAudioFont chord playback...');
      const { playChord } = await import('@/lib/utils/audio');
      
      const variation = chordToPlay.variations[0];
      const leftFingerings = variation?.fingerings.left || [];
      const rightFingerings = variation?.fingerings.right || [];

      const allNotes: string[] = [];
      
      rightFingerings.forEach(fingering => {
        let noteWithOctave = fingering.note;
        if (fingering.octave !== undefined) {
          const baseOctave = 4;
          const actualOctave = baseOctave + fingering.octave;
          noteWithOctave = `${fingering.note}${actualOctave}`;
        }
        allNotes.push(noteWithOctave);
      });
      
      leftFingerings.forEach(fingering => {
        let noteWithOctave = fingering.note;
        if (fingering.octave !== undefined) {
          const baseOctave = 4;
          const actualOctave = baseOctave + fingering.octave;
          noteWithOctave = `${fingering.note}${actualOctave}`;
        }
        allNotes.push(noteWithOctave);
      });
      
      const uniqueNotes = [...new Set(allNotes)];
      console.log(`Notes: ${uniqueNotes.join(', ')}`);
      
      await playChord(uniqueNotes, 1.5, 0.3);
      console.log('✅ WebAudioFont chord played successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('❌ WebAudioFont error:', errorMessage);
      console.error('Full error:', error);
    }
  }, [quizState.currentChord]);

  // Start new question
  const startNewQuestion = useCallback(async () => {
    setQuizState(prev => ({ ...prev, isLoading: true }));
    
    const newChord = generateRandomChord();
    const answerOptions = generateAnswerOptions(newChord.quality);
    
    setQuizState(prev => ({
      ...prev,
      currentChord: newChord,
      selectedAnswer: null,
      correctAnswer: newChord.quality,
      answerOptions,
      showResult: false,
      isLoading: false
    }));
  }, []);

  // Restart the entire quiz
  const restartQuiz = useCallback(() => {
    setQuizState({
      currentChord: null,
      selectedAnswer: null,
      correctAnswer: null,
      answerOptions: [],
      showResult: false,
      score: 0,
      currentQuestionNumber: 1,
      totalQuestions: 0,
      quizCompleted: false,
      isLoading: false
    });
    startNewQuestion();
  }, [startNewQuestion]);

  // Handle answer selection
  const handleAnswerSelect = (selectedQuality: ChordQuality) => {
    if (quizState.showResult) return;

    const isCorrect = selectedQuality === quizState.correctAnswer;
    const newTotalQuestions = quizState.totalQuestions + 1;
    const isQuizCompleted = newTotalQuestions >= TOTAL_QUESTIONS;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: selectedQuality,
      showResult: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      totalQuestions: newTotalQuestions,
      quizCompleted: isQuizCompleted
    }));
  };

  // Go to next question
  const handleNextQuestion = () => {
    if (quizState.quizCompleted) return;
    
    setQuizState(prev => ({
      ...prev,
      currentQuestionNumber: prev.currentQuestionNumber + 1
    }));
    startNewQuestion();
  };

  // Initialize first question
  useEffect(() => {
    startNewQuestion();
  }, [startNewQuestion]);

  const currentDescription = quizState.correctAnswer ? getChordQualityDescription(quizState.correctAnswer) : null;
  const isCorrect = quizState.selectedAnswer === quizState.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <header className="relative py-6">
          {/* Back Button */}
          <div className="absolute left-0 top-6">
            <button
              onClick={() => router.push('/')}
              className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md flex items-center gap-2"
            >
              ← Back to Home
            </button>
          </div>
          
          {/* Main Header Content - Centered */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-2">
              🎯 Chord Quality Quiz
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Listen to chords and identify their quality. Learn the distinctive sounds of different chord types.
            </p>
          </div>
        </header>

        {/* Score Display */}
        <div className="text-center mb-6">
          <div className="inline-flex bg-white rounded-lg px-6 py-3 shadow-md">
            <span className="text-lg font-semibold text-gray-700">
              Question {quizState.currentQuestionNumber}/{TOTAL_QUESTIONS}
              <span className="text-sm text-gray-500 ml-4">
                Score: {quizState.score}/{quizState.totalQuestions}
              </span>
              {quizState.totalQuestions > 0 && (
                <span className="text-sm text-gray-500 ml-2">
                  ({Math.round((quizState.score / quizState.totalQuestions) * 100)}%)
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Main Quiz Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {quizState.quizCompleted ? (
            /* Final Results Screen */
            <div className="text-center py-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Quiz Complete!</h2>
                <div className="text-6xl font-bold text-blue-600 mb-2">
                  {quizState.score}/{TOTAL_QUESTIONS}
                </div>
                <div className="text-2xl text-gray-600 mb-4">
                  {Math.round((quizState.score / TOTAL_QUESTIONS) * 100)}% Correct
                </div>
                
                {/* Performance message */}
                <div className="mb-6">
                  {quizState.score === TOTAL_QUESTIONS && (
                    <p className="text-lg text-green-600 font-semibold">Perfect score! You&apos;re a chord master! 🏆</p>
                  )}
                  {quizState.score >= TOTAL_QUESTIONS * 0.8 && quizState.score < TOTAL_QUESTIONS && (
                    <p className="text-lg text-blue-600 font-semibold">Excellent work! Great ear for chords! 🎵</p>
                  )}
                  {quizState.score >= TOTAL_QUESTIONS * 0.6 && quizState.score < TOTAL_QUESTIONS * 0.8 && (
                    <p className="text-lg text-purple-600 font-semibold">Good job! Keep practicing! 👍</p>
                  )}
                  {quizState.score < TOTAL_QUESTIONS * 0.6 && (
                    <p className="text-lg text-orange-600 font-semibold">Nice try! Practice makes perfect! 💪</p>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 justify-center flex-wrap">
                  <button
                    onClick={restartQuiz}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md"
                  >
                    🎯 Try Again
                  </button>
                  <button
                    onClick={() => router.push('/')}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md"
                  >
                    🏠 Back to Home
                  </button>
                </div>
              </div>
            </div>
          ) : quizState.isLoading ? (
            <div className="text-center py-12">
              <div className="text-lg text-gray-600">Loading new chord...</div>
            </div>
          ) : (
            <>
              {/* Current Chord Display */}
              {quizState.currentChord && (
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-xl inline-block shadow-md">
                      {quizState.showResult ? quizState.currentChord.symbol : '?'}
                    </div>
                  </div>
                  
                  {/* Play Chord Button */}
                  <div className="flex flex-col gap-3 items-center">
                    <button
                      onClick={() => playCurrentChord()}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md flex items-center gap-2"
                    >
                      🔊 {quizState.showResult ? 'Play Again' : 'Play Chord'}
                    </button>
                    
                  </div>
                </div>
              )}

              {/* Question */}
              {!quizState.showResult && (
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    What chord quality do you hear?
                  </h2>
                </div>
              )}

              {/* Answer Options */}
              {!quizState.showResult && quizState.answerOptions.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {quizState.answerOptions.map((quality) => {
                    const description = getChordQualityDescription(quality);
                    return (
                      <button
                        key={quality}
                        onClick={() => handleAnswerSelect(quality)}
                        className="p-4 bg-gray-100 hover:bg-blue-100 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 transition-colors duration-200 border-2 border-transparent hover:border-blue-300"
                      >
                        {description.name}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Result and Explanation */}
              {quizState.showResult && currentDescription && (
                <div className="space-y-6">
                  {/* Result Indicator */}
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-lg ${
                      isCorrect 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                    </div>
                    {!isCorrect && quizState.selectedAnswer && (
                      <div className="mt-2 text-gray-600">
                        You selected: {getChordQualityDescription(quizState.selectedAnswer).name}
                      </div>
                    )}
                  </div>

                  {/* Educational Explanation */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                      {currentDescription.name} Chord
                    </h3>
                    
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Description:</h4>
                        <p>{currentDescription.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Sound Characteristics:</h4>
                        <p>{currentDescription.soundCharacteristics}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Musical Context:</h4>
                        <p>{currentDescription.musicalContext}</p>
                      </div>
                    </div>
                  </div>

                  {/* Next Question Button */}
                  <div className="text-center">
                    {quizState.quizCompleted ? (
                      <div className="text-lg font-semibold text-gray-600">
                        Quiz Complete! See results above.
                      </div>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md"
                      >
                        {quizState.currentQuestionNumber >= TOTAL_QUESTIONS ? 'Finish Quiz' : 'Next Question →'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>


        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          Train your ear and learn chord qualities! 🎵
        </footer>
      </div>
    </div>
  );
}