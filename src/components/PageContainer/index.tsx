import { CSSProperties, ReactNode } from 'react'
import { Container } from './styles'

interface PageContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function PageContainer({ children, style }: PageContainerProps) {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}