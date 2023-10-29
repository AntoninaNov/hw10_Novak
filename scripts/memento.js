// Originator: Holds internal state that we want to save and restore.
class QuizSession {
    constructor() {
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
    }

    answerQuestion(isCorrect) {
        this.questionsAnswered++;
        if (isCorrect) this.correctAnswers++;
    }

    createMemento() {
        return new QuizSessionMemento(this.questionsAnswered, this.correctAnswers);
    }

    restore(memento) {
        this.questionsAnswered = memento.questionsAnswered;
        this.correctAnswers = memento.correctAnswers;
    }
}

// Memento: Capturing and storing state snapshots.
class QuizSessionMemento {
    constructor(questionsAnswered, correctAnswers) {
        this.questionsAnswered = questionsAnswered;
        this.correctAnswers = correctAnswers;
        Object.freeze(this); // Immutable to ensure state integrity.
    }
}

// Caretaker: Manages saved states without knowing their content.
class Caretaker {
    constructor() {
        this.history = [];
    }

    saveMemento(memento) {
        this.history.push(memento);
    }

    getMemento(index) {
        return this.history[index];
    }
}
