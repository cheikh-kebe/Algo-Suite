const fs = require("fs");
const list = process.argv[2];

try {
  const data = fs.readFileSync(list, "utf8");
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
//exercice 1 avec O(n²)
checkNumbers = (list) => {
  let count = 1
	const k = 18

	for (let i = 1; i <= (list.length - 1); i++){
		for (let j = 0 ; j < (list.length - i) ; j++){
      
			//console.log(list[i-1] + list[j+i])

			if (list[i-1] + list[j+i] === k){
			return console.log(true);
			}
		}
	}
	return console.log(false);
};
console.log(checkNumbers(fList))