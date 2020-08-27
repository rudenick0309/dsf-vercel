import React, {Component} from "react";
import "../css/DessertList.css";

class DessertList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {clickedCultureArray,clickLeft,clickRight} = this.props;
    const {dessert_image_url, dessert_ENname, dessert_nation} = clickedCultureArray;

    return (
      <div className={'DessertListCSS'}>


        <span className={'dessert-list-span'} >
          <img width={150} height={150} src={dessert_image_url} />
          {dessert_nation}
          {dessert_ENname}
        </span>

      </div>
    );
  }
}

export default DessertList;
