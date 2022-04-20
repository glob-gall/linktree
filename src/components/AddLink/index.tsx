import { useRef, useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import { RenderLinkProps } from '../LinkList/SocialLinks';
import * as S from './styles'

type AddLinkProps = {
  addItens(newItem:RenderLinkProps):void
}

function AddLink({addItens}:AddLinkProps){
  const [newLink, setNewLink] = useState('');

  function handleAdd(){
    if (
      !newLink?.includes('www.') 
      && !newLink?.includes('.com') 
      && !newLink?.includes('.me')
      && !newLink?.includes('.xyz')
    ){
      setNewLink('')
      return
    }
    let link:RenderLinkProps;
    const afterDomain = newLink.substring(newLink.indexOf('/')+1)
    
    if (newLink?.includes('github.com')) {
      link = { link: `https://github.com/${afterDomain}`, platform:'github',afterDomain}
    }else if (newLink?.includes('instagram.com')) {
      link = { link: `https://instagram.com/${afterDomain}`, platform:'instagram',afterDomain}
    }else if (newLink?.includes('facebook.com')) {
      link = { link: `https://facebook.com/${afterDomain}`, platform:'facebook',afterDomain}
    }else{
      link={
        link:newLink.includes('http')? newLink: `http://${newLink}`,
        platform:'website',
        afterDomain:newLink.includes('http')? newLink: `http://${newLink}`
      }
    }
    
    addItens(link)
    setNewLink('');
  }

  return(
    <S.Container>
      <S.Input 
        type="text" 
        placeholder="http://www.site.example.com/" 
        value={newLink}
        onChange={e => setNewLink(e.currentTarget.value)}
      />
      <S.Button onClick={handleAdd}>
        <FaPlus size={18}/>
      </S.Button>
    </S.Container>
  )
}

export default AddLink