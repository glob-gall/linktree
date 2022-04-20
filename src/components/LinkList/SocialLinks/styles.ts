import styled from "styled-components";

const LinkButton = styled.a`
  background-color:${props => props.theme.primary};
  padding:10px 20px;
  margin:2px;
  font-size:22px;
  width:300px;
  max-width:80%;
  
  transition:0.5s;
  cursor:pointer;
  
  color:${props => props.theme.secondary};
  display:flex;
  flex-direction:column;
  align-items:center;

  &:hover{
    background-color: ${props => props.theme.primaryShaded} ;
  }
`

export const InstragramButton = styled(LinkButton)``
export const SiteButton = styled(LinkButton)``
export const FacebookButton = styled(LinkButton)``