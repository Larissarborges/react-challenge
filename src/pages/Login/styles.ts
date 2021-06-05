import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 340px;

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 1.25rem;
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
    outline: none;
    border: none;
    font-size: 1.25rem;
  }

  button {
    display: flex;
    justify-content: center;
    background-color: var(--yellow);
    color: var(--gray-850);
    padding: 1rem;
    border-radius: 0.75rem;
    font-size: 1.25rem;
    font-weight: var(--bold);
    border: none;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.8);
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.8rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 6.1rem;
    height: 6rem;
    margin-bottom: 3rem;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--yellow);
    }
  }
`

export const InputWrapper = styled.div`
  position: relative;

  small {
    color: var(--red);
    position: absolute;
    right: 16px;
    top: 25px;
  }
`

export const ButtonWrapper = styled.div`
  div {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      color: var(--red);
    }
  }
  
  p {
    color: var(--red);
    font-weight: var(--bold);
    margin-left: 0.5rem;
  }    
`