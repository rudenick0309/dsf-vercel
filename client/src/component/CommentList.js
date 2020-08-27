import * as React from "react";
import {useState} from "react";
import "../css/CommentForm.css";

const CommentList = () => {
  const {commentData} = this.props;
  const {comment, dessert_name, user_name} = commentData;

  const replyComponentStyle = {
    border: "3px solid grey",
  };   // TODO: Delete it when installed styled-components

  return (
    <div className={"reply-component"} style={replyComponentStyle}>
      {dessert_name}
      <br/>
      {user_name}{`:`}{comment}
    </div>
  );
};


export default CommentList;

