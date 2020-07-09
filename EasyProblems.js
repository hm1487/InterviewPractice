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
The helper function is required as there needs to be someway to track variables
Having just the sum function will not suffice
*/
function branchSums(root) {
var arr = [];
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
        var queue = [this];
            var retArr = [];
            while(queue.length != 0){
                
                var currNode = queue.shift();
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
	for (var x = 0; x < array.length; x++){
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
    var arr = ["","",""]
      for (var entry of array){
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
  