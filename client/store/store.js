const { observable } = require('mobx');

const oneStore = observable({
  isOne : false,
  data : null,
  oneFunction(data) {
    this.isOne = true;
    setTimeout(() => {
      this.data = data;
      this.isOne = false;
      twoStore.data.unshift(data)
    }, 3000)
  },
})


const twoStore = observable({

  data : [],
  twoFunction() {
    this.data.push(data);
    // setTimeout(() => {
    //   this.data = data;

    // }, 3000)
  }
})

export { oneStore, twoStore };



//

