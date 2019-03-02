import { GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('Aural update', () => {
    it('Should generate an aural update', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    }); 
}); 

describe('Restart game', () => {
    it('Should restart the game on `restartGame()`', () => {
        const correctAnswer = 50;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('Make guess', () => {
    it('Should make a guess when prompted by user', () => {
        const guess = 25;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});