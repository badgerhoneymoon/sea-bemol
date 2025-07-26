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
"[project]/components/FavoritesPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FavoritesPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FavoritesPanel(param) {
    let { favorites, recentChords, onChordSelect, onRemoveFavorite, className = '' } = param;
    const handleChordClick = (favoriteChord)=>{
        onChordSelect(favoriteChord.chord.root, favoriteChord.chord.quality, favoriteChord.variationIndex);
    };
    const formatChordSymbol = (chord)=>{
        return chord.chord.symbol;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-lg p-6 ".concat(className),
        children: [
            recentChords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-700 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: "🕒"
                            }, void 0, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            "Recent Chords"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FavoritesPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-2",
                        children: recentChords.slice(0, 10).map((recent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleChordClick(recent),
                                className: "p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-center font-medium",
                                children: formatChordSymbol(recent)
                            }, recent.id, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/FavoritesPanel.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FavoritesPanel.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-3 text-gray-700 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: "⭐"
                            }, void 0, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            "Favorites",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full",
                                children: favorites.length
                            }, void 0, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FavoritesPanel.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    favorites.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-2",
                                children: "🎵"
                            }, void 0, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No favorite chords yet"
                            }, void 0, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Click the star icon to add chords to your favorites"
                            }, void 0, false, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FavoritesPanel.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: favorites.map((favorite)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleChordClick(favorite),
                                        className: "flex-1 text-left font-medium text-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: formatChordSymbol(favorite)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FavoritesPanel.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            favorite.chord.variations[favorite.variationIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-sm text-gray-600",
                                                children: [
                                                    "(",
                                                    favorite.chord.variations[favorite.variationIndex].name,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FavoritesPanel.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FavoritesPanel.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onRemoveFavorite(favorite.id),
                                        className: "p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-lg transition-colors duration-200",
                                        title: "Remove from favorites",
                                        children: "❌"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FavoritesPanel.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, favorite.id, true, {
                                fileName: "[project]/components/FavoritesPanel.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/FavoritesPanel.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FavoritesPanel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            (favorites.length > 0 || recentChords.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 pt-4 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 justify-center",
                    children: [
                        favorites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (confirm('Clear all favorites?')) {
                                // This would need to be passed down as a prop
                                }
                            },
                            className: "text-xs text-gray-500 hover:text-gray-700 px-3 py-1 rounded",
                            children: "Clear Favorites"
                        }, void 0, false, {
                            fileName: "[project]/components/FavoritesPanel.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this),
                        recentChords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (confirm('Clear recent chords?')) {
                                // This would need to be passed down as a prop
                                }
                            },
                            className: "text-xs text-gray-500 hover:text-gray-700 px-3 py-1 rounded",
                            children: "Clear Recent"
                        }, void 0, false, {
                            fileName: "[project]/components/FavoritesPanel.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FavoritesPanel.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/FavoritesPanel.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FavoritesPanel.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = FavoritesPanel;
var _c;
__turbopack_context__.k.register(_c, "FavoritesPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/SearchChords.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SearchChords
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$chords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/chords.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SearchChords(param) {
    let { onChordSelect, className = '' } = param;
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchChords.useMemo[searchResults]": ()=>{
            if (!searchQuery.trim()) return [];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$chords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchChords"])(searchQuery).slice(0, 8); // Limit to 8 results
        }
    }["SearchChords.useMemo[searchResults]"], [
        searchQuery
    ]);
    const handleChordClick = (chord)=>{
        onChordSelect(chord.root, chord.quality);
        setSearchQuery('');
        setIsOpen(false);
    };
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setSearchQuery(value);
        setIsOpen(value.trim().length > 0);
    };
    const handleInputFocus = ()=>{
        if (searchQuery.trim().length > 0) {
            setIsOpen(true);
        }
    };
    const handleInputBlur = ()=>{
        // Delay closing to allow for clicks on results
        setTimeout(()=>setIsOpen(false), 200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: searchQuery,
                        onChange: handleInputChange,
                        onFocus: handleInputFocus,
                        onBlur: handleInputBlur,
                        placeholder: "Search chords... (e.g., Cmaj7, F#m, G7)",
                        className: "w-full px-4 py-3 pl-10 pr-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSearchQuery('');
                            setIsOpen(false);
                        },
                        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchChords.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isOpen && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-64 overflow-y-auto",
                children: searchResults.map((chord, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleChordClick(chord),
                        className: "w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-lg",
                                            children: chord.symbol
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchChords.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 text-sm text-gray-600",
                                            children: chord.notes.join(' - ')
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchChords.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SearchChords.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        chord.variations.length,
                                        " variation",
                                        chord.variations.length > 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SearchChords.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchChords.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this)
                    }, "".concat(chord.root, "-").concat(chord.quality, "-").concat(index), false, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SearchChords.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            isOpen && searchQuery.trim() && searchResults.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 text-center text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl mb-2",
                        children: "🎼"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            'No chords found for "',
                            searchQuery,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-1",
                        children: 'Try searching for chord symbols like "Cmaj7" or "F#m"'
                    }, void 0, false, {
                        fileName: "[project]/components/SearchChords.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchChords.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchChords.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(SearchChords, "UIQ/9MJaQqkchoSU6QKtIwjcT2g=");
_c = SearchChords;
var _c;
__turbopack_context__.k.register(_c, "SearchChords");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FavoritesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FavoritesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchChords$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchChords.tsx [app-client] (ecmascript)");
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
;
;
function Home() {
    _s();
    const [selectedRoot, setSelectedRoot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('C');
    const [selectedQuality, setSelectedQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('major');
    const [selectedHand, setSelectedHand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('right');
    const [selectedVariation, setSelectedVariation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chords');
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('single');
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
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "Interactive guide for piano chord fingerings. Learn proper hand positions for all chord types."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-lg p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-100 p-1 rounded-lg flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('chords'),
                                            className: "px-6 py-3 rounded-md font-medium transition-all ".concat(activeTab === 'chords' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'),
                                            children: "🎹 Chords"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('search'),
                                            className: "px-6 py-3 rounded-md font-medium transition-all ".concat(activeTab === 'search' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'),
                                            children: "🔍 Search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('favorites'),
                                            className: "px-6 py-3 rounded-md font-medium transition-all ".concat(activeTab === 'favorites' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'),
                                            children: [
                                                "⭐ Favorites",
                                                favorites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full",
                                                    children: favorites.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        activeTab === 'chords' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChordSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            selectedRoot: selectedRoot,
                            selectedQuality: selectedQuality,
                            onRootChange: setSelectedRoot,
                            onQualityChange: setSelectedQuality
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        activeTab === 'search' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold mb-4 text-center text-gray-700",
                                    children: "Search Chords"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchChords$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onChordSelect: handleChordSelect
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        activeTab === 'favorites' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FavoritesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            favorites: favorites,
                            recentChords: recentChords,
                            onChordSelect: handleChordSelect,
                            onRemoveFavorite: removeFromFavorites
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
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
                                            lineNumber: 158,
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
                                                            lineNumber: 173,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-3 text-center text-gray-700",
                                            children: "View Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setViewMode('single'),
                                                    className: "px-6 py-3 rounded-lg font-medium transition-all ".concat(viewMode === 'single' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'),
                                                    children: "Single Hand"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setViewMode('comparison'),
                                                    className: "px-6 py-3 rounded-lg font-medium transition-all ".concat(viewMode === 'comparison' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'),
                                                    children: "Both Hands"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                viewMode === 'single' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HandSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedHand: selectedHand,
                                    onHandChange: setSelectedHand
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl shadow-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-gray-700 flex-1 text-center",
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
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleFavoriteToggle,
                                                    className: "p-2 rounded-lg transition-all duration-200 ".concat(isFavorite(currentChord, selectedVariation) ? 'text-yellow-500 bg-yellow-100 hover:bg-yellow-200' : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-100'),
                                                    title: isFavorite(currentChord, selectedVariation) ? 'Remove from favorites' : 'Add to favorites',
                                                    children: isFavorite(currentChord, selectedVariation) ? '⭐' : '☆'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-800 text-white px-4 py-2 rounded inline-block font-mono text-lg",
                                                children: currentChord.notes.join(' - ')
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-6 overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Piano$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                activeFingerings: currentFingerings
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 250,
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
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 255,
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
                                                    lineNumber: 265,
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
                                                                    lineNumber: 267,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                currentChord.notes.join(', ')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Difficulty:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                currentVariation === null || currentVariation === void 0 ? void 0 : currentVariation.difficulty
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 21
                                                        }, this),
                                                        (currentVariation === null || currentVariation === void 0 ? void 0 : currentVariation.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Description:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 26
                                                                }, this),
                                                                " ",
                                                                currentVariation.description
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "text-center py-6 text-gray-500 text-sm",
                    children: "Practice makes perfect! 🎵"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Home, "Eec+Ooonwb40RE2a1BU38hhYt40=", false, function() {
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
}]);

//# sourceMappingURL=_1170d849._.js.map