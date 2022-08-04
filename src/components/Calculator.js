import React, { useState } from 'react'
import styled from 'styled-components';


function Calculator() {

const[result, setResult] =useState("")
const handleClick = (e) =>{
  setResult(result.concat(e.target.name));
}

const clear =()=>{
  setResult("");
}

const backspace =()=>{
  setResult(result.slice(0, -1));

}

const calculate =()=>{

  try {
    setResult(eval(result).toString());
  } catch (error) {
    console.log(error);
  }
  
}

  return (
    <div>
      <Container>
       <Header>
        Calculator
   
       </Header>
       <Result type="text" value={result}/>
 <FirstRow>
            <FButton name="C" onClick={backspace}>C</FButton>
            <FButton  name ="+/-" onClick={handleClick} >+/-</FButton>
            <FButton name="%"  onClick={handleClick}>%</FButton>
            <DevideButton name="/" onClick={handleClick}>/</DevideButton>
        </FirstRow> 
      
<SecondRow>

            <FButton name="7" onClick={handleClick}>7</FButton>
            <FButton name="8" onClick={handleClick}>8</FButton>
            <FButton name="9" onClick={handleClick}>9</FButton>
            <MultiplyButton name ="*" onClick={handleClick}>x</MultiplyButton>
</SecondRow>
<ThirdRow>

            <FButton name="4"  onClick={handleClick}>4</FButton>
            <FButton name="5" onClick={handleClick}>5</FButton>
            <FButton name="6" onClick={handleClick}>6</FButton>
            <SubButton name="-" onClick={handleClick}>-</SubButton>
</ThirdRow>
            
            <FourthRow>
            <FButton  name="1" onClick={handleClick}>1</FButton>
            <FButton name="2" onClick={handleClick}>2</FButton>
            <FButton name="3" onClick={handleClick}>3</FButton>
           <AddButton name="+" onClick={handleClick}>+</AddButton>

            </FourthRow>
<FifthRow>
<LButton name="clear" onClick={clear}>clear</LButton>
<LButton name="0" onClick={handleClick}>0</LButton>
<LDButton name="." onClick={handleClick}>.</LDButton>
<LEButton name="= " onClick={calculate}>=</LEButton>
</FifthRow>

      </Container>



    </div>
  )
}

export default Calculator


const Container =styled.div`
background-color:#a0a0b7 ;
cursor:pointer;
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
 background-color:#d81313f5;
 height:40px;
  width:auto;
  text-align: center;
  cursor:pointer;

`

const Result =styled.input`
  font-size: 24px;
  font-weight: 700;
  width:475px;
  padding:10px;
  height:90px;
  text-align: right;
  background-color: #aca7a7;
  cursor:pointer;
`

const FirstRow =styled.div`

`

const FButton=styled.button`

margin:5px;
cursor:pointer;
padding: 15px;
 font-weight: bold;
 font-size: 16px;
width:110px;
 border-radius: 5px;
 background-color:#13d8ad;
 float: left;
 height: 80px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  

`
const SecondRow=styled.div`
`
const ThirdRow=styled.div``
const FourthRow=styled.div``

const FifthRow=styled.div``
const LButton =styled.button`
margin:5px;
padding: 15px;
 font-weight: bold;
 font-size: 16px;
width:110px;
height: 80px;
 border-radius: 5px;
 background-color:#13d8ad;
 float: left;
 cursor:pointer;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  
`

const LDButton =styled(LButton)`
width:110px;

`

const LEButton =styled(LButton)`
background-color:#07d3dafa;
width:125px;
`
const DevideButton =styled.button`
margin:5px;
cursor:pointer;
background-color:#07d3dafa;
padding: 15px;
 font-weight: bold;
 font-size: 16px;
width:125px;
 border-radius: 5px;
 float: left;
 height: 80px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  
`
const MultiplyButton= styled(DevideButton)``
const SubButton =styled(MultiplyButton)``
const AddButton =styled(SubButton)``

