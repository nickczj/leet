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
        if ((checker & (1 << bitAtIndex)) > 0) return false;

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


// Question 3: URLify
// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string. 
// (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
/**
 * Given a string return the URL encoded string
 * currently, only spaces are encoded (' ' -> %20)
 * other character encoding is not implemented.
 * 
 * @param s - The input string of word
 * @returns encoded URL string
 */

const urlify = (s: string): string => {
    let isLeading: boolean = true
    let out: string = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            isLeading = false;
        }

        if (!isLeading) {
            out += s[i];
        }
    }
    return out
}

describe('URLify', () => {

    let s: string;

    beforeEach(() => s = '')

    it('retuns a string with spaces replaced with %20', () => {
        s = 'Mr John Smith   ';
        expect(urlify(s)).toBe('Mr%20John%20Smith');
    })
})

// Chapter 2 - Question 1
// Remove Dups! Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?


class List {
    val: number
    next: List | null
    constructor(val?: number, next?: List | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
    }
}

const unDup = (l: List): List => {
    //* create new hashtable T
    //* get the head of the list
    //* run through each value. insert into hashtable T if doesn't exist.
    //* prev = null;
    /* loop (elements as element){
            if (exist in T)
            {
                //* next = element.next
                //* remove element
                //get prev, set prev.next = next
            }
            else
            {
                add to T
                prev = element;
            }
        }
    */
    //* return list
}

