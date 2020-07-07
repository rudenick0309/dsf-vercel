import React, {Component} from "react";
import DessertList from "./DessertList";
import "./DessertSlide.css";
import axios from "axios";

class DessertSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      북극: ["북1", "북2", "북3", "북4", "북5", "북6"],
      앵글: ["앵1", "앵2", "앵3", "앵4", "북5", "북6"],
      라틴: ["라1", "라2", "라3", "라4", "북5", "북6"],
      오세: ["오1", "오2", "오3", "오4", "북5", "북6"],
      아프: ["아1", "아2", "아3", "아4", "북5", "북6"],
      이슬: ["이1", "이2", "이3", "이4", "북5", "북6"],
      유럽: ["유1", "유2", "유3", "유4", "북5", "북6"],
      동부: ["부1", "부2", "부3", "부4", "북5", "북6"],
      남부: ["남1", "남2", "남3", "남4", "북5", "북6"],
      동남: ["동1", "동2", "동3", "동4", "북5", "북6"],
      // count : 0,

      // { "dessert_image_url": "not yet",     // pic
      //   "dessert_ENname": "Baklava",
      //   "dessert_KOname" : "바클라바",       // pick
      //   "dessert_nation": "터키",
      //   "dessert_culture": "건조"         // pick???
      // }

    };
  }

  // async componentDidMount() {   // 여기에서 data 정보를 백엔드로 요청할 거임.
  //   let dessert_ = await axios.get('http://localhost:4000/find')
  //   let json = dessert_.json();
  //   this.setState({
  //     json,
  //   })

  /*
  * try {
  *    let dessert = await axios.get('http://localhost:4000/find')
  *    let json = dessert.json();
  *    console.log(json);
  *    this.setState({
  *      json,
  *    })
  * } catch(err=> console.log(err))
  *
  * */


  render() {

    const {hoverName, clickName, clickLeft, clickRight, count} = this.props;
    const {state,} = this;
    // const {count} =this.state;
    // console.log('카운트는요? :', count);
    // console.log('언제 실행되는겨', clickName)


    if (clickName !== undefined) {    // hoverName 에서 clickName으로 바꿀꺼임. 20200703
      for (let key in state) {
        if (clickName === key) {    // hover 에서 click으로 바꾸면서 .slice(0,2) 를 없앴다.
          return (
            // style={{display:'flex'}}  css를 따로 만들려고 css파일 만들고, style을 따로 뺌
            <div className={"DessertSlideCSS"}>
              <span onClick={clickLeft}> 왼쪽 </span>
              {state[key].slice(count, count + 3).map((v) => {
                return <DessertList clickedCultureArray={v}/>;
              })}
              <span onClick={clickRight}> 오른쪽 </span>
            </div>
          );
        }
      }
    }

    return (
      <>
        <div>
          {hoverName}
          <br/>
          {clickName}
        </div>
      </>
    );

  }
}

export default DessertSlide;
