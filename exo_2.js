const fs = require("fs");
const list_2 = process.argv[2];

try {
  const data = fs.readFileSync(list_2, "utf8");
  var dataSplit = data.split(" ");
  var listTocheck = dataSplit.map(function (i) {
    return Number(i);
  });
  var fList = listTocheck.filter(function (value) {
    return isNaN(value) == false;
  });
  console.log(fList);
} catch (error) {
  console.error(error.message);
};

//exercice 2 avec complexité O(n)
buildingsSunshine = (x, n) => {

  let count = 1
  let min = x[n-1]
    
  for (let j = n-2; j >= 0; j--){

    if (min < x[j]){
      min = x[j]
      count++;
    }
  }
console.log(`le nombre de tour qui a accès au coucher de soleil est de ${count}`)
}
console.log(buildingsSunshine(fList, fList.length));