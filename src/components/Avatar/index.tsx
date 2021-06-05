import { Wrapper } from './styles'

interface AvatarProps {
  isCard?: boolean;
  avatarUrl?: string;
}

export function Avatar({ isCard, avatarUrl }: AvatarProps) {
  return (
    <Wrapper isCard={isCard}>
      <img src={avatarUrl} alt="Foto do perfil" /> 
    </Wrapper>
  )
}