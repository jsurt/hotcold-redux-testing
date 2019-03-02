import { hotColdReducer } from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('HotCold reducer', () => {
    const initialState = {
        guesses: [],
        feedback: 'Make your guess',
        auralStatus: '',
        correctAnswer: 75
    };
    it('Should add a guess to the guess-array on guess', () => {
        const state = hotColdReducer(initialState, makeGuess(25));
        expect(state.guesses.length).toEqual(1);
    });
    it('Should give feedback when user guesses', () => {
        const state = hotColdReducer(initialState, makeGuess(25));
        expect(state.feedback).not.toBe('Make your guess');
    });
    it("You're Ice Cold... when 50 or more digits away", () => {
        const state = hotColdReducer(initialState, makeGuess(1));
        expect(state.feedback).toEqual("You're Ice Cold...");
    });
    it("You're Cold... when 30 or more digits away", () => {
        const state = hotColdReducer(initialState, makeGuess(40));
        expect(state.feedback).toEqual("You're Cold...");
    });
    it("You're Warm. when 10 or more away", () => {
        const state = hotColdReducer(initialState, makeGuess(60));
        expect(state.feedback).toEqual("You're Warm.");
    });
    it("You're Hot! when 10 or less away", () => {
        const state = hotColdReducer(initialState, makeGuess(70));
        expect(state.feedback).toEqual("You're Hot!");
    });
    it("You got it! when 10 or more away", () => {
        const state = hotColdReducer(initialState, makeGuess(75));
        expect(state.feedback).toEqual("You got it!");
    });
    it('Reducer should reset the state and game', () => {
        const correctAnswer = 50;
        const state = hotColdReducer(initialState, restartGame(50));
        expect(state.guesses.length).toEqual(0);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toEqual(correctAnswer);
    });
});