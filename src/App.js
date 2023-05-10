import React from "react";
import "./App.css"



function App() {
  return (
    <body className="style">
      <div className="container">
        <div className="title"><span style={{color:'white'}}>통장거래내역</span></div>
        <div className="contents">
          <div className="itemcolumn">
            <div className="itemname">사업일</div>
            <div className="itemname">담당자</div>
            <div className="itemname">집행내용</div>
            <div className="itemname">코드</div>
            <div className="itemname">거래형태</div>
            <div className="itemname">수입</div>
            <div className="itemname">지출</div>
            <div className="itemname">잔액</div>
          </div>

          <div className="itemcolumn">
            <div className="item">yymmdd</div>
            <div className="item">이름</div>
            <div className="item">집행내용</div>
            <div className="item">코드</div>
            <div className="item">거래형태</div>
            <div className="item">수입</div>
            <div className="item">지출</div>
            <div className="item">잔액</div>
          </div>

          <div className="itemcolumn">
            <div className="itemname">통장거래일</div>
            <div className="itemname">이체계좌번호</div>
            <div className="itemname">영수증</div>
            <div className="itemname">비고</div>
          </div>

          <div className="itemcolumn">
            <div className="item">yymmdd</div>
            <div className="item">계좌번호</div>
            <div className="item">+버튼을 눌러 영수증 추가</div>
            <div className="item">비고</div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;