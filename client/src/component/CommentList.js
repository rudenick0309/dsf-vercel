import React, {Component} from "react";
import './CommentForm.css'

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {commentData} = this.props;
    console.log('코맨트 리스트에서', commentData === null)

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
