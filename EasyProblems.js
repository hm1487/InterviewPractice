//class declarations
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

//Problems

/*
Binary Tree Branch Sum
In an array, return the sum of all the branches within a BST
Try to go with a recursive approach
The helper function is required as there needs to be someway to track letiables
Having just the sum function will not suffice
*/
function branchSums(root) {
    const arr = [];
    helper(root, arr, 0)
    return arr;
}

function helper(root,arr,total){
    if (root == null){
        return;
    }
    if (root.left == null && root.right == null){
        arr.push(total + root.value);
    }
    
    helper(root.left, arr, total + root.value);
    helper(root.right, arr, total + root.value);
}
//==============================================

/*
Depth First Search
The children in this Node structure are presented in an array fashion
Do a depth first search, and return the names of all the nodes in the order that they were visited
Create a queue and everytime that new children are found, we put them at the beginning of the queue
Pop the node being visited at every step from the front of the array
*/

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        let queue = [this];
        let retArr = [];
        while(queue.length != 0){
            
            let currNode = queue.shift();
            retArr.push(currNode.name);
            queue = currNode.children.concat(queue);
            console.log(queue);
        }
        return retArr
            
    }

}

//==============================================

/*
Product Sum
Return the sum of an array that has arrays within it
For the sub arrays, the sum of that array is the sum of the numbers * the depth
*/

function productSum(array, multiplyer = 1) {
	let sum = 0;
	for (let x = 0; x < array.length; x++){
		if (Array.isArray(array[x])){
			sum += productSum(array[x],multiplyer+1)
		} else {
			sum += array[x]
		}
	}
	return sum * multiplyer
}

//==============================================

/*
Three Largest Numbers
Given an unsorted array and without sorting the array, track the three largest numbers in the array and return that
Set an array up in the beginning with 3 entries and keep track of that
When a number is larger than all three other numbers, the numbers all get shifted down, with the last number in the 0 index getting erased
Actually fairly easy when you wrap your head around it
*/


function findThreeLargestNumbers(array) {
    const arr = ["","",""]
    for (let entry of array){
        if (arr[2] == "" || entry > arr[2]){
            let temp = arr[2];
            arr[2] = entry;
            let temp1 = arr[1];
            arr[1] = temp;
            arr[0] = temp1;	
        } else if (entry > arr[1] || arr[1] == ""){
            let temp = arr[1];
            arr[1] = entry;
            arr[0] = temp;
        } else if (entry > arr[0] || arr[0] == ""){
            arr[0] = entry;
        }
    }
      return arr;
  }

/*
Binary Search
Implement Binary Search
Have two pointers pointing at both the front and the back of the array
Check on every iteration the size of the array, and cutting the array in half whenever necessary
*/


function binarySearch(array, target) {
    let backPtr = array.length-1;
    let frontPtr = 0;
    let counter = 0;
    while (frontPtr !== backPtr){
        let mid = Math.floor((frontPtr + backPtr) / 2);
        if (frontPtr + 1 === backPtr){
            if (array[frontPtr] === target)
                return frontPtr;
            else if (array[backPtr] === target)
                return backPtr;
            else
                return -1;
        }
        if (array[mid] > target){
            backPtr = mid;
        } else if (array[mid] < target){
            frontPtr = mid;
        } else if (array[mid] === target){
            return mid;
        }
    }
    return -1;
}

/*
Implement selectionSort
Iterate through an array swapping entries without creating another array and returning a sorted array
*/

function selectionSort(array) {
    for (let x = 0; x < array.length; x++){
          let lowest = null;
          for (let y = x; y < array.length; y++){
              if (lowest === null){
                  lowest = y;
              } else if (array[lowest] > array[y]){
                  lowest = y;
              }
          }
          if (lowest !== x){
              let temp = array[x];
              array[x] = array[lowest];
              array[lowest] = temp;
          }
      }
      return array;
  }

/*
Palindrome Checker
Cut the string in half, reverse one of them and check if they are equivalent
*/

function isPalindrome(string) {
    let half = Math.floor(string.length/2);
    let iter = string.length-1
    for (let x = 0; x < half; x++){
        if (string[x] !== string[iter])
            return false;
        iter-=1
    }
    return true;
}
