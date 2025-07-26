(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/data/chords.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
            symbol: root === 'C#' || root === 'D#' || root === 'F#' || root === 'G#' || root === 'A#' ? "".concat(root) : "".concat(root),
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
            symbol: "".concat(root, "m"),
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
            symbol: "".concat(root, "7"),
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
            symbol: "".concat(root, "maj7"),
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
            symbol: "".concat(root, "m7"),
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
            symbol: "".concat(root, "sus2"),
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
            symbol: "".concat(root, "sus4"),
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
            symbol: "".concat(root, "6"),
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
            symbol: "".concat(root, "°"),
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
            symbol: "".concat(root, "add9"),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ChordSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ChordSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function ChordSelector(param) {
    let { selectedRoot, selectedQuality, onRootChange, onQualityChange, className = '' } = param;
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('popular');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg p-6 ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-100 p-1 rounded-lg flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('popular'),
                            className: "px-4 py-2 rounded-md text-sm font-medium transition-all ".concat(step === 'popular' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'),
                            children: "Popular"
                        }, void 0, false, {
                            fileName: "[project]/components/ChordSelector.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('root'),
                            className: "px-4 py-2 rounded-md text-sm font-medium transition-all ".concat(step === 'root' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'),
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
            selectedRoot && selectedQuality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            step === 'popular' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4 text-center text-gray-700",
                        children: "Popular Chords"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-3",
                        children: POPULAR_CHORDS.map((chord, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePopularChordSelect(chord.root, chord.quality),
                                className: "p-3 rounded-lg border-2 transition-all duration-200 font-medium ".concat(selectedRoot === chord.root && selectedQuality === chord.quality ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'),
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
            step === 'root' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4 text-center text-gray-700",
                        children: "Select Root Note"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-6 gap-3 mb-4",
                        children: NOTES.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRootSelect(note),
                                className: "p-3 rounded-lg border-2 transition-all duration-200 font-semibold ".concat(selectedRoot === note ? 'border-blue-500 bg-blue-50 text-blue-700' : note.includes('#') ? 'border-gray-800 bg-gray-800 text-white hover:bg-gray-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'),
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
            step === 'quality' && selectedRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-4 text-center text-gray-700",
                        children: "Select Chord Quality"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: CHORD_QUALITIES.map((chord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleQualitySelect(chord.quality),
                                className: "p-4 rounded-lg border-2 text-left transition-all duration-200 ".concat(selectedQuality === chord.quality ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: chord.display
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChordSelector.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-6",
                children: [
                    step !== 'popular' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStep(step === 'quality' ? 'root' : 'popular'),
                        className: "px-4 py-2 text-gray-600 hover:text-gray-800 font-medium",
                        children: "← Back"
                    }, void 0, false, {
                        fileName: "[project]/components/ChordSelector.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    step === 'popular' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(ChordSelector, "ZqYkeNOBSmvuJqEn6sR2qARkO7o=");
_c = ChordSelector;
var _c;
__turbopack_context__.k.register(_c, "ChordSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Piano.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Piano
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const PianoKey = (param)=>{
    let { note, isBlack, isActive, finger, x, octave } = param;
    const baseClasses = isBlack ? "absolute bg-gray-800 text-white w-8 h-24 rounded-b-sm z-10 flex flex-col items-center justify-end pb-2 shadow-lg" : "bg-white border border-gray-300 w-12 h-36 rounded-b-md flex flex-col items-center justify-end pb-2 relative shadow-sm";
    const activeClass = isActive ? isBlack ? "bg-blue-600" : "bg-blue-400" : "";
    const hoverClass = "hover:bg-gray-100 transition-colors duration-200";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(baseClasses, " ").concat(activeClass, " ").concat(!isActive ? hoverClass : '', " cursor-pointer"),
        style: isBlack ? {
            left: "".concat(x, "px"),
            top: '0'
        } : {},
        children: [
            isActive && finger && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mb-1 shadow-md",
                children: finger
            }, void 0, false, {
                fileName: "[project]/components/Piano.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-semibold ".concat(isBlack ? 'text-white' : 'text-gray-700'),
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
_c = PianoKey;
function Piano(param) {
    let { activeFingerings, className = '' } = param;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block bg-gray-100 p-4 rounded-lg shadow-xl ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex",
            children: [
                whiteKeys.map((note, idx)=>{
                    const fingering = getFingeringForNote(note);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PianoKey, {
                        note: note,
                        isBlack: false,
                        isActive: !!fingering,
                        finger: fingering === null || fingering === void 0 ? void 0 : fingering.finger
                    }, idx, false, {
                        fileName: "[project]/components/Piano.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this);
                }),
                blackKeys.map((key, idx)=>{
                    const fingering = getFingeringForNote(key.note);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PianoKey, {
                        note: key.note,
                        isBlack: true,
                        isActive: !!fingering,
                        finger: fingering === null || fingering === void 0 ? void 0 : fingering.finger,
                        x: key.x
                    }, "black-".concat(idx), false, {
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
_c1 = Piano;
var _c, _c1;
__turbopack_context__.k.register(_c, "PianoKey");
__turbopack_context__.k.register(_c1, "Piano");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/HandSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>HandSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function HandSelector(param) {
    let { selectedHand, onHandChange, className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-xl shadow-lg ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-4 text-center text-gray-700",
                children: "Select Hand"
            }, void 0, false, {
                fileName: "[project]/components/HandSelector.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onHandChange('left'),
                        className: "px-6 py-3 rounded-lg font-medium transition-all duration-200 ".concat(selectedHand === 'left' ? 'bg-green-500 text-white shadow-md transform scale-105' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onHandChange('right'),
                        className: "px-6 py-3 rounded-lg font-medium transition-all duration-200 ".concat(selectedHand === 'right' ? 'bg-green-500 text-white shadow-md transform scale-105' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = HandSelector;
var _c;
__turbopack_context__.k.register(_c, "HandSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/FingerDiagram.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FingerDiagram
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FingerDiagram(param) {
    let { hand, fingerings, className = '' } = param;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 p-4 rounded-lg ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-center font-bold mb-3 text-gray-700",
                children: isLeft ? 'Left Hand (L.H.)' : 'Right Hand (R.H.)'
            }, void 0, false, {
                fileName: "[project]/components/FingerDiagram.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 justify-center",
                children: fingerNumbers.map((num, idx)=>{
                    const isActive = fingerings.some((f)=>f.finger === num);
                    const note = getFingerNote(num);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-200 ".concat(isActive ? 'bg-red-500 text-white shadow-md' : 'bg-white border-2 border-gray-300 text-gray-400'),
                                children: num
                            }, void 0, false, {
                                fileName: "[project]/components/FingerDiagram.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600 block",
                                        children: displayNames[idx]
                                    }, void 0, false, {
                                        fileName: "[project]/components/FingerDiagram.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = FingerDiagram;
var _c;
__turbopack_context__.k.register(_c, "FingerDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/hooks/useFavorites.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFavorites": ()=>useFavorites
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const FAVORITES_KEY = 'piano-chord-favorites';
const RECENT_KEY = 'piano-chord-recent';
function useFavorites() {
    _s();
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recentChords, setRecentChords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load from localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavorites.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
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
        }
    }["useFavorites.useEffect"], []);
    // Save favorites to localStorage
    const saveFavorites = (newFavorites)=>{
        setFavorites(newFavorites);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        }
    };
    // Save recent chords to localStorage
    const saveRecentChords = (newRecent)=>{
        setRecentChords(newRecent);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem(RECENT_KEY, JSON.stringify(newRecent));
        }
    };
    const addToFavorites = function(chord) {
        let variationIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        const favoriteId = "".concat(chord.root, "-").concat(chord.quality, "-").concat(variationIndex);
        // Check if already in favorites
        if (favorites.some((fav)=>fav.id === favoriteId)) {
            return;
        }
        const newFavorite = {
            id: favoriteId,
            chord,
            variationIndex,
            dateAdded: new Date().toISOString()
        };
        const newFavorites = [
            ...favorites,
            newFavorite
        ];
        saveFavorites(newFavorites);
    };
    const removeFromFavorites = (favoriteId)=>{
        const newFavorites = favorites.filter((fav)=>fav.id !== favoriteId);
        saveFavorites(newFavorites);
    };
    const addToRecent = function(chord) {
        let variationIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        const recentId = "".concat(chord.root, "-").concat(chord.quality, "-").concat(variationIndex);
        // Remove if already exists to avoid duplicates
        const filteredRecent = recentChords.filter((recent)=>recent.id !== recentId);
        const newRecent = {
            id: recentId,
            chord,
            variationIndex,
            dateAdded: new Date().toISOString()
        };
        // Add to beginning and limit to 10 items
        const newRecentChords = [
            newRecent,
            ...filteredRecent
        ].slice(0, 10);
        saveRecentChords(newRecentChords);
    };
    const isFavorite = function(chord) {
        let variationIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        const favoriteId = "".concat(chord.root, "-").concat(chord.quality, "-").concat(variationIndex);
        return favorites.some((fav)=>fav.id === favoriteId);
    };
    const clearFavorites = ()=>{
        saveFavorites([]);
    };
    const clearRecent = ()=>{
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
_s(useFavorites, "gWxWUVP4vF9CXxz6zbV+nCrgXKk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$chords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/chords.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChordSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChordSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Piano$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Piano.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HandSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HandSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FingerDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FingerDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFavorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFavorites.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Home() {
    _s();
    const [selectedRoot, setSelectedRoot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('C');
    const [selectedQuality, setSelectedQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('major');
    const [selectedHand, setSelectedHand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('right');
    const [selectedVariation, setSelectedVariation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chords');
    // Favorites hook
    const { favorites, recentChords, addToFavorites, removeFromFavorites, addToRecent, isFavorite, clearFavorites, clearRecent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFavorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"])();
    // Get current chord data
    const currentChord = selectedRoot && selectedQuality ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$chords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChordByRootAndQuality"])(selectedRoot, selectedQuality) : null;
    const currentVariation = currentChord === null || currentChord === void 0 ? void 0 : currentChord.variations[selectedVariation];
    const currentFingerings = (currentVariation === null || currentVariation === void 0 ? void 0 : currentVariation.fingerings[selectedHand]) || [];
    // Add to recent chords when chord changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (currentChord && selectedRoot && selectedQuality) {
                addToRecent(currentChord, selectedVariation);
            }
        }
    }["Home.useEffect"], [
        selectedRoot,
        selectedQuality,
        selectedVariation,
        currentChord,
        addToRecent
    ]);
    const handleChordSelect = function(root, quality) {
        let variationIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        setSelectedRoot(root);
        setSelectedQuality(quality);
        setSelectedVariation(variationIndex);
        setActiveTab('chords');
    };
    const handleFavoriteToggle = ()=>{
        if (currentChord) {
            if (isFavorite(currentChord, selectedVariation)) {
                const favoriteId = "".concat(currentChord.root, "-").concat(currentChord.quality, "-").concat(selectedVariation);
                removeFromFavorites(favoriteId);
            } else {
                addToFavorites(currentChord, selectedVariation);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-purple-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "text-center py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl md:text-5xl font-bold text-gray-800 mb-2",
                            children: "🎹 Piano Chord Fingerings"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "Interactive guide for piano chord fingerings. Learn proper hand positions for all chord types."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChordSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            selectedRoot: selectedRoot,
                            selectedQuality: selectedQuality,
                            onRootChange: setSelectedRoot,
                            onQualityChange: setSelectedQuality
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        currentChord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                currentChord.variations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3 text-center text-gray-700",
                                            children: "Fingering Variations"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 justify-center flex-wrap",
                                            children: currentChord.variations.map((variation, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedVariation(idx),
                                                    className: "px-4 py-2 rounded-lg text-sm font-medium transition-all ".concat(selectedVariation === idx ? 'bg-purple-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'),
                                                    children: [
                                                        variation.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-xs px-2 py-1 rounded ".concat(variation.difficulty === 'beginner' ? 'bg-green-200 text-green-800' : variation.difficulty === 'intermediate' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'),
                                                            children: variation.difficulty
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HandSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedHand: selectedHand,
                                    onHandChange: setSelectedHand
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-4 text-center text-gray-700",
                                            children: [
                                                currentChord.symbol,
                                                " - ",
                                                currentVariation === null || currentVariation === void 0 ? void 0 : currentVariation.name,
                                                " - ",
                                                selectedHand === 'left' ? 'Left' : 'Right',
                                                " Hand"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-800 text-white px-4 py-2 rounded inline-block font-mono text-lg",
                                                children: currentChord.notes.join(' - ')
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-6 overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Piano$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                activeFingerings: currentFingerings
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FingerDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                hand: selectedHand,
                                                fingerings: currentFingerings,
                                                className: "max-w-md"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 p-4 bg-blue-50 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-blue-800 mb-2",
                                                    children: "Chord Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Notes:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                currentChord.notes.join(', ')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Difficulty:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                currentVariation === null || currentVariation === void 0 ? void 0 : currentVariation.difficulty
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this),
                                                        (currentVariation === null || currentVariation === void 0 ? void 0 : currentVariation.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Description:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                currentVariation.description
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center py-6 text-gray-500 text-sm",
                    children: "Practice makes perfect! 🎵"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(Home, "r2L2QxYJv9hPE4jWVu3fYpkQ/j8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFavorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_0f8268ac._.js.map