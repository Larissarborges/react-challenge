import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PageContainer } from '../../components/PageContainer';
import { User } from '../../components/cards/User';
import { Header } from '../../components/Header';
import CentralizedLoader from '../../components/Loader/CentralizedLoader';

import { Divisor } from './styles';

import { api } from '../../services/api';
import GithubInfoContext from '../../context/github-info.context';
import { IGithubInfoContext, IGithubFollow } from '../../services/types';

export function Following() {
  const history = useHistory();
  const { githubInfo } = useContext<IGithubInfoContext>(GithubInfoContext);
  const [gitFollowing, setGitFollowing] = useState<IGithubFollow[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);

  useEffect(() => {
    setIsFetchingData(true)
    api.get(`/${githubInfo.login}/following`)
      .then((res) => {
        setIsFetchingData(false)
        setGitFollowing(res.data)
      })
      .catch((error) => {
        setIsFetchingData(false)
        console.log(error)
      })
  }, [githubInfo.login])

  function handleFollowingInfo(username: string) {
    history.push(`/following/${username}`)
  }

  return (
    <>
      {isFetchingData ? <CentralizedLoader /> : (
        <> 
          <Header isFollower={false} title={gitFollowing.length}/>
          <PageContainer>
            {gitFollowing.map((following, index) => (
              <div key={index}>
                <User 
                  avatar_url={following.avatar_url}
                  login={following.login}
                  onclick={() => handleFollowingInfo(following.login)} 
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