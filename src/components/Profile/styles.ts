import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  padding-top: 1.4rem;
  padding-bottom: 5.1rem;

  > p {
    font-weight: var(--bold);
  }

  button {
    display: flex;
    align-items: center;
    font-weight: var(--light);
    border: none;
    background: transparent;
    color: var(--white);
    font-size: 1.125rem;
   
    span {
      margin-left: 0.75rem;

      svg {
        color: var(--red);
      }
    }
  }
`

export const ProfileSection = styled.section`
  color: var(--white);
  margin-bottom: 2.75rem;

  div {
    @media (max-width: 1140px) {
      margin-left: 0.875rem;
    }  
  }

  h4 {
    margin-bottom: 0.5rem;

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
  }
`

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -70px;
  margin-bottom: 2.8rem;

`

export const GitInfoSection = styled.section`
  background: var(--gray-350);
  margin-bottom: 3rem;
`

export const GitInfoContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  color: var(--white);

  div {   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const BioSection = styled.section`
  color: var(--white);
  margin-bottom: 4.5rem;

  h4 {
    margin-bottom: 0.875rem;

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
    line-height: 1.5rem;
  }

  @media (max-width: 1140px) {
    margin-left: 0.875rem;
  }     
`