import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//@ts-ignore
import Fade from "react-reveal/Fade";
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';

import CentralizedLoader from '../../components/Loader/CentralizedLoader';

import { Container, Content, Wrapper, InputWrapper, ButtonWrapper } from "./styles";

import { api } from '../../services/api';
import GithubInfoContext from '../../context/github-info.context';

export function Login() {
  const history = useHistory();
  const { setGithubInfo } = useContext(GithubInfoContext);

  const [username, setUsername] = useState<string>('');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [invalidUsernameMsg, setInvalidUsernameMsg] = useState<string>('');

  useEffect(() => {
    if(!username){
      setInvalidUsernameMsg('Usuário inválido');
    } else {
      setInvalidUsernameMsg('');  
    }
  }, [username])

  const handleFetchGithubInformation = () => {
    if (!username) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
      setIsFetchingData(true);
      api.get(`/${username}`)
      .then((res) => {
        setInvalidUsernameMsg('');
        setGithubInfo(res.data)
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        history.push('/home')
      })
      .catch((error) => {
        if(error.message.includes("401")){
          setInvalidUsernameMsg('Usuario nao autorizado');
        }else {
          setInvalidUsernameMsg('Usuario invalido');
        }
        console.log(JSON.stringify(error));
        setIsSubmitted(false);
        console.log(error)
      }).finally(() => {
        setIsFetchingData(false)
      })
    }
  }
  if (isFetchingData) {
    return <CentralizedLoader />
  }
  return (
    <Container>
      <Fade bottom distance="80px">
      <Content>
        <Wrapper>
          <div>
            <AiFillGithub />
          </div>
        </Wrapper>
        <div>
          <InputWrapper>
            <input 
              name="username" 
              placeholder="Usuário"
              onChange={e => setUsername(e.target.value)}
            />
            {!username && isSubmitted && <small>Campo obrigatório</small>}
          </InputWrapper>
          <ButtonWrapper>
            <button type="submit" onClick={handleFetchGithubInformation}>
              ENTRAR
              <span><AiOutlineArrowRight size={24} /></span>
            </button>
            {username && invalidUsernameMsg && (
              <div>
                <span><FiAlertCircle size={20} /></span> 
                <p>{invalidUsernameMsg}</p>
              </div>
            )}
          </ButtonWrapper>
        </div>
      </Content>
      </Fade>
    </Container>
  )  
}