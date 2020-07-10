import React, {Component} from "react";
import DessertList from "./DessertList";
import "./DessertSlide.css";
import axios from "axios";

class DessertSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dessert : null,
    };
    // this.state = {
    //   북극: ["북1", "북2", "북3", "북4", "북5", "북6"],
    //   앵글: ["앵1", "앵2", "앵3", "앵4", "북5", "북6"],
    //   라틴: ["라1", "라2", "라3", "라4", "북5", "북6"],
    //   오세: ["오1", "오2", "오3", "오4", "북5", "북6"],
    //   아프: ["아1", "아2", "아3", "아4", "북5", "북6"],
    //   이슬: ["이1", "이2", "이3", "이4", "북5", "북6"],
    //   유럽: ["유1", "유2", "유3", "유4", "북5", "북6"],
    //   동부: ["부1", "부2", "부3", "부4", "북5", "북6"],
    //   남부: ["남1", "남2", "남3", "남4", "북5", "북6"],
    //   동남: ["동1", "동2", "동3", "동4", "북5", "북6"],
    //   count : 0,
    // }


  }




  // 생명주기 함수에서 백 측에 요청을 보낼 것인가? 아니면 일반 함수를 만들어서 그 안에 요청을 보낼 것인가? 그것이 문제로다.
  async componentDidUpdate(previousProps,previousState) {   // 여기에서 data 정보를 백엔드로 요청할 거임.

    // console.log("componentDidUpdate props:", previousProps, this.props);
    // console.log("componentDidUpdate state:", previousState.dessert, this.state.dessert);
    // console.log("디저트 리스트 ㄴㅅㄴㅅㄴㅅ", Array.isArray(previousState.dessert), '//', Array.isArray(this.state.dessert));
    // console.log('앞 디저트슬라이드 state', this.state)
    let clickName = this.props.clickName;
    // console.log('디저트 슬라이드', )

      // if ( previousState.dessert !== null && previousState.dessert.length !== 0 && this.state.dessert!==null && this.state.dessert.length !== 0) {
      // if (dessert previousState.dessert !== null && this.state.dessert !== null) {
      //   if (previousState.dessert !== this.state.dessert) {
      // 1. state의 초기화 -> 업데이트  //  2. state의 누적   // 여기서는 1.
      let dessert = await axios.post("http://13.125.58.125:4000/dessert/find", {
        dessert_culture: clickName,
      });
      // console.log('디저트슬라이드 dessert', dessert_.data)  // 이거 맞음. 객체 형태로 디저트 리스트 컴포넌트에 넘기자.
      // let json = await dessert_.json();
      // console.log('디저트슬라이드 json', json)
      this.setState({
        dessert: dessert.data,
      });
      // console.log('디저트 슬라이드 컴포넌트디드마운트', key)
      //   }
      // }


  }

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
    const {dessert} = this.state;
    // console.log('디저트슬라이드의 null : ', clickName);

    const st = {
      display : clickName ? 'flex' : 'block',
    }
    //
    // console.log('뒤 디저트슬라이드 dessert', dessert)
    // console.log('뒤 디저 dessert', Array.isArray(dessert))
    // for (let key in state) {
    //   console.log('포문 중인 state: ', key)
    // }

    // dessert.data.map((el) => {
    //   console.log('맵 안에서 el : ', el);
    // })

    // 디저트가 객체일 때, 뭐래 디저트는 음식이지
    // if (clickName !== undefined) {    // hoverName 에서 clickName으로 바꿀꺼임. 20200703
    //   for (let key in state) {
    //     if (clickName === key) {    // hover 에서 click으로 바꾸면서 .slice(0,2) 를 없앴다.
    //       return (
    //         // style={{display:'flex'}}  css를 따로 만들려고 css파일 만들고, style을 따로 뺌
    //         <div className={"DessertSlideCSS"}>
    //           <span onClick={clickLeft}> 왼쪽 </span>
    //           {state[key].slice(count, count + 3).map((v) => {
    //             return <DessertList clickedCultureArray={v}/>;
    //           })}
    //           <span onClick={clickRight}> 오른쪽 </span>
    //         </div>
    //       );
    //     }
    //   }
    // }

    //디저트가 배열 안의 객체에서 끄집어 내야 할때,
    // if (clickName !== undefined) {    // hoverName 에서 clickName으로 바꿀꺼임. 20200703

    // for (let key in state) {
    // if (clickName === key) {    // hover 에서 click으로 바꾸면서 .slice(0,2) 를 없앴다.
    // return (
    // style={{display:'flex'}}  css를 따로 만들려고 css파일 만들고, style을 따로 뺌
    // return (<div className={"DessertSlideCSS"}>
    //   <span onClick={clickLeft}> 왼쪽 </span>
    {/*{dessert.data .map((v) => {*/
    }
    {/*  return <DessertList clickedCultureArray={v}/>;*/
    }
    {/*})}*/
    }


    return (
      <>

        {!clickName
          ? <div>'지도를 클릭해 주세요'</div>
        : <div className={"DessertSlideCSS"} style={st} >
            <span onClick={clickLeft}> 왼쪽 </span>
            {dessert && dessert.slice(count, count + 3).map((v) => {
              return <DessertList clickLeft={clickLeft} clickRight={clickRight} clickedCultureArray={v}/>;
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
