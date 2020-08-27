import React, {Component} from "react";
import DessertList from "./DessertList";
import "./DessertSlide.css";
import axios from "axios";

class DessertSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dessert : [],
      clickName:null,
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     clickName:this.props.clickName,
  //   })
  // }

// 생명주기 함수에서 백 측에 요청을 보낼 것인가? 아니면 일반 함수를 만들어서 그 안에 요청을 보낼 것인가? 그것이 문제로다.
  async componentDidUpdate(props, state) {   // 여기에서 data 정보를 백엔드로 요청할 거임.
    // console.log('디슬의 props: ',props, 'state : ', state.dessert);
    console.log('디슬의 state: ', state.dessert, '/','state : ', this.state.dessert);
    // console.log('디슬의 state:', props.state ,'//', this.state)
    let clickName = this.props.clickName;
    // console.log('디저트슬라이드 clickName', clickName);

    // if (props.state.dessert && this.state.dessert) {
    //   if (props.state.dessert.length !== this.state.dessert.length) {
    if (state.dessert.length !== this.state.dessert.length) {
        console.log('들어오나?')
        let dessert = await axios.post("http://localhost:4000/dessert/find", {
          dessert_culture: clickName,
        });
          this.setState({
            dessert: dessert.data,
          });
        console.log('디저트슬라이드 dessert', dessert);
    // }
    //   }
    }
    // 1. state의 초기화 -> 업데이트  //  2. state의 누적   // 여기서는 1.
  }




  render() {

    const {hoverName, clickName, clickLeft, clickRight, count} = this.props;
    const {state,} = this;
    const { onClickDessert } = this.props;
    const {dessert} = this.state;

    console.log('디저트슬라이드의 render : ', clickName);

    const st = {
      display : clickName ? 'flex' : 'block',
    }

    return (
      <>

        {!clickName
          ? <div>'지도를 클릭해 주세요'</div>
        : <div className={"DessertSlideCSS"} style={st} >
            <span onClick={clickLeft}> 왼쪽 </span>
            {dessert && dessert.slice(count, count + 3).map((el) => {
              return <DessertList onClickDessert={onClickDessert} clickLeft={clickLeft} clickRight={clickRight} clickedCultureArray={el}/>;
            })}
            <span onClick={clickRight}> 오른쪽 </span>
          </div>
        }

        <br/>

      </>
    );

  }
}

export default DessertSlide;
//
// // 생명주기 함수에서 백 측에 요청을 보낼 것인가? 아니면 일반 함수를 만들어서 그 안에 요청을 보낼 것인가? 그것이 문제로다.
// async componentDidUpdate(previousProps,previousState) {   // 여기에서 data 정보를 백엔드로 요청할 거임.
//                                                           // console.log("componentDidUpdate props:", previousProps, this.props);
//                                                           // console.log("componentDidUpdate state:", previousState.dessert, this.state.dessert);
//                                                           // console.log("디저트 리스트 ㄴㅅㄴㅅㄴㅅ", Array.isArray(previousState.dessert), '//', Array.isArray(this.state.dessert));
//                                                           // console.log('앞 디저트슬라이드 state', this.state)
//   let clickName = this.props.clickName;
//   // console.log('디저트 슬라이드', )
//
//   // if ( previousState.dessert !== null && previousState.dessert.length !== 0 && this.state.dessert!==null && this.state.dessert.length !== 0) {
//   // if (dessert previousState.dessert !== null && this.state.dessert !== null) {
//   //   if (previousState.dessert !== this.state.dessert) {
//   // 1. state의 초기화 -> 업데이트  //  2. state의 누적   // 여기서는 1.
//   let dessert = await axios.post("http://localhost:4000/dessert/find", {
//     dessert_culture: clickName,
//   });
//   // console.log('디저트슬라이드 dessert', dessert.data)  // 이거 맞음. 객체 형태로 디저트 리스트 컴포넌트에 넘기자.
//   // let json = await dessert_.json();
//   // console.log('디저트슬라이드 json', json)
//   this.setState({
//     dessert: dessert.data,
//   });
//   // console.log('디저트 슬라이드 컴포넌트디드마운트', key)
//   //   }
//   // }
//   // console.log('디저트 슬라이드에서 영어:', dessert.data[0].dessert);
//   // this.props.onClickENName(dessert.data.dessert_ENname)  // TODO : 위키로 가는 거.
//   // this.props.onClickENKOName();
// }