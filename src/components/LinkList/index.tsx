import RenderLink, { RenderLinkProps } from './SocialLinks'
import * as S from './styles'

type LinkListProps = {
  title:string
  links?: RenderLinkProps[]
}

function LinkList({title,links} : LinkListProps){
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.LinksContainer>
        {links?.map(({platform,link}) => (
          <RenderLink key={link} link={link} platform={platform} />
        ))}
      </S.LinksContainer>
    </S.Container>
  )
}

export default LinkList