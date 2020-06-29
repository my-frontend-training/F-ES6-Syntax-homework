const inject = (array, arrayObject) => {

  let num = 0;
  for (let obj of arrayObject) {
    num++;
    if (obj.index === 0) {
      array.splice(0, 0, obj.content);
    } else {
      array.splice(obj.index + num - 1, 0, obj.content);
    }
  }
  return array;
};
export {inject};
