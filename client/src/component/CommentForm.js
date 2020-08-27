import React, {Component} from "react";
import CommentList from "./CommentList";
import "./CommentForm.css";
import axios from "axios";

// 얘는 Map 에서 가져온거다
class CommentForm extends Component {
  state = {
    reply: null,
    culture: null,
    dessert_name : null,
    user_name : null,
    comment:null,
  };


  onSubmitForm = async (e) => {
    e.preventDefault();           //axios 에서 return을 붙일꺼냐?
    // console.log('코멘트 폼 렌더 순서 확인', 1)
    // let commentData = await axios.post('http://localhost:4000')
    // axios.post("http://localhost:4000/comment/making",{
    //   // culture: ,
    //   // dessert_name : ,
    //   // user_name : ,
    //   // comment : ,
    // })
    //   .then()
    //   .catch(err => console.log(err));
  };

  // 이것도 클릭이네.... clickName 이 필요함.
  // 클릭한 문화권의 댓글이 출력되어야 함.
  async componentDidUpdate(previousProps, previousState) {
    // console.log("코멘트폼 컴포넌트디드마운트", this.props.clickName);
    // console.log('코멘트 폼 렌더 순서 확인', 2)
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
  }

  render() {
    // this.state.reply.data -> 바로 이렇게 할 수 가 없다.

    const {connection, clickName} = this.props;   //clickName가 이름이다.
    const {reply} = this.state;
    const {onSubmitForm} = this;
    // var dataToCommentList = null;
    // console.log("코멘트 폼 reply", reply);  //reply.data 를 하지 말아야 한다 궁서체임.

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

