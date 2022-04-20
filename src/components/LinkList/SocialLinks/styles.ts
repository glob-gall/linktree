import styled from "styled-components";

const LinkButton = styled.a`
  background-color:#f5f5f5;
  padding:10px 20px;
  margin:2px;
  font-size:22px;
  width:300px;
  max-width:80%;

  transition:0.2s;
  cursor:pointer;

  display:flex;
  flex-direction:column;
  align-items:center;

  &:hover{
    background-color:#ddd ;
  }
`

export const InstragramButton = styled(LinkButton)``
export const SiteButton = styled(LinkButton)``
export const FacebookButton = styled(LinkButton)``