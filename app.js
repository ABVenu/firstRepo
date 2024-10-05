/// prime number in that array 
let arr = [2,7,8,89,76,54,23,13,,17,128,19]
for(let i=0;i<arr.length;i++){
    ///arr[i] is the current number 
    // I need to run another loop to check whether current number is prime
    let count = 0;
    for(let j=1;j<=arr[i];j++){
       if(arr[i]%j==0){
        count++
       }
    }
    if(count!=2){
        console.log(arr[i], "it is not a Prime Number")
    }
}