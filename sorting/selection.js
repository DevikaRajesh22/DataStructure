function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    return arr;
}
const arr=[9,-5,2,-4,0,1,-2];
console.log(selectionSort(arr));