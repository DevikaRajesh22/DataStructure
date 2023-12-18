function heapify(arr, length, parentIndex) {
    let largest = parentIndex;
    let left = 2 * parentIndex + 1;
    let right = 2 * parentIndex + 2;
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != parentIndex) {
        [arr[largest], arr[parentIndex]] = [arr[parentIndex], arr[largest]];
        heapify(arr, length, parentIndex);
    }
    return arr;
}
function heapSort(arr) {
    let length = arr.length;
    let lastParentIndex = Math.floor(length / 2 - 1);
    let lastChildIndex = length - 1;
    while (lastParentIndex >= 0) {
        heapify(arr, length, lastParentIndex);
        lastParentIndex--;
    }
    while (lastChildIndex >= 0) {
        [arr[0], arr[lastChildIndex]] = [arr[lastChildIndex], arr[0]];
        heapify(arr, lastChildIndex, 0);
        lastChildIndex--;
    }
    return arr;
}
console.log(heapSort([4, 6, 3, 2]));