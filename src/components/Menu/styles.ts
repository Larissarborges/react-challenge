import styled from 'styled-components'

export const FooterMenu = styled.footer`
  width: 100%;
  background: var(--white);
  position: fixed;
  bottom: 0;
  z-index: 9999;
  border-radius: 1rem 1rem 0 0;

  ul {
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
    padding-bottom: 1rem;
    list-style: none;
  }
`