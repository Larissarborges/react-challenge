import styled from 'styled-components'

export const Card = styled.section`
  color: var(--white);
  padding-top: 3rem; 
  padding-bottom: 2rem;

  div {
    @media (max-width: 1140px) {
      margin-left: 0.875rem;
    }  
  }

  h6 {
    margin-bottom: 0.6rem;

    &::before {
      content: '';
      width: 0.625rem;
      height: 2.6rem;
      background-color: var(--yellow);
      position: absolute;
      left: 0;
      border-radius: 0 1rem 1rem 0;
    }   
  }

  p {
    font-weight: var(--light);
    margin-bottom: 0.8rem;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;

    svg {
      color: var(--yellow);
    }

    p {
      font-weight: var(--light);
      margin-left: 0.4rem;
      margin-bottom: 0.8rem;
    }

    & + div {
      span {
        margin-left: 0.8rem;
      }
    }
  }
`