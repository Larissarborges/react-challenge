import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Profile } from '../../components/Profile';
import CentralizedLoader from '../../components/Loader/CentralizedLoader';

import GithubInfoContext from '../../context/github-info.context';
import { IGithubInfoContext } from '../../services/types';

export function Home() {
  const history = useHistory();
  const { githubInfo, setGithubInfo } = useContext<IGithubInfoContext>(GithubInfoContext);

  function handleLeaveButton() {
    setGithubInfo({});
    localStorage.setItem('userInfo', '')
    history.push('/')
  }

  return (
    <>
    {githubInfo ?
      <Profile 
        isInitialProfile
        avatar_url={githubInfo.avatar_url as string}
        bio={githubInfo.bio as string}
        email={githubInfo.email as string}
        followers={githubInfo.followers as number}
        following={githubInfo.following as number}
        location={githubInfo.location as string}
        login={githubInfo.login as string}
        name={githubInfo.name as string}
        public_repos={githubInfo.public_repos as number}
        onClickLeaveButton={handleLeaveButton}
      /> : <CentralizedLoader />
    } 
    </>
  )
}