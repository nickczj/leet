//  Implement an algorithm to find the kth to last element of a singly linked list.


// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], K=7
// output: 3

// find length of input
// find index of element to return: indexToReturn = input.length - (k - 1)
// return the element at that index


// HINTS:
// 1. What if you knew the linked list size? What is the difference between finding the Kth-to­ last element and finding the Xth element?
// 2. If you don't know the linked list size, can you compute it? How does this impact the runtime?
// 3. Try implementing it recursively. If you could find the (K-1)th to last element, can you find the Kth element?
// 4. You might find it useful to return multiple values. Some languages don't directly support this, but there are workarounds in essentially any language. What are some of those workarounds?
// 5. Can you do it iteratively? Imagine if you had two pointers pointing to adjacent nodes and they were moving at the same speed through the linked list. When one hits the end of the linked list, where will the other be?

/*def factorial(x):
    if x == 1: # This is the base case
        return 1

    else: # This is the recursive case
        return(x * factorial(x-1))

print(factorial(4))*/