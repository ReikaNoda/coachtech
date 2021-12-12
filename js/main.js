//JavaScriptテスト問題

//問題①
const array = [2, 4, 7, 5, 4, 3, 8];

const array2 = array.filter(function(x, i, self){
  return self.indexOf(x) === i;
});

console.log(array2);





//問題②
function isLeapYear(year) {
    return (year%4 == 0) && (year%100 != 0) || (year%400 == 0);
}

let checkYear = 2020;

if(isLeapYear(checkYear)){
  console.log(checkYear+'年はうるう年です');
}else{
  console.log(checkYear+'年はうるう年ではありません');
}


let checkYear2 = 2021;

if(isLeapYear(checkYear2)){
  console.log(checkYear2+'年はうるう年です');
}else{
  console.log(checkYear2+'年はうるう年ではありません');
}



