import {observable, action} from "mobx";

const oneStore = observable({
  isOne : false,
  data : null,
  oneFunction: action((data) => {
    oneStore.isOne = true;
    setTimeout(() => {
      oneStore.data = data;
      oneStore.isOne = false;
      twoStore.twoFunction(data)
    }, 3000)
  }),
})


const twoStore = observable({
  data : [],
  twoFunction: action((data) => {
    twoStore.data.unshift(data);
  })
})

export { oneStore, twoStore };



//

