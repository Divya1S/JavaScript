// Pure quiz logic — no DOM, no browser APIs, no globals.
// Everything here is a pure function so it can be unit-tested in Node.

// Fisher–Yates shuffle. Returns a NEW array; never mutates the input.
// `rng` is injectable so tests can supply a deterministic source.
export function shuffle(array, rng = Math.random){
    const copy = [...array];
    for(let i = copy.length - 1; i > 0; i--){
        const j = Math.floor(rng() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Sorted, de-duplicated list of categories present in the data.
export function uniqueCategories(questions){
    return [...new Set(questions.map(q => q.category))].sort();
}

// "All" acts as a wildcard for either dimension.
export function getFilteredQuestions(questions, category, difficulty){
    return questions.filter(q =>
        (category === "All" || q.category === category) &&
        (difficulty === "All" || q.difficulty === difficulty)
    );
}

// Filter, then shuffle the question order AND each question's answers.
export function prepareQuestions(questions, category, difficulty, rng = Math.random){
    return shuffle(getFilteredQuestions(questions, category, difficulty), rng)
        .map(q => ({ ...q, answers: shuffle(q.answers, rng) }));
}

export function getCorrectAnswer(question){
    const correct = question.answers.find(a => a.correct);
    return correct ? correct.text : null;
}

export function isAnswerCorrect(question, answerText){
    return getCorrectAnswer(question) === answerText;
}

export function computeFilterKey(category, difficulty){
    return `${category}|${difficulty}`;
}

export function isNewHighScore(score, previousBest){
    return score > previousBest;
}

