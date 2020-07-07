import React, {Component} from "react";
import './CommentForm.css'


class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  // console.log('코멘트리스트', data);

  onSubmitForm = (e) => {
    e.preventDefault()
  }


  render() {
    const {reply} = this.props;
    let name = null;
    let content = null;
    for (let k in reply) {
      name = k;
      content = reply[k]
    }

    // const {onSubmitForm} = this;

    console.log('코멘트리스트', reply);  // reply는 객체다 {선주 : 1, 수빈:2, 윤혁:3}  나한테 필요한 건 key와 value가 다 필요해.
    //만약 [{선주:1} {수빈:2} {윤혁:3}] => 하나씩, 이렇게 내려온다면? 이게 reply라고 가정해보자
    // 이름 칸에 reply[?]
    // reply 받자마자 for 문을 돌려서 변수에 키와 밸류를 할당하자.
    // 그럼 키와 밸류가 담긴, 각각의 변수를 return문 안에서 사용하면 되겟는데?

    return (
      <div className={'reply-component'}>
        {/*<div className={'form-component'}>*/}
        {/*  <form onSubmit={onSubmitForm}>*/}
        {/*    <input />*/}
        {/*    <input type={'textarea'}/>*/}
        {/*    <button>입력</button>*/}
        {/*  </form>*/}
        {/*</div>*/}

        <div className={'renderReply-component'}>
          {name}
          {content}
        </div>
      </div>
    );
  }
}


export default CommentList;