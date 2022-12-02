/*eslint-disable*/

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, choice] = useState([
    "남자코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);

  let [like, likechange] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy_sort = [...title];
          //오름차순 정렬
          copy_sort = copy_sort.sort();
          choice(copy_sort);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          //괄호 벗기고 다시 씌워달라는 문법
          let copy = [...title];
          copy[0] = "여자코트 추천";
          //기존state와 신규state가 같은 경우엔 변경해주지 않는다.
          choice(copy);
        }}
      >
        글 수정
      </button>
      <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              likechange(like + 1);
            }}
          >
            👍🏻
          </span>{" "}
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {/* title 개수에 따른 반복문 */}
      {title.map(function () {
        return (
          <div className="list">
            <h4>{title[1]}</h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <div className="list">
        <h4
          onClick={() => {
            modal == true ? setModal(false) : setModal(true);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {/* 동적 UI 만드는 Step
       * 1. html css로 미리 디자인 완성
       * 2. UI 현재 상태를 state로 저장
       * 3. state에 따라 UI가 어떻게 보일지 작성
       */}
      {modal == true ? <Modal /> : null}
    </div>
  );
}

// const Modal = () => {
//   return <div> </div>;
// };

/* 컴포넌트
 * 1. 반복적인 html 축약할 때
 * 2. 큰 페이지들
 * 3. 자주 변경되는 것들
 */
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
