import React, { Component } from "react";


class ShoppingAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
    };
  }

  setShoppingList(query) {
    var options = {

      query: query,
    };
  }

  searchShopping() {

  }

  render() {
    const { connection } = this.props;

    if (connection) {

      return (
        <>
          <div>
            쇼핑 에이피아이
            <table>
              {/* https://developers.naver.com/docs/search/shopping/  */}
            </table>
          </div>
        </>
      );
    }
    return (

      <>
        <div>
          <table>
            <tr>
              <td>빈 리스트</td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}
export default ShoppingAPI;
