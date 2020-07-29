/*
Three Number Sum
Iterate over an array to generate all three number combinations that reach the targetSum
Could probably be somewhat optimized in terms of runtime
Currently O(n^3)
*/

function threeNumberSum(array, targetSum) {
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