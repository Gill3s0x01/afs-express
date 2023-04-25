import logoImg from '../../assets/Logo1.svg'
import { Container, LogoMain, TextMenu, WrapMenu } from './styles'

export function Header() {
  return (
    <>
      <div>
        <Container>
          <LogoMain src={logoImg.src} alt='' />
          <WrapMenu>
            <TextMenu>Sobre a AFS Cargo</TextMenu>
            <TextMenu>Seja um franqueado</TextMenu>
            <TextMenu>Fale Conosco</TextMenu>
          </WrapMenu>
        </Container>
      </div>
    </>
  )
}
