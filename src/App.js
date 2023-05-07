import { Button, StyledEngineProvider } from '@mui/material';
import './App.css';
import Customer from './components/Customer';
import React from 'react';
import styled from 'styled-components';


const Rectangle1 = styled.div`
  position: absolute;
  width: 1920px;
  height: 946px;
  left: 0px;
  top: 134px;

  background: #F2F6FC;
`
const Rectangle3 = styled.div`
  position: absolute;
  width: 1463px;
  height: 856px;
  left: 50px;
  top: 40px;

  background: #FFFFFF;
  border-radius: 15px;
`
const Rectangle6 = styled.div`
  position: absolute;
  width: 1920px;
  height: 134px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
`

const Menu = styled.div`
  position: absolute;
  width: 104px;
  height: 18px;
  left: 51px;
  top: 30px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;

  color: #000000;
`

const Title = styled.div`
  position: absolute;
  width: 738px;
  height: 25px;
  left: 40px;
  top: 40px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;

  color: #0151CA;
`

const Vector = styled.div`
  position: absolute;
  width: 0px;
  height: 941px;
  left: 340.5px;
  top: 1px;

  border: 0.7px solid #A3A3A3;
  transform: rotate(0.03deg);
`

const StyledButton = styled(Button)`
  width: 288px;
  height: 76px;
  left: 20px; 
  top: 100px;
  border-radius: 15px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`

const StyledAddButton = styled(Button)`
  position: absolute;
  width: 115px;
  height: 53px;
  left: 1300px;
  top: 30px;

  border: 3px solid #0151CA;
  border-radius: 48px;
`


const customer = [
	{
		"date": "2023-03-01",
		"code": "A1",
		"detail": "간식",
		"price": "23,000",
		"receipt": "",
	},
	{
		"date": "2023-03-02",
		"code": "E3",
		"detail": "교통비",
		"price": "50,000",
		"receipt": "",
	},
	{
		"date": "2023-03-03",
		"code": "E3",
		"detail": "교통비",
		"price": "40,000",
		"receipt": "",
	},
]


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Rectangle6>
        <div className='logoimg'>
          <img className='logo' alt="logo" src='img/logo.png' style={{margin:30}}/>
        </div>
        <Rectangle1>
          <Menu>메뉴</Menu>
          <StyledButton>예결산안</StyledButton>
          <Vector>
            <Rectangle3>
                <Title>KAIST 학부총학생회 23년도 상반기 회계감사자료 통장거래내역</Title>
                <StyledAddButton variant='outlined'>내역 추가</StyledAddButton>
              {customer.map(c => {
                return (
                  <Customer 
                    date={c.date}
                    code={c.code}
                    detail={c.detail}
                    price={c.price}
                    receipt={c.receipt}/>
                )
              })}           
            </Rectangle3>
          </Vector>
        </Rectangle1>
      </Rectangle6>
    </StyledEngineProvider>
  );
}

export default App;
