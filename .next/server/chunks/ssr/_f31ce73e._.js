module.exports = {

"[project]/data/chords.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CHORD_DATABASE": ()=>CHORD_DATABASE,
    "getChordByRootAndQuality": ()=>getChordByRootAndQuality,
    "getChordsByQuality": ()=>getChordsByQuality,
    "getChordsByRoot": ()=>getChordsByRoot,
    "searchChords": ()=>searchChords
});
const NOTES = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];
// Helper function to get note by semitone offset
function getNoteByOffset(root, offset) {
    const rootIndex = NOTES.indexOf(root);
    const targetIndex = (rootIndex + offset) % 12;
    return NOTES[targetIndex];
}
// Generate chords for all keys
function generateChordsForAllKeys() {
    const chords = [];
    NOTES.forEach((root)=>{
        // Major chord
        chords.push({
            root,
            quality: 'major',
            symbol: root === 'C#' || root === 'D#' || root === 'F#' || root === 'G#' || root === 'A#' ? `${root}` : `${root}`,
            notes: [
                root,
                getNoteByOffset(root, 4),
                getNoteByOffset(root, 7) // perfect fifth
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'beginner'
                },
                {
                    name: 'Root Position (Octave)',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: root,
                                finger: 5,
                                octave: 1
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 2
                            },
                            {
                                note: root,
                                finger: 1,
                                octave: 1
                            }
                        ]
                    },
                    difficulty: 'intermediate'
                }
            ]
        });
        // Minor chord
        chords.push({
            root,
            quality: 'minor',
            symbol: `${root}m`,
            notes: [
                root,
                getNoteByOffset(root, 3),
                getNoteByOffset(root, 7) // perfect fifth
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 3),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 3),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'beginner'
                }
            ]
        });
        // Dominant 7th chord
        chords.push({
            root,
            quality: '7',
            symbol: `${root}7`,
            notes: [
                root,
                getNoteByOffset(root, 4),
                getNoteByOffset(root, 7),
                getNoteByOffset(root, 10) // minor seventh
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 10),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 10),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'intermediate'
                }
            ]
        });
        // Major 7th chord
        chords.push({
            root,
            quality: 'major7',
            symbol: `${root}maj7`,
            notes: [
                root,
                getNoteByOffset(root, 4),
                getNoteByOffset(root, 7),
                getNoteByOffset(root, 11) // major seventh
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 11),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 11),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'intermediate'
                }
            ]
        });
        // Minor 7th chord
        chords.push({
            root,
            quality: 'minor7',
            symbol: `${root}m7`,
            notes: [
                root,
                getNoteByOffset(root, 3),
                getNoteByOffset(root, 7),
                getNoteByOffset(root, 10) // minor seventh
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 3),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 10),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 3),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 10),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'intermediate'
                }
            ]
        });
        // Sus2 chord
        chords.push({
            root,
            quality: 'sus2',
            symbol: `${root}sus2`,
            notes: [
                root,
                getNoteByOffset(root, 2),
                getNoteByOffset(root, 7) // perfect fifth
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 2),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 2),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'beginner'
                }
            ]
        });
        // Sus4 chord
        chords.push({
            root,
            quality: 'sus4',
            symbol: `${root}sus4`,
            notes: [
                root,
                getNoteByOffset(root, 5),
                getNoteByOffset(root, 7) // perfect fifth
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 5),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 5),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'beginner'
                }
            ]
        });
        // 6th chord
        chords.push({
            root,
            quality: '6',
            symbol: `${root}6`,
            notes: [
                root,
                getNoteByOffset(root, 4),
                getNoteByOffset(root, 7),
                getNoteByOffset(root, 9) // major sixth
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 9),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 4
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 9),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'intermediate'
                }
            ]
        });
        // Diminished chord
        chords.push({
            root,
            quality: 'diminished',
            symbol: `${root}°`,
            notes: [
                root,
                getNoteByOffset(root, 3),
                getNoteByOffset(root, 6) // diminished fifth
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 3),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 6),
                                finger: 5
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 3),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 6),
                                finger: 1
                            }
                        ]
                    },
                    difficulty: 'intermediate'
                }
            ]
        });
        // Add9 chord
        chords.push({
            root,
            quality: 'add9',
            symbol: `${root}add9`,
            notes: [
                root,
                getNoteByOffset(root, 4),
                getNoteByOffset(root, 7),
                getNoteByOffset(root, 14) // major ninth (2 octaves + 2 semitones)
            ],
            variations: [
                {
                    name: 'Root Position',
                    fingerings: {
                        right: [
                            {
                                note: root,
                                finger: 1
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 2),
                                finger: 5,
                                octave: 1
                            }
                        ],
                        left: [
                            {
                                note: root,
                                finger: 5
                            },
                            {
                                note: getNoteByOffset(root, 4),
                                finger: 3
                            },
                            {
                                note: getNoteByOffset(root, 7),
                                finger: 2
                            },
                            {
                                note: getNoteByOffset(root, 2),
                                finger: 1,
                                octave: 1
                            }
                        ]
                    },
                    difficulty: 'advanced'
                }
            ]
        });
    });
    return chords;
}
const CHORD_DATABASE = generateChordsForAllKeys();
function getChordsByRoot(root) {
    return CHORD_DATABASE.filter((chord)=>chord.root === root);
}
function getChordsByQuality(quality) {
    return CHORD_DATABASE.filter((chord)=>chord.quality === quality);
}
function getChordByRootAndQuality(root, quality) {
    return CHORD_DATABASE.find((chord)=>chord.root === root && chord.quality === quality);
}
function searchChords(query) {
    const lowercaseQuery = query.toLowerCase();
    return CHORD_DATABASE.filter((chord)=>chord.symbol.toLowerCase().includes(lowercaseQuery) || chord.root.toLowerCase().includes(lowercaseQuery) || chord.quality.toLowerCase().includes(lowercaseQuery));
}
}),
"[project]/components/ChordSelector.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ChordSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const NOTES = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B'
];
const CHORD_QUALITIES = [
    {
        quality: 'major',
        display: 'Major',
        description: '1-3-5'
    },
    {
        quality: 'minor',
        display: 'Minor',
        description: '1-♭3-5'
    },
    {
        quality: '7',
        display: 'Dominant 7th',
        description: '1-3-5-♭7'
    },
    {
        quality: 'major7',
        display: 'Major 7th',
        description: '1-3-5-7'
    },
    {
        quality: 'minor7',
        display: 'Minor 7th',
        description: '1-♭3-5-♭7'
    },
    {
        quality: 'sus2',
        display: 'Sus2',
        description: '1-2-5'
    },
    {
        quality: 'sus4',
        display: 'Sus4',
        description: '1-4-5'
    },
    {
        quality: '6',
        display: '6th',
        description: '1-3-5-6'
    },
    {
        quality: 'add9',
        display: 'Add9',
        description: '1-3-5-9'
    },
    {
        quality: 'diminished',
        display: 'Diminished',
        description: '1-♭3-♭5'
    }
];
const POPULAR_CHORDS = [
    {
        root: 'C',
        quality: 'major',
        display: 'C'
    },
    {
        root: 'G',
        quality: 'major',
        display: 'G'
    },
    {
        root: 'A',
        quality: 'minor',
        display: 'Am'
    },
    {
        root: 'F',
        quality: 'major',
        display: 'F'
    },
    {
        root: 'D',
        quality: 'minor',
        display: 'Dm'
    },
    {
        root: 'E',
        quality: 'minor',
        display: 'Em'
    },
    {
        root: 'C',
        quality: '7',
        display: 'C7'
    },
    {
        root: 'G',
        quality: '7',
        display: 'G7'
    }
];
function ChordSelector({ selectedRoot, selectedQuality, onRootChange, onQualityChange, className = '' }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('popular');
    const handlePopularChordSelect = (root, quality)=>{
        onRootChange(root);
        onQualityChange(quality);
        setStep('popular');
    };
    const handleRootSelect = (root)=>{
        onRootChange(root);
        setStep('quality');
    };
    const handleQualitySelect = (quality)=>{
        onQualityChange(quality);
        setStep('popular');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-xl shadow-lg p-6 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-100 p-1 rounded-lg flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('popular'),
                            className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${step === 'popular' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`,
                            children: "Popular"
                        }, void 0, false, {
                            fileName: "[project]/components/ChordSelector.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('root'),
                            className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${step === 'root' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`,
                            children: "Custom"
                        }, void 0, false, {
                            fileName: "[project]/components/ChordSelector.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChordSelector.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChordSelector.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            selectedRoot && selectedQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-xl inline-block shadow-md",
                    children: [
                        selectedRoot,
                        selectedQuality === 'major' ? '' : selectedQuality === 'minor' ? 'm' : selectedQuality === '7' ? '7' : selectedQuality === 'major7' ? 'maj7' : selectedQuality === 'minor7' ? 'm7' : selectedQuality === 'sus2' ? 'sus2' : selectedQuality === 'sus4' ? 'sus4' : selectedQuality === '6' ? '6' : selectedQuality === 'add9' ? 'add9' : selectedQuality === 'diminished' ? '°' : ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChordSelector.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChordSelector.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            step === 'popular' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4 text-center text-gray-700",
                        children: "Popular Chords"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-3",
                        children: POPULAR_CHORDS.map((chord, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePopularChordSelect(chord.root, chord.quality),
                                className: `p-3 rounded-lg border-2 transition-all duration-200 font-medium ${selectedRoot === chord.root && selectedQuality === chord.quality ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`,
                                children: chord.display
                            }, idx, false, {
                                fileName: "[project]/components/ChordSelector.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChordSelector.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            step === 'root' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4 text-center text-gray-700",
                        children: "Select Root Note"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-6 gap-3 mb-4",
                        children: NOTES.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRootSelect(note),
                                className: `p-3 rounded-lg border-2 transition-all duration-200 font-semibold ${selectedRoot === note ? 'border-blue-500 bg-blue-50 text-blue-700' : note.includes('#') ? 'border-gray-800 bg-gray-800 text-white hover:bg-gray-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`,
                                children: note
                            }, note, false, {
                                fileName: "[project]/components/ChordSelector.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChordSelector.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            step === 'quality' && selectedRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4 text-center text-gray-700",
                        children: "Select Chord Quality"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: CHORD_QUALITIES.map((chord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleQualitySelect(chord.quality),
                                className: `p-4 rounded-lg border-2 text-left transition-all duration-200 ${selectedQuality === chord.quality ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: chord.display
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChordSelector.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: chord.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChordSelector.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, chord.quality, true, {
                                fileName: "[project]/components/ChordSelector.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChordSelector.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-6",
                children: [
                    step !== 'popular' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep(step === 'quality' ? 'root' : 'popular'),
                        className: "px-4 py-2 text-gray-600 hover:text-gray-800 font-medium",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    step === 'popular' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep('root'),
                        className: "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium ml-auto",
                        children: "Build Custom →"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChordSelector.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChordSelector.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Piano.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Piano
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const PianoKey = ({ note, isBlack, isActive, finger, x, octave })=>{
    const baseClasses = isBlack ? "absolute bg-gray-800 text-white w-8 h-24 rounded-b-sm z-10 flex flex-col items-center justify-end pb-2 shadow-lg" : "bg-white border border-gray-300 w-12 h-36 rounded-b-md flex flex-col items-center justify-end pb-2 relative shadow-sm";
    const activeClass = isActive ? isBlack ? "bg-blue-600" : "bg-blue-400" : "";
    const hoverClass = "hover:bg-gray-100 transition-colors duration-200";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${baseClasses} ${activeClass} ${!isActive ? hoverClass : ''} cursor-pointer`,
        style: isBlack ? {
            left: `${x}px`,
            top: '0'
        } : {},
        children: [
            isActive && finger && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mb-1 shadow-md",
                children: finger
            }, void 0, false, {
                fileName: "[project]/components/Piano.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-xs font-semibold ${isBlack ? 'text-white' : 'text-gray-700'}`,
                children: note.replace('2', '')
            }, void 0, false, {
                fileName: "[project]/components/Piano.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Piano.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Piano({ activeFingerings, className = '' }) {
    // Extended piano range to accommodate all chord types
    const whiteKeys = [
        'C',
        'D',
        'E',
        'F',
        'G',
        'A',
        'B',
        'C2',
        'D2',
        'E2',
        'F2',
        'G2',
        'A2',
        'B2',
        'C3'
    ];
    const blackKeys = [
        {
            note: 'C#',
            x: 36
        },
        {
            note: 'D#',
            x: 84
        },
        {
            note: 'F#',
            x: 180
        },
        {
            note: 'G#',
            x: 228
        },
        {
            note: 'A#',
            x: 276
        },
        {
            note: 'C#2',
            x: 372
        },
        {
            note: 'D#2',
            x: 420
        },
        {
            note: 'F#2',
            x: 516
        },
        {
            note: 'G#2',
            x: 564
        },
        {
            note: 'A#2',
            x: 612
        },
        {
            note: 'C#3',
            x: 708
        }
    ];
    // Helper function to find active fingering for a note
    const getFingeringForNote = (note)=>{
        return activeFingerings.find((f)=>{
            // Handle octave notation
            if (f.octave) {
                return f.note === note.replace(/\d+$/, '') && note.includes((f.octave + 1).toString());
            }
            return f.note === note.replace(/\d+$/, '');
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative inline-block bg-gray-100 p-4 rounded-lg shadow-xl ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex",
            children: [
                whiteKeys.map((note, idx)=>{
                    const fingering = getFingeringForNote(note);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PianoKey, {
                        note: note,
                        isBlack: false,
                        isActive: !!fingering,
                        finger: fingering?.finger
                    }, idx, false, {
                        fileName: "[project]/components/Piano.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this);
                }),
                blackKeys.map((key, idx)=>{
                    const fingering = getFingeringForNote(key.note);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PianoKey, {
                        note: key.note,
                        isBlack: true,
                        isActive: !!fingering,
                        finger: fingering?.finger,
                        x: key.x
                    }, `black-${idx}`, false, {
                        fileName: "[project]/components/Piano.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/components/Piano.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Piano.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HandSelector.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>HandSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function HandSelector({ selectedHand, onHandChange, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white p-4 rounded-xl shadow-lg ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4 text-center text-gray-700",
                children: "Select Hand"
            }, void 0, false, {
                fileName: "[project]/components/HandSelector.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onHandChange('left'),
                        className: `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedHand === 'left' ? 'bg-green-500 text-white shadow-md transform scale-105' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-sm",
                                children: "👈"
                            }, void 0, false, {
                                fileName: "[project]/components/HandSelector.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            "Left Hand"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HandSelector.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onHandChange('right'),
                        className: `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedHand === 'right' ? 'bg-green-500 text-white shadow-md transform scale-105' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-sm",
                                children: "👉"
                            }, void 0, false, {
                                fileName: "[project]/components/HandSelector.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            "Right Hand"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HandSelector.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HandSelector.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HandSelector.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/FingerDiagram.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>FingerDiagram
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function FingerDiagram({ hand, fingerings, className = '' }) {
    const isLeft = hand === 'left';
    const fingerNumbers = isLeft ? [
        5,
        4,
        3,
        2,
        1
    ] : [
        1,
        2,
        3,
        4,
        5
    ];
    const fingerNames = [
        'Thumb',
        'Index',
        'Middle',
        'Ring',
        'Pinky'
    ];
    const displayNames = isLeft ? [
        ...fingerNames
    ].reverse() : fingerNames;
    const getFingerNote = (fingerNum)=>{
        const fingering = fingerings.find((f)=>f.finger === fingerNum);
        return fingering ? fingering.note : '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-gray-50 p-4 rounded-lg ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-center font-bold mb-3 text-gray-700",
                children: isLeft ? 'Left Hand (L.H.)' : 'Right Hand (R.H.)'
            }, void 0, false, {
                fileName: "[project]/components/FingerDiagram.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 justify-center",
                children: fingerNumbers.map((num, idx)=>{
                    const isActive = fingerings.some((f)=>f.finger === num);
                    const note = getFingerNote(num);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 ${isActive ? 'bg-red-500 text-white shadow-md' : 'bg-white border-2 border-gray-300 text-gray-400'}`,
                                children: num
                            }, void 0, false, {
                                fileName: "[project]/components/FingerDiagram.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600 block",
                                        children: displayNames[idx]
                                    }, void 0, false, {
                                        fileName: "[project]/components/FingerDiagram.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-blue-600 block",
                                        children: note
                                    }, void 0, false, {
                                        fileName: "[project]/components/FingerDiagram.tsx",
                                        lineNumber: 41,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FingerDiagram.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/FingerDiagram.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/FingerDiagram.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FingerDiagram.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$chords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/chords.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChordSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChordSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Piano$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Piano.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HandSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HandSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FingerDiagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FingerDiagram.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Home() {
    const [selectedRoot, setSelectedRoot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('C');
    const [selectedQuality, setSelectedQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('major');
    const [selectedHand, setSelectedHand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('right');
    const [selectedVariation, setSelectedVariation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Get current chord data
    const currentChord = selectedRoot && selectedQuality ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$chords$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChordByRootAndQuality"])(selectedRoot, selectedQuality) : null;
    const currentVariation = currentChord?.variations[selectedVariation];
    const currentFingerings = currentVariation?.fingerings[selectedHand] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-purple-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-5xl font-bold text-gray-800 mb-2",
                            children: "🎹 Piano Chord Fingerings"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "Interactive guide for piano chord fingerings. Learn proper hand positions for all chord types."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChordSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            selectedRoot: selectedRoot,
                            selectedQuality: selectedQuality,
                            onRootChange: setSelectedRoot,
                            onQualityChange: setSelectedQuality
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        currentChord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                currentChord.variations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3 text-center text-gray-700",
                                            children: "Fingering Variations"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 justify-center flex-wrap",
                                            children: currentChord.variations.map((variation, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedVariation(idx),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedVariation === idx ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`,
                                                    children: [
                                                        variation.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `ml-2 text-xs px-2 py-1 rounded ${variation.difficulty === 'beginner' ? 'bg-green-200 text-green-800' : variation.difficulty === 'intermediate' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'}`,
                                                            children: variation.difficulty
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HandSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    selectedHand: selectedHand,
                                    onHandChange: setSelectedHand
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-center text-gray-700",
                                            children: [
                                                currentChord.symbol,
                                                " - ",
                                                currentVariation?.name,
                                                " - ",
                                                selectedHand === 'left' ? 'Left' : 'Right',
                                                " Hand"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-800 text-white px-4 py-2 rounded inline-block font-mono text-lg",
                                                children: currentChord.notes.join(' - ')
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-6 overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Piano$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                activeFingerings: currentFingerings
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FingerDiagram$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                hand: selectedHand,
                                                fingerings: currentFingerings,
                                                className: "max-w-md"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 p-4 bg-blue-50 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-blue-800 mb-2",
                                                    children: "Chord Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Notes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                currentChord.notes.join(', ')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Difficulty:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 121,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                currentVariation?.difficulty
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentVariation?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Description:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                currentVariation.description
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center py-6 text-gray-500 text-sm",
                    children: "Practice makes perfect! 🎵"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_f31ce73e._.js.map