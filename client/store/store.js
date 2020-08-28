const { observable } = require('mobx');

const oneTestStore = observable({
  isOneTest : false,
  data : null,
  oneTestFunction(data) {
    console.log('In mobx store, data : ', data)
    this.isOneTest = true;
    setTimeout(() => {
      this.data = data;
      this.isOneTest = false;
      // twoTestStore.data.push(777777)
    }, 3000)
  }
})

const twoTestStore = observable({
  isTwoTest : false,
  data : null,
  twoTestFunction(data) {
    this.isTwoTest = true;
    // setTimeout(() => {
      this.data = data;
      this.isTwoTest = false;
    // }, 3000)
  }
})


export { oneTestStore, twoTestStore };
