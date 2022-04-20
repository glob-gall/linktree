import {FaFacebookSquare, FaInstagram, FaGlobe, FaGithub} from 'react-icons/fa'

import * as S from './styles'
export type SocialLink = {
  link:string
}
export type RenderLinkProps  = SocialLink & {
  platform: 'facebook' | 'instagram' | 'website' | 'github'
  afterDomain:string
  link:string
}

export function InstragamLink({link}:SocialLink){
  return (
    <S.InstragramButton href={link} target="_blank" rel="noopener noreferrer">
        <FaInstagram/> 
        <p>Instagram</p>
      </S.InstragramButton>
  )
}

export function FacebookLink({link}:SocialLink){
  return (
    <S.FacebookButton href={link} target="_blank" rel="noopener noreferrer">
      <FaFacebookSquare/> 
      <p>Facebook</p>
    </S.FacebookButton>
  )
}

export function SiteLink({link}:SocialLink){
  return (
    <S.SiteButton href={link} target="_blank" rel="noopener noreferrer">
      <FaGlobe/> 
      <p>Website</p>
    </S.SiteButton>
  )
}
export function GithubLink({link}:SocialLink){
  return (
    <S.SiteButton href={link} target="_blank" rel="noopener noreferrer">
      <FaGithub/>
      <p>Github</p>
    </S.SiteButton>
  )
}

export default function RenderLink({platform,link}:RenderLinkProps){
  if (platform === 'instagram')
    return <InstragamLink link={link} />

  if (platform === 'facebook')
    return <FacebookLink link={link} />

  if (platform === 'website')
    return <SiteLink link={link} />
  
    if(platform === 'github')
      return <GithubLink link={link}/>

  return <p>ERROR!</p>
}