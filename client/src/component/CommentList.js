import React, {Component} from "react";
import './CommentForm.css'


class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {commentData} = this.props;
    // console.log('코맨트 리스트에서', commentData === null)    // 이게 null 일 수는 없겟구나ㅋㅋㅋㅋ

    const {comment,dessert_name,user_name} = commentData;

    const replyComponentStyle = {
      border: '3px solid grey',
    }

    return (
      <div className={'reply-component'} style={replyComponentStyle}>
        {dessert_name}
        <br/>
        {user_name}{`:`}{comment}
      </div>
    );
  }
}


export default CommentList;

// comment: "피카피카!"
// dessert_name: "피카론"
// user_name: "피카츄"
// __proto__: Object