function hasContigousSubArray(arr, target) {
    let currentSum = 0;

    //Initialize an empty object to store seen sums and their corresponding indices
    let seen = {}

    //iterate through the array
    for (let i = 0; i < arr.length; i++) {
        //Add the current number to the current sum
        currentSum += arr[i]

        //Check if the current minus the target is already seen
        if (currentSum - target in seen) {
            return true;
        }

        //update the object with current sum and it's index
        seen[currentSum] = i
    }
    //If no match found return false
    return false;
}

//example 1
const arr = [1, 2, 4, 6, 7, 3, 5, 6]
const target = 15

//example 2
const arr1 = [1, 2, 3, 8, 6, 3, 4]
const target1 = 15

//This returns true
console.log(hasContigousSubArray(arr, target))

//This returns false
console.log(hasContigousSubArray(arr1, target1))