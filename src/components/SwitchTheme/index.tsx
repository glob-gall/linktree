import { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import * as S from './styles'

function Switch(){
  const [state,setState] = useState(false);
  const {switchTheme} = useTheme();

  const checkHandler = () => {
    setState(!state)
    switchTheme();
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