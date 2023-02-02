let arr = [1,4,2,5,3,1];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;           
        }
    }
}

console.log("Ascending order : ",arr);

let j = arr.length-1;
for(let i=0; i<(arr.length/2); i++){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 

    j--;
}

console.log("Descending Order : ",arr);
