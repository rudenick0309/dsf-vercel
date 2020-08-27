import React, {Component} from "react";
import CommentList from "./CommentList";
import "../css/CommentForm.css";
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

  async componentDidUpdate(previousProps, previousState) {

    let clickName = this.props.clickName;
    let replyData = null;

    if (previousProps.clickName !== clickName) {
      if (clickName) {
        replyData = await axios.post("http://localhost:4000/comment/sorting",
          {
            culture: clickName,
          });
      }
      this.setState({
        reply: replyData,
      });


    }


  }

  render() {


    const {connection, clickName} = this.props;
    const {reply} = this.state;
    const {onSubmitForm} = this;

    console.log("코멘트 폼 reply", reply);




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

    return (
      <>
      </>
    );
  }
}


export default CommentForm;

