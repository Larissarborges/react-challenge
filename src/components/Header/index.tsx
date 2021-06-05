import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { HeaderContainer } from "../HeaderContainer";

import { Wrapper } from "./styles";

interface HeaderProps {
  title: number;
  isFollower: boolean;
}

export function Header({ title, isFollower }: HeaderProps) {
  const history = useHistory();

  return (
    <HeaderContainer>
        <Wrapper>
          <button onClick={() => history.goBack()}>
            <AiOutlineArrowLeft size={24} />
          </button>
          <p>{`${title} ${isFollower  ? 'seguidores' : 'seguindo'} `}</p>
        </Wrapper>  
      </HeaderContainer>
  )
}