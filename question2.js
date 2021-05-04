function Equilibium(arr, n){
    var ftsum; 
    var rsum;
    var i,j;
         for(i=0; i<n; ++i)
         {
             ftsum = 0;
              for(let j=0; j<i; j++)
              ftsum += arr[j];
               
              rsum = 0;
              for(let j=i+1; j<n; j++)
              rsum +=arr[j];
               
             
              if(ftsum == rsum)
                 return arr[i];
         }
          
            return -1;
}
var arr= [1]
n=arr.length;
Equilibium(arr,n)
console.log(Equilibium(arr,n))
