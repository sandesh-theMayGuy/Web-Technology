let arr = [13,4,1,2,4,19,3];

max = arr[0];
min = arr[0];
for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i];
    }

    if(min>arr[i]){
        min=arr[i];
    }
}

console.log("Maximum element : ",max,"\nMinimum element : ",min);