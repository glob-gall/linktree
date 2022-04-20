import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import AddLink from '../AddLink'
import RenderLink, { RenderLinkProps } from './SocialLinks'
import * as S from './styles'

type LinkListProps = {
  title:string
  hasEdition?:boolean
}

function LinkList({title,hasEdition} : LinkListProps){
  const {query,...rest} = useRouter();
  console.log(rest);
  
  const [links ,setLinks] = useState<RenderLinkProps[]>([]);
  useEffect(()=>{
    function loadQueryParams(){
      const queryLinks = Object.keys(query).map(
        q => q === 'website'
        ? ({
          link:query[q],
          platform:'website',
          afterDomain:query[q],
        } as RenderLinkProps)
        : ({
        link: `http://www.${q}.com/${query[q]}`,
        platform:q,
        afterDomain:query[q]
      } as RenderLinkProps))
      
      setLinks(queryLinks)
    }
    loadQueryParams()
  },[query])
  

  const addItens = useCallback(
    (newItem:RenderLinkProps)=>{
      !!newItem && setLinks(state => [...state,newItem])
  },[])

  function loadUrl(){
    const query = links.reduce((prev,{link,platform,afterDomain}) => prev+`&${platform}=${afterDomain}`,'')
    const fullUrl = `http://localhost:3000?${query}`;
    return fullUrl
  }


  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.LinksContainer>
        {links?.map(({platform,link,afterDomain}) => (
          <RenderLink key={link} link={link} platform={platform} afterDomain={afterDomain}/>
        ))}
      </S.LinksContainer>
      {hasEdition && (
        <>
          <AddLink addItens={addItens}/>
          <S.Url href={loadUrl()} target="_blank" rel="noopener noreferrer">
            {loadUrl()}
          </S.Url>
        </>
      )}
    </S.Container>
  )
}

export default LinkList