import { FiLogOut, FiLogIn } from 'react-icons/fi';

import { HeaderContainer } from '../HeaderContainer';
import { PageContainer } from '../PageContainer';
import { Avatar } from '../Avatar';

import { 
  Header, 
  ProfileSection,
  AvatarWrapper, 
  GitInfoSection, 
  GitInfoContainer, 
  BioSection 
} from './styles'

import { IGithubInfo } from '../../services/types';

export function Profile({ 
  avatar_url, 
  bio, 
  email, 
  followers, 
  following, 
  location,
  login,
  name,
  public_repos,
  isInitialProfile,
  onClickSaveButton,
  onClickLeaveButton, 
}: IGithubInfo) {
  return (
    <>
    <HeaderContainer>
      <Header>
        <p>{`#${login}`}</p>
        {isInitialProfile ? (
          <button onClick={onClickLeaveButton}>
            Sair
            <span><FiLogOut size={24} /></span>
          </button>
        ) : (
          <button onClick={onClickSaveButton}>
            Salvar
            <span><FiLogIn size={24} /></span>
          </button>
        )}
      </Header>
    </HeaderContainer>
    <PageContainer style={{marginBottom: '0'}}>
      <ProfileSection>
        <AvatarWrapper>
          <Avatar avatarUrl={avatar_url}/>
        </AvatarWrapper>
        <div>
          <h4>{name}</h4>
          <p>{email}</p> 
          <p>{location}</p>
        </div>
      </ProfileSection>
    </PageContainer>
    <GitInfoSection>
      <GitInfoContainer>
        <div>
          <h1>{followers}</h1>
          <p>Seguidores</p>
        </div>   
        <div>
          <h1>{following}</h1>
          <p>Seguindo</p>
        </div>   
        <div>
          <h1>{public_repos}</h1>
          <p>Repos</p>
        </div>
      </GitInfoContainer>
    </GitInfoSection>
    <PageContainer>
      <BioSection>
        <h4>BIO</h4> 
        <p>
          {bio}
        </p>
      </BioSection>
    </PageContainer>
    </>
  )
}