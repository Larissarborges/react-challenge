import styled from 'styled-components'

interface WrapperProps {
  isCard?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => props.isCard ? '4rem' : '7.2rem'};
  height: ${(props) => props.isCard ? '4rem' : '7.2rem'};
  border-radius: 50%;
  border: 3px solid var(--white);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    width: ${(props) => props.isCard ? '4rem' : '11rem'};
    height: ${(props) => props.isCard ? '4rem' : '11rem'};
  } 
`