import styled from 'styled-components'

export const Container = styled.nav`
  display:flex;
  align-items:center;
  flex-direction:column;
  margin: 0 auto;
  margin-bottom:40px;
  width:100%;

  margin-bottom:40px;
`

export const Title = styled.h2`
  font-size:28px;
  text-align:center;
  margin-top:10vh;
  margin-bottom:24px;
  color:${props => props.theme.primary};
`

export const LinksContainer = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100%;
  margin-bottom:12px;
`

export const Url = styled.a`
  color:${({theme})=> theme.primary}
`