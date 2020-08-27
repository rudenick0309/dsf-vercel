import * as React from "react";
import {useState} from "react";
import CommentList from "./CommentList";
import "../css/CommentForm.css";


const CommentForm = () => {
  console.log("props");
  const [reply, setReply] = useState(null);

  const replyData = null; // TODO: Consider useRef(null) in replyData

  const {connection, clickName} = this.props; // TODO: class

  // TODO: In here, a action goes to mobx

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
              ? reply.data.map((el) => {
                return <CommentList commentData={el}/>;
              })
              : <></>
            : <></>
          }
        </div>
      </div>
    );

    return (
      <>
      </>
    );
  } // hooks end
};

export default CommentForm;

//=================================================================
//   state = {
//     reply: null,
//   };
//
//   async componentDidUpdate(previousProps, previousState) {
//
//     let clickName = this.props.clickName;
//     let replyData = null;
//
//     if (previousProps.clickName !== clickName) {
//       if (clickName) {
//         replyData = await axios.post("http://localhost:4000/comment/sorting",
//           {
//             culture: clickName,
//           });
//       }
//       this.setState({
//         reply: replyData,
//       });
//
//
//     }
//
//
//   }
//
//   render() {
//
//
//     const {connection, clickName} = this.props;
//     const {reply} = this.state;
//     const {onSubmitForm} = this;
//
//     console.log("코멘트 폼 reply", reply);
//
//
//     if (connection) {
//       return (
//         <div className={"comment_form-component"}>
//           <div className={"form-component"}>
//             <form onSubmit={onSubmitForm}>
//               <input/>
//               <input type={"textarea"}/>
//               <button>입력</button>
//             </form>
//           </div>
//
//           <div className={"comment-component"}>
//             {reply
//               ? reply.data
//                 ?reply.data.map((el) => {
//                   return <CommentList commentData={el}/>;
//                 })
//                 :<></>
//               :<></>
//             }
//           </div>
//         </div>
//       );
//     }
//
//     return (
//       <>
//       </>
//     );
//   }
// }
