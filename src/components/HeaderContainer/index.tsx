import { ReactNode } from 'react'
import { Container } from './styles'

import { PageContainer } from "../PageContainer"

interface HeaderContainerProps {
  children: ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <Container>
      <PageContainer style={{marginBottom: '0'}}>
        {children}
      </PageContainer>
    </Container>
  )
}