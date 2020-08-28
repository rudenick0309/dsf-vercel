import {observable, action} from "mobx";

interface OneStore {
  isOne: boolean
  data: string | null
  oneFunction: (data: string) => void
}

const oneStore = observable<OneStore>({
  isOne : false,
  data : null,
  oneFunction: action((data:string) => {
    oneStore.isOne = true;
    setTimeout(() => {
      oneStore.data = data;
      oneStore.isOne = false;
      twoStore.twoFunction(data)
    }, 3000)
  }),
})

interface TwoStore {
  data: string[]
  twoFunction: (data:string) => void
}

const twoStore = observable<TwoStore>({
  data : [],
  twoFunction: action((data:string) => {
    twoStore.data.unshift(data);
  })
})

export { oneStore, twoStore };



//

