import {validateUserAndPassword} from './ButtonLoadingAdapter';

describe('Adapter', () => {

    test('return false if user or password is empty', () => {
        expect(validateUserAndPassword('', 'password')).toBe(false);
        expect(validateUserAndPassword('user', '')).toBe(false);
        expect(validateUserAndPassword('', '')).toBe(false);
    });

    test('returns true if user and password are not empty', () => {
        expect(validateUserAndPassword('user', 'password')).toBe(true);
    });

});