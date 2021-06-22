// Question 1
// Is Unique: Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
/**
 * Checks if all characters in a string a unique.
 * Assumes characters are alphabets from a-z
 * 
 * @param word - The input word
 * @returns True is characters are unique and false otherwise
 */
function charactersAreUnique(word: string): boolean {
    let checker: number = 0;

    for (let i: number = 0; i < word.length; i++) {
        let bitAtIndex: number = word[i].charCodeAt(0) - 'a'.charCodeAt(0);

        // duplication
        if((checker & (1 << bitAtIndex)) > 0) return false;

        // continue to another character
        checker = checker | (1 << bitAtIndex);
    }

    // no duplication
    return true;
  }

describe('charactersAreUnique', () => {

    let word: string;

    beforeEach(() => word = '')

    it('returns true when all charaters are unique', () => {
        word = 'abcdefg';
        expect(charactersAreUnique(word)).toBeTruthy();
    })

    it('returns false when characters are not unique', () => {
        word = 'hello';
        expect(charactersAreUnique(word)).toBeFalsy();
    })

    it('fails when given characters that are not a-z', () => {
        word = '12344';
        expect(charactersAreUnique(word)).toBeFalsy();
    })
})

// Question 2
// Check Permutation: Given two strings,
// write a method to decide if one is a permutation of the other.