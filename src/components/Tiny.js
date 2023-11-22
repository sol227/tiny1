import React, { useState } from "react";
import "../assets/style/toyStyle.css";

const Tiny = () => {
  const [year, setYear] = useState(-1);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [resultShow, setResultShow] = useState(false);

  const changeYear = (year) => {
    let yearNum = year.slice(0, 4);
    setYear(yearNum);
  };

  const restart = () => {
    setYear(-1);
    setMonth(0);
    setDay(0);
    setResultShow(false);
  };

  const calculateResult = () => {
    // 월과 일의 값을 1에서 12, 1에서 31로 제한
    if (year !== -1 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      const resultSentence = `${words.first[year % words.first.length]} ${
        words.second[month - 1]
      }에서 ${words.third[day - 1]}`;
      setResultText(resultSentence);
      setResultShow(true);
    } else {
      setResultText("올바른 날짜를 입력해주세요");
      setResultShow(true);
    }
  };

  // ResultBox와 words 객체 정의
  const ResultBox = ({ children }) => <div>{children}</div>;

  const words = {
    first: [
      "다음달에",
      "갑자기",
      "연말에",
      "눈 깜짝할 새에",
      "명절에",
      "당장 오늘",
      "당장 내일",
      "새해에",
      "내년에",
      "아침에",
      "새벽에",
      "생일에",
    ],
    second: [
      "병원",
      "집",
      "바닷가",
      "친구집",
      "강의실",
      "학교",
      "길거리",
      "골목",
      "지하철",
      "운동장",
      "꿈 속",
      "화장실",
    ],
    third: [
      "칭찬 받는다",
      "살이 찐다",
      "살이 빠진다",
      "길거리 캐스팅 당한다",
      "물을 쏟는다",
      "사고를 친다",
      "티비에 나온다",
      "데뷔한다",
      "천재가 된다",
      "초능력이 생긴다",
      "일복이 터진다",
      "꽈당한다",
      "웃음이 터진다",
      "고양이와 마주친다",
      "친구와 다툰다",
      "백수가 된다",
      "취업을 한다",
      "개인사업을 시작한다",
      "탈모에 걸린다",
      "집을 산다",
      "파산한다",
      "건강해진다",
      "선물을 받는다",
      "별똥별을 본다",
      "용돈을 받는다",
      "돈을 줍는다",
      "최애를 만난다",
      "UFO와 마주친다",
      "외계인과 마주친다",
      "새똥을 맞는다",
      "돈을 뺏긴다",
    ],
  };

  const [resultText, setResultText] = useState("");

  return (
    <section className="wrap">
      <div className="fortune">
        {/* 추가 */}
        <h1>당신의 포춘 결과는?</h1>
        {/* 결과보기 누르면 input이 사라지는 거 추가 */}
        {!resultShow && (
          <div className="inputBox">
            <div className="content">
              <input
                placeholder="태어난 년도를 입력하세요"
                type="number"
                onChange={(event) => changeYear(event.target.value)}
              />
              <div>년</div>
            </div>
            <div className="content">
              <input
                placeholder="태어난 달을 입력하세요"
                type="number"
                min="1"
                max="12"
                onChange={(event) => setMonth(event.target.value)}
              />
              <div>월</div>
            </div>
            <div className="content">
              <input
                placeholder="태어난 날을 입력하세요"
                type="number"
                min="1"
                max="31"
                onChange={(event) => setDay(event.target.value)}
              />
              <div>일</div>
            </div>
          </div>
        )}
        {/* 버튼이랑 결과 위치 바꿈 */}
        {resultShow && (
          <ResultBox>
            <p className="result">{resultText}</p>
          </ResultBox>
        )}
        <button onClick={calculateResult}>결과 보기</button>
        <button onClick={restart}>다시 하기</button>
      </div>
    </section>
  );
};

export default Tiny;
