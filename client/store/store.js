const { observable } = require('mobx');

const oneStore = observable({
  isOne : false,
  data : null,

  oneFunction(data) {
    this.isOne = true;
    setTimeout(() => {
      this.data = data;
      this.isOne = false;
    }, 3000)
  },
})


export { oneStore };



//
// const twoTestStore = observable({
//   isTwoTest : false,
//   data : null,
//   twoTestFunction(data) {
//     this.isTwoTest = true;
//     // setTimeout(() => {
//       this.data = data;
//       this.isTwoTest = false;
//     // }, 3000)
//   }
// })
