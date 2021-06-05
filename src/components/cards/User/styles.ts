import styled from 'styled-components'

export const Card = styled.section`
  color: var(--white);
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    &::before {
      content: '';
      width: 0.625rem;
      height: 2.8rem;
      background-color: var(--yellow);
      position: absolute;
      left: 0;
      border-radius: 0 1rem 1rem 0;
    }

    @media (max-width: 1140px) {
      margin-left: 0.875rem;
    }  
  }

  p {
    font-weight: var(--bold);
  }

  button {
    border: none;
    background: transparent;
    color: var(--white);
  }
`