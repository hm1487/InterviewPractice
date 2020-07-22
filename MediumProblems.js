/*
Three Number Sum
Iterate over an array to generate all three number combinations that reach the targetSum
Could probably be somewhat optimized in terms of runtime
Currently O(n^3)
*/

function threeNumberSum(array, targetSum) {
	var swap = 1
	while (swap !== 0){
		swap = 0
		for (var x = 0; x < array.length; x++){
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
	var retArr = [];
	var tempArr = []
	console.log(array)
	for (var x = 0; x < array.length; x++){
		for (var y = 0; y < array.length; y++){
			for (var z = 0; z < array.length; z++){
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