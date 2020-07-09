import React, {Component} from "react";
import CommentList from "./CommentList";
import "./CommentForm.css";
import axios from "axios";

// 얘는 Map 에서 가져온거다
class CommentForm extends Component {
  // state = {
  //   reply:
  //     [
  //       {
  //         id: 1,
  //         앵글: {
  //           comment: [
  //             {선주: "1잠온다"},
  //             {수빈: "1잠온다2"},
  //             {윤혁: "1잠온다3"},
  //           ]
  //         },
  //       },
  //       {
  //         id: 2,
  //         북극: {
  //           comment: [
  //             {선주: "2잠온다"},
  //             {수빈: "2잠온다2"},
  //             {윤혁: "2잠온다3"},
  //           ]
  //         }
  //       }
  //     ],
  //   // 다른 것들도 들어가야 하는데 너무 지저분해져서 안 함.
  // };

  state = {
    reply: null,
  };


  // onSubmitForm = async (e) => {
  //   e.preventDefault();           //axios 에서 return을 붙일꺼냐?
  //
  //   // let commentData = await axios.post('http://localhost:4000')   // 이렇게 되면 try catch를 못씀 ㅜㅜ
  //   axios.post("http://localhost:4000/comment")   // 이름으로 보내기 라희님 허락을 내려주셨음 , 디저트이름, 문화권도 넣어서 보낼 것.
  //     .then(res => {
  //       console.log(res);
  //       //
  //       //           로직 추가할 것,
  //       //      this.setState({
  //       //           reply에다가 다 집어넣어.
  //       //      })
  //     })
  //     .catch(err => console.log(err));
  // };

  // 이것도 클릭이네.... clickName 이 필요함.
  // 클릭한 문화권의 댓글이 출력되어야 함.
  async componentDidUpdate(previousProps, previousState) {
    // console.log("코멘트폼 컴포넌트디드마운트", this.props.clickName);
    let clickName = this.props.clickName;
    let replyData = null;

    // console.log("componentDidUpdate props:", previousProps.clickName, this.props.clickName);
    // console.log("componentDidUpdate state:", previousState, this.state);


    if (previousProps.clickName !== clickName) {
      if (clickName) {
        replyData = await axios.post("http://localhost:4000/comment/sorting",
          {
            culture: clickName,
          });
      }
      this.setState({    //여기 await 진리표 작성
        reply: replyData,
      });

      // console.log('코멘트폼, 컴포디드업데 : ', this.state.reply.data)   // 리플라이~~플라이투더스카이가 부릅니다
    }

    // rep

    // 여기서 map 을 써야 할까? 함 쓰 보자!  안되네 ㅎ
    // commentData.data.map((el) => {
    //   console.log("과연 될 것인가!", el);
    //   return <CommentList commentData={el}/>;
    // });

    // console.log('코멘트폼 댓글', commentData.data[0] );
  }

  render() {
    // this.state.reply.data -> 바로 이렇게 할 수 가 없다.

    const {connection, clickName} = this.props;   //clickName가 이름이다.
    const {reply} = this.state;
    const {onSubmitForm} = this;
    // var dataToCommentList = null;
    console.log("코멘트 폼 reply", reply);  //reply.data 를 하지 말아야 한다 궁서체임.



    // connection이 트루면 쇼핑 에이피아이 문구가 뜸.
    if (connection) {
      return (
        <div className={"comment_form-component"}>
          <div className={"form-component"}>
            <form onSubmit={onSubmitForm}>
              <input/>
              <input type={"textarea"}/>
              <button>입력</button>
            </form>
          </div>

          <div className={"comment-component"}>
            {reply
              ? reply.data
              ?reply.data.map((el) => {
                  return <CommentList commentData={el}/>;
                })
                :<></>
              :<></>
            }
          </div>
        </div>
      );
    }
    // 여기는 비어있게
    return (
      <>
      </>
    );
  }
}


export default CommentForm;


// reply.map(el => {
//   console.log("리플라이", typeof (el)); //object 맞음
//   for (let key in el) {
//     console.log("포문이 실행중??", key === clickName);
//     if (key === clickName) {
//       console.log(34234235);
//       for (let k in el[key]) {
//         console.log("하 죽고싶다", typeof k,);
//         if (k === "comment") {
//           console.log("ㅠㅠㅠ", "reply: ", reply);
//           console.log("el : ", el);
//           console.log("key", key);
//           console.log("k", k);
//           console.log("그러면은 나는!!! : ",);
//           console.log("드루와", k === "comment");           //reply[앵글][comment]
//           console.log("끝내자 좀", el[key][k][0]["선주"]);
//           el[key][k].map(el => {
//             console.log("이엘키의 케이의 이엘 : ", el); // el은 오브젝트다 객체   ,,  el[key][k][j]
//             let temp = []
//             for (let j in el) {
//
//               console.log("이승기가 부릅니다, j에게: ", el[j]);
//               temp.push(el[j])
//             }
//             return <CommentList data={temp}/>;
//           });
//
//         }
//       }
//     }
//   }
// });


//여기에 변수를 만들어서 reply랑 clickName 이 같은 것만 코멘트리스트의 props로 내려주면 되잖아?
// reply.map(el => {
//   // console.log('코멘트폼 배열 reply 의 el : ', Array.isArray(el) , clickName);  // el은 객체다
//   for (let key in el) {
//     // console.log("key : ", key === '이름');
//     if (el[key] === clickName) {
//       console.log('때떄떄떄떄', 'el: ', el, 'el[key]: ', el.comment) // el을 찾았다. 여기에 comment를 붙이면 되겠다.
//       dataToCommentList = el.comment;
//       console.log(Array.isArray(dataToCommentList))
//     }
// if (key === "comment") {
//   console.log("el[key]", Array.isArray(el[key]));   // 배열이닷
//   // dataToCommentList = el[key];
// }


// if (key === clickName) {
//   console.log('같을 떄의 : ', el[key].comment ,clickName)
//   // console.log('같나????')
//   dataToCommentList = el[key].comment;   //{선주 : 1, 수빈:2, 윤혁:3} 키와 밸류를 다 배열로 만든다면?
//   console.log(dataToCommentList)
// 키배열
// 밸류배열
// 총 2개의 배열.
// 아니면, [선주,1,수빈,2,윤혁,3] 이렇게 내려보내?? 근데 그래봣자 엘리먼트 요소 단위로 코멘트리스트에 들어갈 텐데?
// 아니면 [{선주:1}, {수빈:2}, {윤혁:3}] 이렇게 보내면??? ?????????
//
// }
// })
// ;


// replyData = async () => {
//   if (this.state.reply) {
//     if (this.state.reply.data) {     //reply로 한 번 하고, reply.data 로도 한 번 해 볼 것
//       return await this.state.reply.data;
//     }
//   }
//   // return reply.data;
// };      // reply에 값이 담겨있는 상태, 즉, reply가 비어있을 때는 이 변수는 작동하지 않을 것. 테스트용 변수임
// console.log("테스트용입니다", replyData().then(res => console.log(res)));