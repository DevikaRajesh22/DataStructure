function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let numberToInsert=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=numberToInsert;
    }
}
const arr=[9,-3,7,-2,0,1,4];
insertionSort(arr);
console.log(arr);