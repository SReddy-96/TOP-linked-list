class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // append to end of list
  append(value) {
    const node = new Node(value);
    let current;

    // if empty list
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // keep iterating till next is null
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.length++;
  }

  // add to the start of the list.

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  // return the size of the list
  size() {
    console.log(`This list is ${this.length} nodes long`);
  }

  // return the first node of the list
  listHead() {
    console.log(this.head);
  }

  // return the last node of the list
  tail() {
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log(current);
  }

  // return the node at the given index
  at(index) {
    if (index > 0 && index > this.length) {
      return console.log("index out of bounds");
    }

    if (this.head == 0) {
      this.listHead();
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    console.log(current);
  }

  // remove the last element of the list
  pop() {
    let current = this.head;
    let previous;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.size--;
    this.printList();
  }

  //  return true if the list contains the value
  contains(value) {
    let current = this.head;

    while (current.value != value) {
      if (!current.nextNode) {
        return false;
      }
      current = current.nextNode;
    }

    return true;
  }

  // return the index of the node containing the value
  find(value) {
    let current = this.head;
    let count = 0;

    if (this.head.value == value) {
      return console.log("value is at index 0");
    }

    while (current.value != value) {
      if (!current.nextNode) {
        return console.log("value does not exist in the list");
      }
      current = current.nextNode;
      count++;
    }

    return console.log(`value is at index ${count}`);
  }

  // represent the list as a string e.g. ( value ) -> ( value ) -> ( value ) -> null
  printList() {
    let current = this.head;
    let string = "";

    while (current) {
      string += `(${current.value}) -> `;
      current = current.nextNode;
    }

    console.log(`${string} Null`);
  }

  // insert a node at a specific index
  insertAt(value, index) {
    if (index > 0 && index > this.length) {
      return console.log("index out of bounds");
    }
    let current = this.head;
    let previous;

    if (index === 0) {
      this.prepend(value);
    }

    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = new Node(value, current);
    this.size++;
  }

  // remove a node in a specific index.
  removeAt(index) {
    if (index > 0 && index > this.length) {
      return console.log("index out of bounds");
    }
    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.nextNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.nextNode;
      }

      previous.nextNode = current.nextNode;
      this.size--;
    }
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const ll = new linkedList();

ll.prepend(11);
ll.append(21);
ll.prepend(55);
ll.append(47);

ll.printList();
ll.size();
ll.listHead();
ll.tail();
ll.at(2);
console.log(ll.contains(21));
console.log(ll.contains(500));
ll.find(11);
ll.find(500);
ll.find(47);

ll.pop();

ll.insertAt(100, 2);
ll.printList();

ll.removeAt(2);
ll.removeAt(0);
ll.printList();
