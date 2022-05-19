import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let 아이디 = "asdf";
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState(0);

  // let num = [1, 2];
  // let a = num[0]; // num array 0번째 배열은 1이므로 a = 1
  // let c = num[1]; // c = 2
  
  // // destructuring 문법 
  // let [d, f] = [1, 2] // 위 변수문법 축약 가능

  return (
    <div className="App">
        <div className="black-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <h4 id={아이디}>블로그임</h4>
        </div>

        <button 
        onClick={()=> {
          let copy = 글제목;
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
        >글제목 수정</button>

        <div className="list">
          <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
    </div>
  );
}

export default App;