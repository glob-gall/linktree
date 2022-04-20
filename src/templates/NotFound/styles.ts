import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  height: 80vh;
`

export const Title = styled.h1`
  font-size: 80px;
`
export const SubTitle = styled.h2`
  font-size: 38px;
`

export const GoBack = styled.a`
  margin-top: 24px;
  font-size: 32px;
  font-size: 32px;
  padding:10px 20px;
  background: ${props=> props.theme.primary};
  color: ${props => props.theme.secondary};
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    background: ${props=> props.theme.primaryShaded};
  }
`