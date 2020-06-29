const parseData = (input) => {
  let {column, data} = input;
  // let [nameObj, ageObj, genderObj, birthdayObj] = column;
  // let {name: name} = {...nameObj};
  // let {name: age} = {...ageObj};
  // let {name: gender} = {...genderObj};
  // let {name: birthday} = {...birthdayObj};
  let array = [];
  for (let item of data) {
    array.push(
        {name: item[0], age: item[1], gender: item[2], birthday: item[3]});
  }
  return array;
};

export {parseData};
