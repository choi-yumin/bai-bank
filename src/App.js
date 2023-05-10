import './App.css';
import Customer from './components/Customer';
import React from 'react';
import { Box } from '@mui/material'
import { styled } from '@mui/material'
import './css/Title.css'


const Rectangle1 = styled(Box)`
  position: absolute;
  width: 1920px;
  height: 946px;
  left: 0px;
  top: 134px;

  background: #F2F6FC;
`
const Rectangle3 = styled(Box)`
  position: absolute;
  width: 1463px;
  height: 856px;
  left: 395px;
  top: 185px;

  background: #FFFFFF;
  border-radius: 15px;
`
const Rectangle6 = styled(Box)`
  position: absolute;
  width: 1920px;
  height: 134px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
`

const Title = styled(Box)`
  position: absolute;
  width: 738px;
  height: 25px;
  left: 448px;
  top: 228px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;

  color: #0151CA;
`

const customer = {
  'name':'songdi',
  'birthday':'123123'
}


function App() {
  return (
    <Rectangle6>
      <h3>여기 로고</h3>
    <Rectangle1>
    <Rectangle3>
        <Title>KAIST 학부총학생회 23년도 상반기 회계감사자료 통장거래내역</Title>
      <Customer 
        name={customer.name}
        birthday={customer.birthday}/>
    </Rectangle3>
    </Rectangle1>
    </Rectangle6>
  );
}

export default App;