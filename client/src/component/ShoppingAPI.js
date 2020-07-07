import React, { Component } from "react";
// import { searchShopping } from "../searchShopping";
// import { YOUTUBE_API_KEY } from "../../config/shopping";
// import axios from "./node_modules/axios";

class ShoppingAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
    };
  }

  setShoppingList(query) {
    var options = {
      //   key: YOUTUBE_API_KEY,
      query: query,
    };
  }

  searchShopping() {
    // setStete 설정
  }

  render() {
    const { connection } = this.props;
    // 조건문을 충족하면 state 4개를 동시에 띄운다..
    // 지도르 클릭 - 지역의 디저트 리스트 제공 - 디저트 클릭 - 쇼핑몰 API 재공
    if (connection) {
      // connection이 트루면 쇼핑 에이피아이 문구가 뜸.
      return (
        <>
          <div>
            <table>
              {/* https://developers.naver.com/docs/search/shopping/  */}
            </table>
          </div>
        </>
      );
    }
    return (
      // 여기는 비어있게
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

// API 사용법 : https://m.blog.naver.com/gkenq/10188251382
// 1. 요청 URL (request url) : http://openapi.naver.com/search

// axios 라이브러리 : react http 통신 >> 사용하기
// API 가져오기(fetch 사용)
// 참고링크(하단)
// https://velog.io/@johnque/React-API-%EC%97%B0%EB%8F%99-v9k692txn5

// GET 데이터 조회
// POST 데이터 등록
// PUT 데이터 수정
// DELETE 데이터 제거

// axios 라이브러리 사용하기
// https://developers.naver.com/docs/search/shopping/
/* 쇼핑검색 API 의 출력 결과에 아래 항목들이 추가됨(4월 22일 부) */
// 필드 타입(string) 설명
// market - 해당 상품의 제조사 명
// brand - 해당 상품의 브랜드 명
// category1 - 해당 상품의 카테고리 대분류
// category2 - 해당 상품의 카테고리 중분류
// category3 - 해당 상품의 카테고리 소분류
// category4 - 해당 상품의 카테고리 세분류
