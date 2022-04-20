import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  align-items:center;
  background:${({theme}) =>theme.primary};
  width:300px;
  max-width:90%;
  transition:0.5s;

  margin-bottom:40px;
`

export const Input = styled.input`
  font-size:16px;
  border:none;
  padding:10px 20px;
  background:none;
  color:${({theme})=>theme.secondary};
  width:80%;  
`
  
  export const Button = styled.button`
  display:block;
  border:none;
  color:${({theme})=>theme.secondary};
  background: ${({theme})=>theme.primary};
  padding:10px;
  cursor:pointer;
  width:20%; 

  transition:0.5s;
  &:hover{
    background: ${({theme})=> theme.secondary};
    color:${({theme})=>theme.primaryShaded};
  }
  
`
