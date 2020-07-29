/*
Bubble Sort function for sorting
Built-in JS Sort cannot handle negative numbers so heres a standin
*/
function swapArray(array){
	let swap = 1
	while (swap !== 0){
		swap = 0
		for (let x = 0; x < array.length; x++){
			if (x+1 < array.length){
				if (array[x] > array[x+1]){
					let temp = array[x];
					array[x] = array[x+1]
					array[x+1] = temp;
					swap+=1
				} 
			}
		}
	}
}


/*
Three Number Sum
Iterate over an array to generate all three number combinations that reach the targetSum
Could probably be somewhat optimized in terms of runtime
Currently O(n^3)
*/

function threeNumberSum(array, targetSum) {
	swapArray(array);
	let retArr = [];
	let tempArr = []
	console.log(array)
	for (let x = 0; x < array.length; x++){
		for (let y = 0; y < array.length; y++){
			for (let z = 0; z < array.length; z++){
				if (x !== y && y !== z && x !== z){
					if (array[x] < array[y] && array[y] < array[z]){
						if ((array[x] + array[y] + array[z]) === targetSum){
							tempArr = [array[x], array[y], array[z]];
							retArr.push(tempArr)
							tempArr = [];
						}
					}
				}
			}
		}
	}
	return retArr;
}

/*
Smallest Difference
Given two arrays, find the two numbers that result in the smallest absolute diff
Sort the two arrays, then using a singular loop that points to each one, iterate through and find the lowest diff
*/

function smallestDifference(arrayOne, arrayTwo) {
   const array = ["",""];
   swapArray(arrayOne);
   swapArray(arrayTwo);
   let diff = null
   let x = 0;
   let y = 0;
   while (x < arrayOne.length && y < arrayTwo.length){
	   if (diff === null || Math.abs(arrayOne[x]-arrayTwo[y]) < diff){
		   diff = Math.abs(arrayOne[x] - arrayTwo[y]);
		   array[0] = arrayOne[x];
		   array[1] = arrayTwo[y];
	   } 
	   
	   if (arrayOne[x] < arrayTwo[y]){
		   x+=1
	   } else if (arrayTwo[y] < arrayOne[x]){
		   y+=1
	   } else {
		   return array;
	   }
   }
   return array;
}


