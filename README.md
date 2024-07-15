# The Odin Project - Linked List

## Objective

To get more hands-on experience with data structures and data handling by creating a linked list class to create, read, and delete data in the linked list.

## Key Points:
- Using classes to create the linked list and nodes.
- Implementing 12 methods for the linked list as per the assignment details:
    1. `append(value)`: Adds a new node containing value to the end of the list
    2. `prepend(value)`: Adds a new node containing value to the start of the list
    3. `size`: Returns the total number of nodes in the list
    4. `listHead`: Returns the first node in the list
    5. `tail`: Returns the last node in the list
    6. `at(index)`: Returns the node at the given index
    7. `pop`: Removes the last element from the list
    8. `contains(value)`: Returns true if the passed in value is in the list and otherwise returns false
    9. `find(value)`: Returns the index of the node containing value, or null if not found
    10. `printList`: Represents LinkedList objects as strings, so they can be printed and previewed in the console. Format: ( value ) -> ( value ) -> ( value ) -> null
    11. `insertAt(value, index)`: Inserts a new node with the provided value at the given index
    12. `removeAt(index)`: Removes the node at the given index

## Reflection

This assignment provided a solid understanding of linked lists, their functionality as a data structure, and how to interact with the data they store. It also offered valuable experience in creating and working with classes.

While arrays are excellent for handling data, they can consume significant memory as they require a contiguous block of memory for their entire length. Linked lists, on the other hand, store data in different memory locations, making them more memory-efficient in certain scenarios. Although not as commonly used as arrays, this assignment offered hands-on experience in implementing linked list algorithms in JavaScript.

## Challenges Encountered
- Implementing correct iteration for data finding
- Accessing class methods
- Keeping track of the list structure

## Skills Acquired
- Using `for...loop` for index iteration
- Invoking class methods using `class.method()`
- Implementing a temporary `previous` variable to track the node before the current one

## Technologies Used
- JavaScript

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/SReddy-96/TOP-linked-list.git
   ```

2. Navigate to the project directory:
   ```
   cd linked-list
   ```

3. If using Node.js, run the main script:
   ```
   node index.js
   ```

4. To use the linked list in your own JavaScript file:
   ```javascript
   const LinkedList = require('./path/to/LinkedList.js');
   
   const myList = new LinkedList();
   // Use the methods...
   ```

Feel free to explore and test the various methods implemented in this linked list project!