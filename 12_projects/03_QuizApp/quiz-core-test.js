import { test } from "node:test";
import assert from "node:assert/strict";

import {
    shuffle,
    uniqueCategories,
    getFilteredQuestions,
    prepareQuestions,
    getCorrectAnswer,
    isAnswerCorrect,
    computeFilterKey,
    isNewHighScore,
} from "./quiz-core.js";

// A tiny fixture covering 2 categories and 2 difficulties.
const QUESTIONS = [
    {
        category: "Science", difficulty: "Easy", question: "Largest animal?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
        ],
    },
    {
        category: "Science", difficulty: "Hard", question: "Symbol for tungsten?",
        answers: [
            { text: "W", correct: true },
            { text: "Tg", correct: false },
        ],
    },
    {
        category: "Art", difficulty: "Easy", question: "Painted the Mona Lisa?",
        answers: [
            { text: "Da Vinci", correct: true },
            { text: "Picasso", correct: false },
        ],
    },
];

/* ---------- shuffle ---------- */

test("shuffle does not mutate the input", () => {
    const input = [1, 2, 3, 4, 5];
    const snapshot = [...input];
    shuffle(input);
    assert.deepEqual(input, snapshot);
});

test("shuffle preserves all elements (is a permutation)", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    assert.equal(result.length, input.length);
    assert.deepEqual([...result].sort(), [...input].sort());
});

test("shuffle is deterministic given a fixed rng", () => {
    // rng() === 0 always picks j=0, so each step swaps copy[i] with copy[0].
    const result = shuffle([1, 2, 3], () => 0);
    assert.deepEqual(result, [2, 3, 1]);
});

/* ---------- categories ---------- */

test("uniqueCategories returns sorted, de-duplicated categories", () => {
    assert.deepEqual(uniqueCategories(QUESTIONS), ["Art", "Science"]);
});

/* ---------- filtering ---------- */

test("getFilteredQuestions filters by category", () => {
    const result = getFilteredQuestions(QUESTIONS, "Science", "All");
    assert.equal(result.length, 2);
    assert.ok(result.every(q => q.category === "Science"));
});

test("getFilteredQuestions filters by difficulty", () => {
    const result = getFilteredQuestions(QUESTIONS, "All", "Easy");
    assert.equal(result.length, 2);
    assert.ok(result.every(q => q.difficulty === "Easy"));
});

test("getFilteredQuestions combines category and difficulty", () => {
    const result = getFilteredQuestions(QUESTIONS, "Science", "Hard");
    assert.equal(result.length, 1);
    assert.equal(result[0].question, "Symbol for tungsten?");
});

test("getFilteredQuestions with All/All returns everything", () => {
    assert.equal(getFilteredQuestions(QUESTIONS, "All", "All").length, QUESTIONS.length);
});

test("getFilteredQuestions returns empty for a combo with no matches", () => {
    assert.deepEqual(getFilteredQuestions(QUESTIONS, "Art", "Hard"), []);
});

/* ---------- prepareQuestions ---------- */

test("prepareQuestions keeps the filtered count and all answers", () => {
    const prepared = prepareQuestions(QUESTIONS, "Science", "All", () => 0);
    assert.equal(prepared.length, 2);
    prepared.forEach(q => assert.equal(q.answers.length, 2));
});

test("prepareQuestions does not mutate the source questions", () => {
    const snapshot = JSON.stringify(QUESTIONS);
    prepareQuestions(QUESTIONS, "All", "All", () => 0);
    assert.equal(JSON.stringify(QUESTIONS), snapshot);
});

/* ---------- answer helpers ---------- */

test("getCorrectAnswer returns the correct option's text", () => {
    assert.equal(getCorrectAnswer(QUESTIONS[0]), "Blue Whale");
});

test("isAnswerCorrect matches only the correct text", () => {
    assert.equal(isAnswerCorrect(QUESTIONS[0], "Blue Whale"), true);
    assert.equal(isAnswerCorrect(QUESTIONS[0], "Shark"), false);
});

/* ---------- misc ---------- */

test("computeFilterKey joins category and difficulty", () => {
    assert.equal(computeFilterKey("Science", "Hard"), "Science|Hard");
});

test("isNewHighScore is true only when strictly greater", () => {
    assert.equal(isNewHighScore(5, 4), true);
    assert.equal(isNewHighScore(4, 4), false);
    assert.equal(isNewHighScore(3, 4), false);
});