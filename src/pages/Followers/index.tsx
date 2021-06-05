import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PageContainer } from '../../components/PageContainer';
import { Header } from '../../components/Header';
import { Follower } from '../../components/Follower';
import CentralizedLoader from '../../components/Loader/CentralizedLoader';

import { Divisor } from './styles';

import { api } from '../../services/api';
import GithubInfoContext from '../../context/github-info.context';
import { IGithubInfoContext, IGithubFollow } from '../../services/types';

export function Followers() {
  const history = useHistory();
  const { githubInfo } = useContext<IGithubInfoContext>(GithubInfoContext);
  const [gitFollowers, setGitFollowers] = useState<IGithubFollow[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  useEffect(() => {
    setIsFetchingData(true)
    api.get(`/${githubInfo.login}/followers`)
      .then((res) => {
        setIsFetchingData(false)
        setGitFollowers(res.data)
      })
      .catch((error) => {
        setIsFetchingData(false)
        console.log(error)
      })
  }, [githubInfo.login])

  function handleFollowerInfo(username: string) {
    history.push(`/followers/${username}`)
  }

  return (
    <>
      {isFetchingData ? <CentralizedLoader /> : (
        <> 
          <Header isFollower title={gitFollowers.length}/>
          <PageContainer>
            {gitFollowers.map((follower, index) => (
              <div key={index} >
                <Follower
                  avatar_url={follower.avatar_url}
                  login={follower.login}
                  onclick={() => handleFollowerInfo(follower.login)}
                />
                <Divisor /> 
              </div>
            ))}
          </PageContainer>
        </>
      )}
    </>
  )
}