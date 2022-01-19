module.exports = function check(str, bracketsConfig) {
  let mas = [];
  let open = [];
  let pairs = {};
  bracketsConfig.forEach(element => {
    open.push(element[0]);
    pairs[element[1]] = element[0];
  });
  for (let i = 0; i < str.length; i++){
    if (open.includes(str[i]) && Object.keys(pairs).includes(str[i])){
      if (mas[mas.length - 1] === str[i]){
        mas.pop();
      }
      else {
        mas.push(str[i])
      }
    }
    else if (open.includes(str[i])){
      mas.push(str[i]);
    }
    else {
      if (mas.length === 0){
        return false;
      }
      if (pairs[str[i]] === mas[mas.length - 1]){
        mas.pop();
      }
      else {
        return false;
      }
    }
  }
  return mas.length === 0;
}
