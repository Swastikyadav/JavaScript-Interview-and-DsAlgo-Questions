## Sliding Window Pattern

Caculating something with the contiguous sub array or sub list of a given size "k".
```js
[7, 43, 4, 6, 8, 11, 2]
[i         j] --> Sliding Window ([7, 43, 4, 6]) of size "4".
```
Everytime we slide this window, remove first element (7) from calculation and add next element (6) in the calculation and window.

* When size of sliding window in not fixed.
First we will add-up element from the beginning of array until their condition becomes false in prespective with the given unit.

These elements constitute our sliding window.

After this, we will keep adding one element in sliding window in a stepwise fashion.

We will shrink the window from the beginning.
