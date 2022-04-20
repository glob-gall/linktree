import { useState } from 'react';
import * as S from './styles'

function Switch(){
  const [state,setState] = useState(false);

  const checkHandler = () => {
    setState(!state)
  }

  return(
    <S.Container>
    <label className="switch">
      <input type="checkbox" onChange={checkHandler} checked={state}/>
      <span className="slider round"></span>
    </label>
    </S.Container>
  )
}

export default Switch;