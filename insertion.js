function insertionSort(arr) {
    
    for(let i=1; i < arr.length; i++){
        let currentValue = arr[i];
        let j = i-1
        while(j > -1 && currentValue < arr[j]){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

module.exports = insertionSort;

/*


[2,6,4,3,1]
     i
   j
[2,6,6,3,1]
[2,4,6,3,1]
       i
     j
[2,4,6,6,1]
       i
   j

*/