const permutator = (...inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        debugger;
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), [...m, ...next])
     }
   }
 }

 permute(inputArr)

 return result;
}

console.log(permutator(1, 2, 3));