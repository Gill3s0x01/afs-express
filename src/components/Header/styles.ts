import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  padding: 10px;
`

export const LogoMain = styled.img`
  display: flex;
  align-items: center;
  margin-top: 12px;
  justify-content: flex-start;
`

export const WrapMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  margin-left: 50px;
`

export const TextMenu = styled.a`
  font-family: Poppins, 'Sans-serif';
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
  text-decoration: none;
`
