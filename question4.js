function maxMeetings(start, end, n) {
  let temp = [];

  //store the starting and finish time
  for (let i = 0; i < n; i++) {
    temp.push([start[i], end[i], i + 1]);
  }
  console.log(temp);
   //sort data
  temp.sort(function (x, y) {
    if (x[1] == y[1]) {
      return x[2] - y[2];
    }
    return x[1] - y[1];
  });

  let last = 0;
  let resut = 0;
  for (let i = 0; i < n; i++) {
   
    if (temp[i][0] > last) {
      resut++;
      last = temp[i][1];
    }
  }
  return resut;
}

var start = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
var end = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];
n = 8;
maxMeetings(start, end, n);
console.log(maxMeetings(start, end, n));
