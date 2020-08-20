// The List that contains Nodes
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// To define index
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Value Adds at index[0]
LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

// Value Adds at last[index]
LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// Remove Head
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// Remove Tail
LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

// Search Through Nodes
LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue)
      return currentNode.value + " {Found it}";
    currentNode = currentNode.next;
  }
  return searchValue + " Not Found";
};

// Search Through Nodes
LinkedList.prototype.indexOf = function (searchValue) {
  let indexes = [];
  let currentIndex = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};

let ll = new LinkedList();

// // Value Adds to the Head
ll.addToHead(300); /* Third Head */
ll.addToHead(200); /* Second Head */
ll.addToHead(100); /* First Head */

// // Value Adds to the Tail
ll.addToTail(400); /* Third Tail */
ll.addToTail(500); /* Second Tail */
ll.addToTail(600); /* First Tail */

// Logs The Correct List
console.log("LOGS ACCORD TO ARGUMENTS PASSED");
console.log(ll.tail.prev.prev);

console.log("Line Break");

// Logs Everything
console.log("LOGS EVERTHING");
console.log(ll);

console.log("Line Break");

// removing head
console.log("HEAD REMOVED");
ll.removeHead();
console.log(ll.removeHead());

console.log("Line Break");

// removing tail
console.log("TAIL REMOVED");
ll.removeTail();
console.log(ll.removeTail());

console.log("Line Break");

// removing tail
// Added a value to the tail to search
console.log("SEARCH METHOD");
ll.addToTail("NumbFuck");
ll.addToHead("Dum");

console.log(ll.search("d"));

console.log("Line Break");

// Finding Indexes
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(400);
ll.addToTail(400);
ll.addToTail(100);
ll.addToHead(600);
ll.addToHead(400);
ll.addToHead(100);
ll.addToHead(500);

console.log(ll.indexOf(100));

// const node3 = new Node(39, null, "node2");
// const node2 = new Node(29, "node3", "node1");
// const node1 = new Node(19, "node2", null);
