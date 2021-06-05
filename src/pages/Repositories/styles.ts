import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: flex-start;
  align-items: center;
  color: var(--white);
  margin-bottom: 1.25rem;

  button {
    border: none;
    background-color: transparent;

    svg {
      color: var(--white);
    }
  }

  p {
    font-weight: var(--bold);
  }
`

export const Divisor = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--gray-350);
  border: none;
`