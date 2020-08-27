import React, {Component} from "react";
import DessertList from "./DessertList";
import "../css/DessertSlide.css";
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





  async componentDidUpdate(previousProps,previousState) {


    let clickName = this.props.clickName;

      let dessert = await axios.post("http://localhost:4000/dessert/find", {
        dessert_culture: clickName,
      });

      this.setState({
        dessert: dessert.data,
      });


  }



  render() {
    const {hoverName, clickName, clickLeft, clickRight, count} = this.props;
    const {state,} = this;
    const {dessert} = this.state;

    const st = {
      display : clickName ? 'flex' : 'block',
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
