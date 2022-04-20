import Link from 'next/link'
import * as S from './styles'

function NotFoundPage(){
  return (
    <S.Container>
      <S.Title>404</S.Title>
      <S.SubTitle>Pagina não encontrada!</S.SubTitle>
      <Link href="/">
        <S.GoBack>
          Voltar para home
        </S.GoBack>
      </Link>
    </S.Container>
  )
}

export default NotFoundPage