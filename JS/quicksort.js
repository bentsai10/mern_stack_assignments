function quickSort(arr, start, end){
    if(start < end){
        let partitioningIndex = partition(arr, start, end);

        quickSort(arr, start, partitioningIndex-1);
        quickSort(arr, partitioningIndex+1, end);
    }
}

function partition(arr, start, end){
    let pivot = arr[end];
    let i = start-1;

    for(let j = start; j < end; j++){
        if(arr[j] <= pivot){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let hold = arr[i+1];
    arr[i+1] = arr[end];
    arr[end] = hold;

    return i+1;
}
