import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import Map from "../component/Map";
import HeaderComponent from "../component/HeaderComponent";
import ShoppingAPI from "../component/ShoppingAPI";
import WikiAPI from "../component/WikiAPI";
import "./Main.css";
import Mypage from "./Mypage";

//const axios = require('axios'); 

class Mainpage extends Component {                   //mypage가 여기서 연결이 된다.
  state = {
    username: "",
    connection: false,
    dessert_detail:null,
  };

  onClickConnection = (clickDessert) => {
    this.setState({
      connection:true,
    });
  };

  onClickDessert = (data) => {
    // alert(`${data.id}를 선택했네`)
    // console.log('다시 첫 화면이죠', data)
    // this.setState({
    //   dessert_detail:data,
    // })
  }

  render() {
    console.log("메인 페이지에서!! : ", this.props);
    const {isLoggedIn} = this.props;
    const {connection,} = this.state;
    const {onClickConnection, onClickDessert} = this;

    return (
      <div className={"center"}>
        <center>
          <HeaderComponent className={"header-bar"} isLoggedIn={isLoggedIn}/>

          {isLoggedIn
            ? <>
              <Link to="/mypage">
                <button
                  style={{
                    width: "200px",
                    height: "30px",
                    margin: "5px",
                    borderRadius: "5px",
                    backgroundColor: "white"
                  }}
                  type="submit"
                >
                  마이페이지
                </button>
              </Link>
              <Route path="/mypage" component={Mypage}/>
            </>
            : <></>
          }


          <div className={"center"}>
            <div className={"left-side"}>
              <Map onClickDessert={onClickDessert} onClick={onClickConnection} connection={connection}/>
            </div>

            <div className={"right-side"}>
              <div>
                <ShoppingAPI connection={connection}/>
              </div>
              <div>
                <WikiAPI  connection={connection}/>
              </div>
            </div>

          </div>


        </center>
      </div>
    );
  }
}

export default Mainpage;