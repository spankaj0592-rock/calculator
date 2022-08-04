import React from 'react'
import styled from 'styled-components';


function Calculator() {
  return (
    <div>
      <Container>
       <Header>
        Calculator
   
       </Header>
       <Result type="text" />
 <FirstRow>
            <FButton >C</FButton>
            <FButton >+/-</FButton>
            <FButton >%</FButton>
            <DevideButton >/</DevideButton>
        </FirstRow> 
      
<SecondRow>

            <FButton >7</FButton>
            <FButton >8</FButton>
            <FButton >9</FButton>
            <MultiplyButton>x</MultiplyButton>
</SecondRow>
<ThirdRow>

            <FButton >4</FButton>
            <FButton >5</FButton>
            <FButton >6</FButton>
            <SubButton>-</SubButton>
</ThirdRow>
            
            <FourthRow>
            <FButton >1</FButton>
            <FButton >2</FButton>
            <FButton >3</FButton>
           <AddButton>+</AddButton>

            </FourthRow>
<FifthRow>
<LButton>0</LButton>
<LDButton>.</LDButton>
<LEButton>=</LEButton>
</FifthRow>

      </Container>



    </div>
  )
}

export default Calculator


const Container =styled.div`
border-radius:20px;
margin-left:500px;
overflow: hidden;
display:flex;
height:100%;
width:500px;
display:inline-block;
border:1px solid black;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(025, 0.46, 0.45, 0.94) 0s;


`

const Header =styled.div`
 font-size:30px;
 background-color:#13d8ad;
 height:40px;
  padding: 10px;
  width:auto;
  text-align: center;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(025, 0.46, 0.45, 0.94) 0s;

`

const Result =styled.input`
  font-size: 24px;
  font-weight: 700;
  width:475px;
  padding:10px;
  height:90px;
  text-align: right;
  background-color: #aca7a7;

`

const FirstRow =styled.div`

`

const FButton=styled.button`
padding: 15px;
 font-weight: bold;
 font-size: 16px;
width:125px;
 border-radius: 3px;
 background-color:#13d8ad;
 float: left;
 height: 80px;


`
const SecondRow=styled.div`
`
const ThirdRow=styled.div``
const FourthRow=styled.div``

const FifthRow=styled.div``
const LButton =styled.button`
padding: 15px;
 font-weight: bold;
 font-size: 16px;
width:250px;
height: 80px;
 border-radius: 3px;
 background-color:#13d8ad;
 float: left;

`

const LDButton =styled(LButton)`
width:125px;

`

const LEButton =styled(LButton)`
background-color:#07d3dafa;
width:125px;
`
const DevideButton =styled.button`
background-color:#07d3dafa;
padding: 15px;
 font-weight: bold;
 font-size: 16px;
width:125px;
 border-radius: 3px;
 float: left;
 height: 80px;
`
const MultiplyButton= styled(DevideButton)``
const SubButton =styled(MultiplyButton)``
const AddButton =styled(SubButton)``

