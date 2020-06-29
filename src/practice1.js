const parseData = (input) => {
  let {data} = input;
  let array = [];
  for (let item of data) {
    array.push(
        {name: item[0], age: item[1], gender: item[2], birthday: item[3]});
  }
  return array;
};

export {parseData};
