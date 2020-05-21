let cells = (field) => {
  let arr = []
  for (let i = 0; i < field*field; i++) {
    arr.push(i)
  }
  return cells = arr.map((_,index) => {
    return {disabled: true, selected: false, number: index, color: 'none'}
  })
};

export default cells