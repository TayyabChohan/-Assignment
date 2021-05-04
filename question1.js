function maxActivities(s,f, n)
{
    let i;
     let j;
    console.log("activities are selected");
     
    i = 0;
    console.log(i);
     
    //activities
    for (j = 1; j < n; j++)
    {
         // If this activity has start time greater than 
        
         if (s[j] >= f[i])
         {
              console.log(j);
              i = j;
          }

    }

}

var s = [1, 3, 0, 5, 8, 5];
var f= [2, 4, 6, 7, 9, 9];
n = s.length;
maxActivities(s, f, n);
console.log(maxActivities(s,f, n)); 