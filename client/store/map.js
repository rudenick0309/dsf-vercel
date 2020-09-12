import {observable, action} from "mobx";
import axios from 'axios'

const map = observable({    // C R U D
  // result: null,
  cultureName:null,
  cultureNameU: action((data) => {
    console.log('f mobx, cultureNameU, data ;' , data);
    map.cultureName = data
    map.dataC(data)
  }),

  data:null,
  dataTwo:null,
  dataC: action(async (data) => {
    console.log('f mobx dataC data', data);
    const result = await axios.get(`http://localhost:4000/search/blog.json?data=${data}`)
    console.log('f mobx dataC result', result.data.items);
    map.data=result.data.items


    // const resultTwo = await axios.get(`http://localhost:4000/search/webkr.json?data=${data}`)
    const resultTwo = await axios.get(`http://localhost:4000/search/image?data=${data}`)
    console.log('f mobx dataC resultTwo', resultTwo.data.items);
    map.dataTwo=resultTwo.data.items


      // const resultTwo = await axios.get(`http://localhost:4000/search/shop.json?data=${data}`)
   // const result = await axios.get(`http://localhost:4000/search/cafearticle.json?data=${data}`)
    // const result = await axios.get(`http://localhost:4000/search/local.json?data=${data}`)
  }),


})

export {map}
