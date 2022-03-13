// mutate an array declared with const

const p = [5, 6, 7];
p = [1, 2, 3];          // can't update const variable value
console.log(p);         // will throw error


const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s)          // output: [ 2, 5, 7 ]